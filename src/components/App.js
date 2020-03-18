import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";

class App extends Component {

  state = {
    transactions: [],
    search: ''
  }

  changeSearchValue = (input) => {
    this.setState({
      search: input
    })
  }


  componentDidMount(){
    fetch('http://localhost:3001/transactions')
      .then(res => res.json())
      .then(data => {
        this.setState({
          transactions: data
        })
      })
  }

  addNewTransaction = (transactObj) => {
    let newTransactObj = {
        ...transactObj,
      id: Math.floor(Math.random() *100)
    }

    fetch('http://localhost:3001/transactions', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      }, body: JSON.stringify(newTransactObj)
    })
      .then(res => res.json()).then( (newTransactObj) => {
        let newArrayOfTrans = [newTransactObj, ...this.state.transactions]
          this.setState({
            transactions: newArrayOfTrans
            })
      })
    
  }

  

  newFilteredStuff = () => {
    let {transactions, search} = this.state
    let filteringContainer = transactions.filter((trans) => {
      // console.log(trans);
      
      return trans.description.includes(search)
    })
    return filteringContainer
  }
  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer search={this.state.search} 
                          searching={this.changeSearchValue} 
                          transactions={this.newFilteredStuff()} 
                          addingTrans={this.addNewTransaction}
                          />
      </div>
    );
  }
}

export default App;
