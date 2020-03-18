import React, { Component } from "react";

class AddTransactionForm extends Component {


  constructor() {
    super()

    this.state = {
      date: '',
      description: '',
      category: '',
      amount: 0
    }
  }

  handleInput = (e) => {
    
    this.setState({
      [e.target.description]: e.target.value
    })
  }


handleAdd = (e) => {

  e.preventDefault()

  this.props.addOneTransaction( this.state )

}



  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="inline fields">
            <input type="date" name="date" onChange={this.handleInput} value={ this.state.date } />
            <input type="text" name="description" placeholder="Description" onChange={this.handleInput} value={ this.state.description }  />
            <input type="text" name="category" placeholder="Category" onChange={this.handleInput} value={ this.state.category}  />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              onChange = {
                this.handleInput
              }
              value = { this.state.amount}
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
