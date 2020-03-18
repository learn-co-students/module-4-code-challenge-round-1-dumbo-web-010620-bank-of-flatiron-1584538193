import React from "react";
import Transaction from "./Transaction";

const TransactionsList = (props) => {

  let arrayOfComponents = props.transactions.map(transactionOBJ => {
    return <Transaction key={transactionOBJ.id} transaction={transactionOBJ} deleteTransaction={props.deleteTransaction}/>
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
        {arrayOfComponents}
      </tbody>
    </table>
  );
};

export default TransactionsList;
