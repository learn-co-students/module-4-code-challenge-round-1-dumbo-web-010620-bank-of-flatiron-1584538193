import React, { Component } from "react";

class AddTransactionForm extends Component {
  state = {
    date: "2020-01-20",
    description: "test",
    category: "test",
    amount: 0
  }

  handleChanges = (evt) => {
    let {value, name} = evt.target 
    this.setState({
      [name]: value
    }, console.log(this.state))
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    let newTransaction = this.state
    console.log(newTransaction)
    this.props.addTransaction(newTransaction)
  }

  

  render() {
    // console.log(this.state) works & dynamically changes. now to submit :)
    let {date, description, category, amount} = this.state
    return (
      <div className="ui segment">
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="inline fields">
            <input 
              type="date" 
              name="date" 
              value={date}
              onChange={this.handleChanges}
            />
            <input 
              type="text" 
              name="description" 
              placeholder="Description" 
              value={description}
              onChange={this.handleChanges}
            />
            <input 
              type="text" 
              name="category" 
              placeholder="Category" 
              value={category}
              onChange={this.handleChanges}
            />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={amount}
              onChange={this.handleChanges}
            />
          </div>
          <button
            className="ui button" 
            type="submit" 
            value="Submit" 
           >
            Add Transaction
          </button>
          {/* <input type="submit"  /> */}
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
