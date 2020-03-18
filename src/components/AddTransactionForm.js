import React, { Component } from "react";

class AddTransactionForm extends Component {

  state = {
    date: "",
    description: "something",
    category: "hi",
    amount: ""
  }

  handleDate = (e) => {
    this.setState({
      date: e.target.value
    })
  }
  
  handleAllInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    // console.log(this.state)
    this.props.addOneTransaction(this.state)
  }
  
  render() {
    
    console.log(this.state.date)

    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="inline fields">
            <input type="date" id="start" name="trip-start"
              value={this.state.date}
              min="2020-03-18" 
              onChange={this.handleDate}   
              />
            <input type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.handleAllInput} />
            <input type="text" name="category" placeholder="Category" value={this.state.category} onChange={this.handleAllInput}/>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={this.state.amount}
              onChange={this.handleAllInput}
            />
          </div>
          <button className="ui button" type="submit" >
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
