import React, { Component } from "react";

class AddTransactionForm extends Component {
  //define the state with an object that can be sent back to parent after it is set
  state = {
    date: "",
    description: "",
    category: "",
    amount: 0
  }
  
  handleOnChange = (e) => {
    //make sure component is controlled
    //we set the state in here
    this.setState({
      [e.target.name]: e.target.value
      
    })
  }

  handleSubmit = (e) => {
    //this will collect the e.target.value and send them back to Account Container.
    //We first need a function from the Acct Container
    //on submit it will send an object back to the parent
    //
    e.preventDefault();
    this.props.newTransaction(this.state)
    

  }
  render() {
    console.log(this.props)
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="inline fields">
            <input type="date" name="date" value={this.state.date} onChange={this.handleOnChange} />
            <input type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.handleOnChange} />
            <input type="text" name="category" placeholder="Category" value={this.state.category} onChange={this.handleOnChange} />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={this.state.amount} 
              onChange={this.handleOnChange}
            />
          </div>
          <button className="ui button" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
