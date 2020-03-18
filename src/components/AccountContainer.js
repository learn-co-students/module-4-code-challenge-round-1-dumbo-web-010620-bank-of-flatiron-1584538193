import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions : [],
    searchTerm: ""
  }
  
  componentDidMount() {
    fetch("http://localhost:6001/transactions")
      .then(res => res.json())
      .then(transactions => {
        this.setState({
          transactions: transactions
        })
      })
  }

  changeSearch = (termFromChild) => {
    this.setState({
      searchTerm: termFromChild
    })
  }

  returnSearchTerm = () => {
    let filteredDescriptionArray = this.state.transactions.filter((transaction) => {
      return transaction.description.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })
    return filteredDescriptionArray
  }


  addTransaction = (transaction) => {
    // console.log(transaction)
    fetch("http://localhost:6001/transactions", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(transaction)
    })
    .then(resp => resp.json())
    .then((transaction) => {
      let newArray = [...this.state.transactions, transaction]
      this.setState({
        transactions: transaction
      })
    })
  }
  
  render() {
    // console.log(this.state.transactions)
    return (
      <div>
        <Search 
        searchTerm = {this.state.searchTerm}
        changeSearch= {this.changeSearch}
        />
        <AddTransactionForm 
        addTransaction = {this.addTransaction}
        />
        <TransactionsList 
        transactions = {this.returnSearchTerm()}/>
      </div>
    );
  }
}

export default AccountContainer;
