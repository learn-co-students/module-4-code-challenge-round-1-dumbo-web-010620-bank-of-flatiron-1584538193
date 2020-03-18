import React from "react";

const Transaction = (props) => {
  // console.log(props);
  let { date, description, category, amount} = props.transaction
  return (
    
    <tr>
      <td>{date}</td> 
      <td>{description}: <button className="ui button"> delete </button></td> 
      <td>{category}</td>
      <td>{amount}</td> 
    </tr>
  );
};

export default Transaction;
