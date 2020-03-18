import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    allTransactions: [],
    searchTerm: '',
  }

  componentDidMount() {
    fetch("http://localhost:6001/transactions")
    .then(r => r.json())
    .then(data => this.setState({
      allTransactions: data
    }))
  }

  addNewTransaction = (transaction) => {
    fetch("http://localhost:6001/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ ...transaction })
    })
    .then(r => r.json())
    .then(newObj => {
      let newTransactionList = [...this.state.allTransactions, newObj]
      this.setState({
        allTransactions: newTransactionList
       })
    })
  }

  deleteTransaction = (id) => {
    let updatedTransactionList = this.state.allTransactions.filter(transaction => transaction.id !== id)

    this.setState({
      allTransactions: updatedTransactionList
    })

    fetch(`http://localhost:6001/transactions/${id}`, {
      method: "DELETE"
    })
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  render() {
    return (
      <div>
        <Search searchTerm={ this.state.searchTerm } handleChange={ this.handleChange }/>
        <AddTransactionForm addNewTransaction={ this.addNewTransaction } />
        <TransactionsList
          allTransactions={ this.state.allTransactions }
          searchTerm={ this.state.searchTerm }
          deleteTransaction={ this.deleteTransaction }
        />
      </div>
    );
  }
}

export default AccountContainer;
