import React from "react";

const Transaction = (props) => {
  
  const handleDelete = () => {
    props.deleteOneTransaction(props.transaction.id)
  }

  let {date, description, category, amount} = props.transaction
  return (  
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td>
        <button onClick={handleDelete}>X</button>
      </td>
    </tr>
  );
};

export default Transaction;
