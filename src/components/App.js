import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";

class App extends Component {


//Filter transactions by typing into the search bar. Only transactions with a
//  description matching the search term should be shown in the transactions table.

state = {
  bankData:[],
  searchBar: ""
}

componentDidMount(){
  fetch('http://localhost:6001/transactions')
  .then(res => res.json())
  .then(bankObjs => this.setState({
    bankData: bankObjs
  }))

}


submitTrans = (transObj) => { //Goes to the bottom of the list, if that's what you're looking for?
  console.log(transObj)

  fetch('http://localhost:6001/transactions', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
    },
  body: JSON.stringify(transObj)
  }).then(res => res.json())
  .then((newObj) => {
    let newArr = [...this.state.bankData, newObj]

    this.setState({
    bankData: newArr
   })

  })
}

handleSearchTerms = (searchTerm) => {
  // console.log(searchTerm)
  this.setState({
    searchBar: searchTerm
  })
}

filterArr = () => {
  let filteredArr = this.state.bankData.filter(transObj => {
    return transObj.description.includes(this.state.searchBar)
  })
  return filteredArr
}

handleDelete = (obj) => {
  console.log(obj)

  fetch(`http://localhost:6001/transactions/${obj}`, {
  method: 'DELETE',
  }).then(res => res.json())
  .then(deletedObj => {
    let filterArr = this.state.bankData.filter(transObj => {
      return transObj.id !== obj
  })
  this.setState({
    bankData: filterArr
     })
  })
}


  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer bankData={this.filterArr()} submitTrans={this.submitTrans} searchBar={this.state.searchBar} handleSearchTerms={this.handleSearchTerms} handleDelete={this.handleDelete}/>
      </div>
    );
  }
}

export default App;
