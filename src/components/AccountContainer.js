import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state = {
    transactions: [],
    searchTerm: ""
  }


  componentDidMount = () => {
    fetch('http://localhost:6001/transactions')
    .then(r => r.json())
    .then(transactionData => {
      this.setState({
        transactions: transactionData
      })
    })
  }

  //must send searchTerm down to search bar to control input
  changeSearchTerm = (termFromChild) => {
      this.setState({
        searchTerm: termFromChild
      })
  }

  willReturnArrayOfTransactionsTerm = () => {
      let filteredArrayOfTransactions = this.state.transactions.filter(transactionObj => {
          return transactionObj.description.toLowerCase().includes(this.state.searchTerm)
      })
      return filteredArrayOfTransactions
  }

  newTransaction = (transactionObj) => {
    //send this to the form
    //now we'll take this object, copy the goods, create a new object, and start our post fetch
    let newTransactionObj = {...transactionObj}
    fetch('http://localhost:6001/transactions',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(newTransactionObj)
    })
    .then(r => r.json())
    .then(brandNewTransaction => {
      let newArrayOfTransactions = [brandNewTransaction, ...this.state.transactions]
      this.setState({
        transactions: newArrayOfTransactions
      })
    })
  }

  deleteOneTransaction = (id) => {
    fetch(`http://localhost:6001/transactions/${id}`,{
      method: 'DELETE'
    })
    .then(r => r.json())
    .then(transactionsAfterDel => {
      this.setState({
        transactions: this.state.transactions.filter(transactionObj => transactionObj.id !== id )
      })
    })
  }

  // delete(id){
  //   this.setState(prevState => ({
  //       data: prevState.data.filter(el => el != id )
  //   }));


  
      
  

  render() {
    console.log(this.state)
    return (
      <div>
        <Search changeSearchTerm={this.changeSearchTerm} />
        <AddTransactionForm newTransaction={this.newTransaction}/>
        <TransactionsList transactions={this.willReturnArrayOfTransactionsTerm()} deleteOneTransaction={this.deleteOneTransaction} />
      </div>
    );
  }
}

export default AccountContainer;
