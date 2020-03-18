import React from "react";
import Transaction from "./Transaction";

const TransactionsList = (props) => {
  //lets render transactions by iterating here through props.transactions
  const renderTransacations = () => {
    let arrayOfComponents = props.transactions.map(transactionObj => {
      return <Transaction
                key={transactionObj.id}
                transaction={transactionObj}
                deleteOneTransaction={props.deleteOneTransaction}/>
    })
    return arrayOfComponents
  }
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
        <th>
            <h3 className="Button">Remove Transaction</h3>
          </th>
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
        {renderTransacations()}
      </tbody>
    </table>
  );
};

export default TransactionsList;
