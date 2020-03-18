import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  // const AccountContainer = (propsObj) => {

//   let array = propsObj.transactions.map((transaction) => {
//     return <TransactionsList transactions={transactions} />
//   })
//   }   
        //  


  state = {
    transaction: [],
  }

  componentDidMount() {
    fetch("http://localhost:6001/transactions")
      .then(r => r.json())
      .then((transaction) => {
        this.setState({  
        transaction: transaction
      })
      })
  }

  render() {
  
    return (
      <div>
        <Search />
        <AddTransactionForm />
        <TransactionsList transaction={this.state.transaction}  />
      </div>
    );
  }
}

export default AccountContainer;
