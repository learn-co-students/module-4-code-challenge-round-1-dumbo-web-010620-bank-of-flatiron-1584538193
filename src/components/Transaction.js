import React from "react";

const Transaction = (props) => {
  const handleDeleteClick = () => {
   props.deleteOneTransaction(props.transaction.id)
  }
  let {date, description, category, amount} = props.transaction
  
  return (
    <tr>
      <td><button onClick={handleDeleteClick}>X</button></td>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  );
};

export default Transaction;
