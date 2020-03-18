import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state ={
    transactions: [],
    searchTerm: ""
  }

  changeSearchTerm = (term) => {

    this.setState({
      searchTerm: term
    })

  }

  specificTransaction = () => {
    let { transactions, searchTerm } = this.state
    let filterArr = transactions.filter( tran => {
      return tran.description.includes(searchTerm)
    })

    return filterArr

  }

  componentDidMount() {
    fetch("http://localhost:6001/transactions")
      .then( res => res.json() )
      .then( transactionArr => {
        this.setState({
          transactions: transactionArr
        })
      })
  }

  addOneTransaction = (transactionObj) => {
    
    let formattedTransaction = {
      date: transactionObj.date,
      description: transactionObj.description,
      category: transactionObj.category,
      amount: transactionObj.amount
    }


    fetch("http://localhost:6001/transactions", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify( formattedTransaction )
    })
      .then( res => res.json() )
      .then( nTransaction => {

        let newArr = [nTransaction, ...this.state.transactions]

        this.setState({
          transactions: newArr
        })

      } )
  }

  render() {
    return (
      <div>
        <Search 
          changeSearchTerm={ this.changeSearchTerm }
          transactionSearchTerm={ this.state.searchTerm }
        />
        
        <AddTransactionForm 
          addOneTransaction={ this.addOneTransaction } 
        />

        <TransactionsList 
          transactionArr={ this.specificTransaction()}
         />
      </div>
    );
  }
}

export default AccountContainer;
