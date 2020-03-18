import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    searchWord: ''
  }

  componentDidMount(){
    fetch ('http://localhost:6001/transactions')
    .then (r => r.json())
    .then (transactionArray =>{
      this.setState({
        transactions: transactionArray
      })
    })
  }

  // adding a transaction
  // create a object that mimics the DB 

  addTransaction = (transactionInfo) => {
    let formatedTranscation = {
      date: transactionInfo.date,
      description: transactionInfo.description,
      category: transactionInfo.category,
      amount: transactionInfo.amount
    }
      fetch('http://localhost:6001/transactions', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formatedTranscation),
    })
    .then((response) => response.json())
    .then((newTransaction) => {
      let newTransactionsArray = [...this.state.transactions, newTransaction]
      this.setState({
        transactions: newTransactionsArray
      })
    })
  }
  

  handleSearchWord = (word) => {
     this.setState({
       searchWord: word
     })
  }

  searchArray = () => {
    let {transactions, searchWord} = this.state
    let filteredArray = transactions.filter((transaction) => {
      return transaction.description.includes(searchWord)
    })
    return filteredArray
  }
  

  render() {
    // console.log(this.searchArray());

    return (
      <div>
        <Search searchWord={this.state.searchWord} handleSearchWord={this.handleSearchWord} />
        <AddTransactionForm addTransaction={this.addTransaction} />
        <TransactionsList transactions={this.searchArray()} />
      </div>
    );
  }
}

export default AccountContainer;
