import React, { Component } from "react";

class AddTransactionForm extends Component {

  state = {
    date: "",
    description: "",
    category: "",
    amount: ""
  }

handleAllInputs = (e) => {
this.setState({
  [e.target.name]: e.target.value
})
}

handleSubmit = (e) => {
  e.preventDefault()
  this.props.addTransaction(this.state)
}

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.handleSubmit} className="ui form" >
          <div className="inline fields">
            <input type="date" name="date" value={this.state.date} onChange={this.handleAllInputs}/>
            <input type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.handleAllInputs}/>
            <input type="text" name="category" placeholder="Category" value={this.state.category} onChange={this.handleAllInputs} />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={this.state.amount} 
              onChange={this.handleAllInputs}
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
