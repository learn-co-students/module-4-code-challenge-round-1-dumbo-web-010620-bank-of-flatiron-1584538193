import React from "react";

const Transaction = (props) => {
  let { date, description, category, amount } = props.transaction

  let handleDelete = (e) => { //handles the function from grandparent on click. 
    props.deleteTransaction(props.transaction.id)
  }
  return (
    <tr>
      <td>{ date }</td>
      <td>{ description }</td>
      <td>{ category }</td>
      <td>{ amount }</td>
      <td><button onClick={handleDelete}>X</button></td>
    </tr>
  );
};

export default Transaction;
