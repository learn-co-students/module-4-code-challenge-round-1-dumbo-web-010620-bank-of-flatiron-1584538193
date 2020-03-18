import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";

// Lodash import?
import { sortBy } from 'lodash';
//

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
 //-----------------------------TEST AREA-----------------//
  //.sort() sorts into alphabetical order 
  // lodash has a .sortBy() method.
  // can't filter + sort.. makes no sense. have to sort the WHOLE thing.. based on description.
  // test this first.

  sortByClick = (childCategory) => { // defined, passed to children, unused.
    let newArr = sortBy(this.state.transactionList, childCategory)

    this.setState({
      transactionList: newArr
    })
  }

  //------------------------------------------------------//

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

          sortByCategory={this.sortByClick}

        />
      </div>
    );
  }
}

export default App;
