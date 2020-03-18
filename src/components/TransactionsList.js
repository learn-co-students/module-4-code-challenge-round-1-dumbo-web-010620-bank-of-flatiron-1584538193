import React from "react";
import Transaction from "./Transaction";

const TransactionsList = (props) => {

  const handleClickTest = (e) => {
    console.log("grrr")
  }

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
            <h3 className="ui center aligned header" onClick={handleClickTest}>Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Delete</h3>
          </th>
        </tr>
        {props.transactionList.map((transaction) => {
          return <Transaction key={transaction.id} transaction={transaction} deleteTransaction={props.deleteTransaction}/>
        })}
      </tbody>
    </table>
  );
};

export default TransactionsList;
