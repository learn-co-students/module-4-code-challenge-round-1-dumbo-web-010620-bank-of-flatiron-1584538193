import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import DropDown from './DropDown.js'

class AccountContainer extends Component {

  state = {
    transactions: [],
    searchTerm: "",
    filterTerm: "All"
  }

  componentDidMount() {
    fetch("http://localhost:6001/transactions")
    .then( r => r.json())
    .then( resp => {
      this.setState({
        transactions: resp
      })
    })
  }

  addOneTransaction = (transObj) => {
    let correctFormat = {
      ...transObj,
      date: transObj.date,
      description: transObj.description,
      category: transObj.category,
      amount: transObj.amount
    }
    fetch("http://localhost:6001/transactions", {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(correctFormat)
    })
    .then( r => r.json())
    .then( newTransaction => {
      let newArray = [...this.state.transactions, newTransaction]
      this.setState({
        transactions: newArray
      })
    })
  }

  handleSearchTerm = (term) => {
    this.setState({
      searchTerm: term
    })
  }

  returnFilteredArray = () => {
    let { transactions, searchTerm } = this.state
    let filteredArray = transactions.filter( transaction => {
      return transaction.description.toLowerCase().includes(searchTerm) || transaction.category.toLowerCase().includes(searchTerm)
    })
    return filteredArray
  }

  deleteOneTransaction = (id) => {
    // let thisTransaction = this.state.transaction.find( transaction => transaction.id === id)
    fetch(`http://localhost:6001/transactions/${id}`, {
      method: "DELETE"
    })
    .then( r => r.json())
    .then( () => {
      let newArray = this.state.transactions.filter( transaction => {
        return transaction.id !== id
      })
      this.setState({
        transactions: newArray
      })
    })
  }

  handleCategory = (e) => {
    let sortCategory = this.state.transactions.category.sort( (a, b) => a.category.localeCompare(b.category))
    this.setState({
      filterTerm: sortCategory
    })
  }

  render() {
    return (
      <div>
        <Search searchTerm={this.state.searchTerm} handleSearchTerm={this.handleSearchTerm} />
        <AddTransactionForm addOneTransaction={this.addOneTransaction} />
        <DropDown filterTerm={this.state.filterTerm} handleCategory={this.handleCategory} />
        <TransactionsList transactions={this.returnFilteredArray()} deleteOneTransaction={this.deleteOneTransaction} handleCategory={this.handleCategory} />
      </div>
    );
  }
}

export default AccountContainer;
