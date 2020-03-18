import React from "react";

const Transaction = (props) => {
  
  let handleDelete = () => {
    props.deleteTransaction(props.transaction.id)
  }
  
  let {date, description, category, amount} = props.transaction
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>$ {amount}</td>
      <button onClick={handleDelete}>delete</button>
    </tr>
  );
};

export default Transaction;
