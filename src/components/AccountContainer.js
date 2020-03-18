import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state = {
    transactions: [],
    searchTerm: ""
  }

  componentDidMount(){
    fetch('http://localhost:6001/transactions')
    .then(response => response.json())
      .then(transactions => {
        this.setState({
          transactions: transactions
        })
        })
    }

  changeSearch = (termFromUser) => {
    this.setState({
      searchTerm: termFromUser
    })
  }

  

 addTransaction = (infofromForm) => {
    console.log(infofromForm)
    fetch('http://localhost:6001/transactions', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(infofromForm)
      })
    .then(response => response.json())
    .then((newTransaction) => {
      let newArray = [...this.state.transactions, newTransaction]
      this.setState({
        transactions: newArray
      })
    })
  }

  displayArray = () => {
      let {transactions, searchTerm} = this.state
      let filteredArray = transactions.filter((transaction) => {
        return transaction.description.includes(searchTerm)
      })
        return filteredArray
  }


  render() {
    // console.log(this.state.searchTerm) 
    // cdm&fetch worked
    return (
      <div>
        <Search 
          searchTerm={this.state.searchTerm}
          changeSearch={this.changeSearch}
        />

        <AddTransactionForm 
          addTransaction={this.addTransaction}

        />

        <TransactionsList 
         transactions={this.displayArray()}
        />
      </div>
    );
  }
}

export default AccountContainer;
