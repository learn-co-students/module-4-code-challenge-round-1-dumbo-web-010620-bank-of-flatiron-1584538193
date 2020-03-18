import React, { Component } from "react";

class AddTransactionForm extends Component {

state = {
  date: "",
  description: "",
  category: "",
  amount: 0
}


handleChange = (e) => {
  console.log(e.target)
  this.setState({
    [e.target.name]: e.target.value
  })

}


handleSubmit = (e) => {
  e.preventDefault()
  this.props.submitTrans(this.state)

}


  render() {
    let {date, description, category, amount} = this.state
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="inline fields">
            <input type="date" name="date" value={date} onChange={this.handleChange}/>
            <input type="text" name="description" placeholder="Description" value={description} onChange={this.handleChange}/>
            <input type="text" name="category" placeholder="Category" value={category} onChange={this.handleChange}/>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={amount}
              onChange={this.handleChange}
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
