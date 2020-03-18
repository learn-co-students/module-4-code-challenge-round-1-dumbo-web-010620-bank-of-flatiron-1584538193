import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  render() {
    // console.log(this.props)
    return (
      <div>
        <Search searchBar={this.props.searchBar} handleSearchTerms={this.props.handleSearchTerms} />
        <AddTransactionForm submitTrans={this.props.submitTrans}/>
        <TransactionsList bankData={this.props} handleDelete={this.props.handleDelete} />
      </div>
    );
  }
}

export default AccountContainer;
