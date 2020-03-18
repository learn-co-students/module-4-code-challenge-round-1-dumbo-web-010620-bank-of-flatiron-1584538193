import React from "react";

const Transaction = (props) => {
  let handleOnClick=()=>{
    props.remove(props.transData)
  }
 
  return (
    <tr>
      <td><button onClick={handleOnClick}>x</button> {props.transData.date}</td>
      <td>{props.transData.description}</td>
      <td>{props.transData.category}</td>
      <td>{props.transData.amount}</td>
    </tr>
  );
};

export default Transaction;
