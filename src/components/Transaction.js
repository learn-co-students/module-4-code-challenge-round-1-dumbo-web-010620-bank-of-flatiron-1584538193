import React from "react";

const Transaction = (props) => {

  const transaction = props.transaction
  const { date, description, category, amount } = transaction
  // console.log(transaction)

  const handleClick = (e) => {
    props.deleteOneTransaction(props.transaction.id)
  }

  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td onClick={handleClick}>Click To Delete</td>
    </tr>
  );
};

export default Transaction;


// {
//   "id": 1,
//   "date": "2019-12-01",
//   "description": "Paycheck from Bob's Burgers",
//   "category": "Income",
//   "amount": 1000
// }