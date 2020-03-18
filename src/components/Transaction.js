import React from "react";

const Transaction = (props) => {
  // console.log(props) YAY
  let {date, description, category, amount} = props.transaction
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  );
};

//first deliverable done
export default Transaction;
