import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    searchTerm: ""
  }
// initial fetch of dataArray
  componentDidMount(){
    
    fetch(`http://localhost:6001/transactions`)
    .then(resp => resp.json())
    .then(transactionsArray => {
      
      this.setState({
        transactions: transactionsArray
      })
     
    })
  }
  //function to addnewtransaction and make the data persist in backend. POST
  addNewTransaction = (transactionObj) => {
    
    fetch(`http://localhost:6001/transactions`, {
      method: "POST",
      headers: {
        "Accept": 'application/json',
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(transactionObj)
    })
    .then(resp => resp.json())
    .then(newTransaction => {

      let updatedNewTransaction = {
        ...newTransaction, 
        amount: parseInt(newTransaction.amount)
      }
      // console.log(newTransaction)
      let updatedArray = [updatedNewTransaction, ...this.state.transactions]

      this.setState({
        transactions: updatedArray
      })
    })
  }

  //sole purpose is to change state using the data from <Search /> (child)
  changeSearchTerm = (term) => {
    
    // console.log(term)

    this.setState({
      searchTerm: term
    })

  }


  //change array being rendered through search
  //does the description include whatever is being typed? if so, return that transaction in array
  returnFilteredArray = () => {
    let filteredArray = this.state.transactions.filter(transaction => {
      return transaction.description.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })
    return filteredArray
  }

  //deleting a transaction from front end and backend. Pass fn down to list(child),
  //down to transaction (grandchild). pass id back up 
  //fetch DELETE
  //update state of transactions- minus deleted transaction
  deleteOneTransaction = (id) => {
      // console.log(id)
    fetch(`http://localhost:6001/transactions/${id}`, {
      method: "DELETE"
    })
    .then(resp => resp.json())
    .then(() => {
      let updatedArray = this.state.transactions.filter(transaction => {
        return transaction.id !== id
      })
      this.setState({
        transactions: updatedArray
      })

    })
  }



  render() {
    console.log(this.sortedTransaction())
    return (
      <div>
        <Search changeSearchTerm={this.changeSearchTerm} searchTerm={this.state.searchTerm}/>
        <AddTransactionForm addNewTransaction={this.addNewTransaction} />
        <TransactionsList transactions={this.returnFilteredArray()} deleteOneTransaction={this.deleteOneTransaction} />
      </div>
    );
  }
}

export default AccountContainer;


