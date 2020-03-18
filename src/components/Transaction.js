import React, {Component} from "react";

// const Transaction = (props) => {
  class Transaction extends Component {
  // console.log(props.transaction)
  render(){
    let {date, description, category, amount} = this.props.transaction
  return (
    
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  );
}
  }

export default Transaction;
