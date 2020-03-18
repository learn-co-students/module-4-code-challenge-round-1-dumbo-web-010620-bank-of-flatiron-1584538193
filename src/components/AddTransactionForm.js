import React, { Component } from "react";

class AddTransactionForm extends Component {

  state = {
    date: "",
    description: "",
    category: "",
    amount: "" //check later
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addNewTransaction(this.state)

    this.setState({
      date: "",
      description: "",
      category: "",
      amount: "" 
    })
  }


//e for free
  handleAllInput = (e) => {
      this.setState ({
        [e.target.name] : e.target.value
      })
  }



  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="inline fields">
            <input type="date" name="date" value={this.state.date} onChange={this.handleAllInput} />
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
          <button className="ui button" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
