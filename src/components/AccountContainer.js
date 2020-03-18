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
    filteredDescriptionArray.sort((a,b) => a.description.localeCompare(b.description))
    // filteredDescriptionArray.sort((a,b) => a.category.localeCompare(b.category))
    
    return filteredDescriptionArray
  }

  deleteTransaction = (id) => {
    // console.log(id)
    fetch(`http://localhost:6001/transactions/${id}`, {
      method: "DELETE"
    })
    .then(resp => resp.json())
    .then(() => {
      let deletedArray = this.state.transactions.filter(transaction => {
        return transaction.id !== id
      })
      this.setState({
        transactions: deletedArray
      })
    })
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
        transactions = {this.returnSearchTerm()}
        deleteTransaction={this.deleteTransaction}
        />
      </div>
    );
  }
}

export default AccountContainer;
