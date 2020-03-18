import React, { Component } from "react";

class AddTransactionForm extends Component {

  //Needs to have its own state
  
  // look like this
  state = {
   date: '',
   description: '', 
   category: '',
   amount: ''
  }

  // Have an eventHandler, that would grab the user Input and change the state to that value
  handleInput = (e) => {
   this.setState({
     [e.target.date]: e.target.value
  })
  }

  // Prevent the page from refreshing

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addTransaction(this.state)
  }
  // Error Says I

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="inline fields">
            <input type="date" name="date" onChange={this.handleChange} value={this.state.date}/>
            <input type="text" name="description" placeholder="Description" onChange={this.handleChange} value={this.state.description} />
            <input type="text" name="category" placeholder="Category" onChange={this.handleChange} value={this.state.category}/>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              onChange={this.handleChange}
              value={this.state.amount}
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
