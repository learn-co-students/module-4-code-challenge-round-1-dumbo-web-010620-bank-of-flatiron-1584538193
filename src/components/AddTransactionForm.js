import React, { Component } from "react";

class AddTransactionForm extends Component {

  state = {
    date: '',
    description: '',
    category: '',
    amount: ''
  }

  handleSubmit = (event)=>{
    event.preventDefault()
    this.props.addingTrans(this.state)
  }

  thisGoesInTheInputs = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    let {date, description, category, amount} = this.state
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="inline fields">
            <input type="date" name="date" value={date} onChange={this.thisGoesInTheInputs}/>
            <input type="text" name="description" placeholder="Description" value={description} onChange={this.thisGoesInTheInputs}/>
            <input type="text" name="category" placeholder="Category" value={category} onChange={this.thisGoesInTheInputs} />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={amount}
              onChange={this.thisGoesInTheInputs}
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
