import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";

const API = "http://localhost:6001/transactions"

class App extends Component {

  state = {
    transactionList: [],
    searchTerm: ""
  }

  componentDidMount(){ // "get" done.
    fetch(API)
    .then(r => r.json())
    .then((data) => {
      this.setState({
        transactionList: data
      })
    })
  }

  //POST - done
  addNewTransaction = (transObj) => {
    fetch(API, {
      method: "POST",
      headers: {
        "content-type":"application/json"
      },
      body: JSON.stringify(transObj)
    })
    .then(r => r.json())
    .then((newObj) => {
      let newArray = [...this.state.transactionList, newObj]
      this.setState({
        transactionList: newArray
      })
    })
  }

  //DELETE - done
  deleteTransaction = (id) => {
    fetch(API + `/${id}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(() => {
      let filteredArray = this.state.transactionList.filter(transactionObj => {
        return transactionObj.id !== id
      })
      this.setState({
        transactionList: filteredArray
      })
    })
  }



  //filtering
  filteredArray = () => {
    let filteredByDesc = this.state.transactionList.filter((transaction) => {
      return transaction.description.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })
    return filteredByDesc
  }

  // searchBar functionality.
  changeSearchTerm = (termFromSearchChild) => {
    this.setState({
      searchTerm: termFromSearchChild
    })
  }

  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        
        <AccountContainer 
          transactionList={this.filteredArray()}
          addNewTransaction={this.addNewTransaction}

          searchTerm={this.state.searchTerm}
          changeSearchTerm={this.changeSearchTerm}

          deleteTransaction={this.deleteTransaction}

        />
      </div>
    );
  }
}

export default App;
