import React, { Component } from "react";

class AddTransactionForm extends Component {
  state = {
    date: undefined,
    description: "",
    category: "",
    amount: 0
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addNewTransaction(this.state)
  }

  handleInputs = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    let { date, description, category, amount } = this.state
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="inline fields">
            <input type="date" name="date" value={date} onChange={this.handleInputs}/>
            <input type="text" name="description" placeholder="Description" value={description} onChange={this.handleInputs}/>
            <input type="text" name="category" placeholder="Category" value={category} onChange={this.handleInputs}/>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={amount}
              onChange={this.handleInputs}
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
