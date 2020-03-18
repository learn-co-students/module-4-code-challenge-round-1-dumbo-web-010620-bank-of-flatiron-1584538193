import React from "react";
import Transaction from "./Transaction";

const TransactionsList = (props) => {
// console.log(props) this works now need to map through them or send this down to tansaction for it to map through
// let {transactions} = props this wasnt working for some reason
let transactionArr = props.transactions.map((transaction) => {
  return <Transaction
  key={transaction.id}
  transaction={transaction} 
  />
})
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {transactionArr}
      </tbody>
    </table>
  );
};

export default TransactionsList;
