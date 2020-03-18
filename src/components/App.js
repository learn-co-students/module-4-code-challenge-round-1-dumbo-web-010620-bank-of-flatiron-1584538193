import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";

class App extends Component {

  state = {
    transactions: [],
    searchTerm: ""
  }

  componentDidMount = () => {
    fetch("http://localhost:6001/transactions")
      .then(r => r.json())
      .then(transactionsArray => {
        this.setState({
          transactions: transactionsArray
        })
      })
  }

  addOneTransaction = (objectFromChild) => {
    fetch("http://localhost:6001/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(objectFromChild)
    })
    .then(r => r.json())
    .then(newTransaction => {
      let newArray = [...this.state.transactions, newTransaction]
      this.setState({
        transactions: newArray
      })
    })
  }

  deleteOneTransaction = (id) => {
    fetch(`http://localhost:6001/transactions/${id}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(() => {
      let newArray = this.state.transactions.filter(transaction => {
        return transaction.id !== id
      })
      this.setState({
        transactions: newArray
      })
    })
  }

  handleSearchTerm = (termFromChild) => {
    this.setState({
      searchTerm: termFromChild
    })
  }

  renderTransactionsArray = () => {
    let filteredArray = this.state.transactions.filter(transaction => {
      return transaction.description.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })
    return filteredArray
  }

  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer 
          transactions={this.renderTransactionsArray()}
          addOneTransaction={this.addOneTransaction}
          deleteOneTransaction={this.deleteOneTransaction}
          searchTerm={this.state.searchTerm}
          handleSearchTerm={this.handleSearchTerm}
        />
      </div>
    );
  }
}

export default App;
