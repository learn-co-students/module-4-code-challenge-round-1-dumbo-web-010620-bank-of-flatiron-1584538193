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
    fetch("http://localhost:6001/transactions")
    .then(r => r.json())
    .then(array => {
      this.setState({
        transactions: array
      })
    })
  }

  changeTerm = (string) => {
    this.setState({
      searchTerm: string
    })
  }

  newFilteredArray = () => {
    let {searchTerm, transactions} = this.state
    let filteredArray = transactions.filter(t => {
      return t.description.toLowerCase().includes(searchTerm)
    })
    return filteredArray
  }

  addTransaction = (newTransaction) => {
    fetch("http://localhost:6001/transactions", {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newTransaction)
    })
    .then(r => r.json())
    .then(result => {
      let newArray = [...this.state.transactions, result]
      this.setState({
        transactions: newArray
      })
    })
  }

  deleteTransaction = (objID) => {
    fetch(`http://localhost:6001/transactions/${objID}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(() => {
      let newArray = this.state.transactions.filter(t => {
        return t.id !== objID
      })
      this.setState({
        transactions: newArray
      })
    })

  }
  
  render() {

    return (
      <div>
        <Search searchTerm={this.state.searchTerm} changeTerm={this.changeTerm}/>
        <AddTransactionForm addTransaction={this.addTransaction}/>
        <TransactionsList transactions={this.newFilteredArray()} deleteTransaction={this.deleteTransaction}/>
      </div>
    );
  }
}

export default AccountContainer;
