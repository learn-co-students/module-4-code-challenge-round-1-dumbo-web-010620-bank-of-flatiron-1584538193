import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  render() {
    return (
      <div>
        <Search 
          searchTerm={this.props.searchTerm}
          handleSearchTerm={this.props.handleSearchTerm}
        />
        <AddTransactionForm 
          addOneTransaction={this.props.addOneTransaction}
        />
        <TransactionsList 
          transactions={this.props.transactions}
          deleteOneTransaction={this.props.deleteOneTransaction}
        />
      </div>
    );
  }
}

export default AccountContainer;
