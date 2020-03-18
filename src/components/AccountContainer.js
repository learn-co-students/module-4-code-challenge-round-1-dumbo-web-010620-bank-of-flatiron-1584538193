import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    search: "",
  }  

  componentDidMount() {
    fetch('http://localhost:6001/transactions')
    .then(r => r.json())
    .then(transactions => {
      this.setState({
        transactions: transactions
      })
    })
  }

  newSearch = (searchTermInput) => {
    this.setState({
      search: searchTermInput  //resetting state of 'search'
    })
  }

  filterTransaction = () => {
    let {transactions, search} = this.state

    let filter = transactions.filter((transaction) => {
        return transaction.description.includes(search) 
    })
    return filter  //doesn't work :(
  }


  addNewTransaction = (newTransaction) => {
    fetch('http://localhost:6001/transactions', {
      method: 'POST',
      headers: {
        "content-type":'application/json'
      },
      body: JSON.stringify(newTransaction)
    })
    .then(r => r.json())
    .then((mostRecentTransaction) => {
      let newTransactionArr = [...this.state.transactions, mostRecentTransaction]
      this.setState({
        transactions: newTransactionArr
      })
    })
  } // also doesn't work :(



  render() {
    return (
      <div>
        <Search search={this.state.search}
          newSearch={this.newSearch}
          transactions={this.filterTransaction}/>  
        <AddTransactionForm addNewTransaction={this.addNewTransaction}/>
        <TransactionsList transactions={this.state.transactions} /> 
      </div>
    );
  }
}

export default AccountContainer;
