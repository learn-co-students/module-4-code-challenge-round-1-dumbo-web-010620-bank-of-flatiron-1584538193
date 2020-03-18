import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const API = "http://localhost:6001/transactions"

class AccountContainer extends Component {
  state={
    transactions:[],
    typeInp:""
  }

  async componentDidMount(){
    let resp = await fetch(API)
    let transactions = await resp.json()
    this.setState({
      transactions:transactions
    }) 
  }

   addOneTrans= async (newObj)=>{
    let newArray = this.state.transactions
    
    let resp = await fetch(API,{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify(newObj)
    })
    let newTransObj = await resp.json()
    
    newArray.push(newTransObj)
    this.setState({
      transactions:newArray
    })
  }

  updateInput=(newInput)=>{
    this.setState({
      typeInp:newInput
    })
  }

  filterTrans=()=>{
    let {transactions,typeInp} = this.state

    let filteredArray = transactions.filter(transObj => transObj.description.includes(typeInp))
    return filteredArray
    
  }

  render() {
    
    return (
      <div>
        <Search typeInp={this.state.typeInp} updateInput={this.updateInput}/>
        <AddTransactionForm addOne={this.addOneTrans}/>
        <TransactionsList transData={this.filterTrans()}/>
      </div>
    );
  }
}

export default AccountContainer;
