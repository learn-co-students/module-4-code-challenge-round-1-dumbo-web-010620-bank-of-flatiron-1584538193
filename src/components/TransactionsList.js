import React from "react";
import Transaction from "./Transaction";

const TransactionsList = (props) => { 
  // console.log(props);
  let AllTransactionsArray = props.transactions
    .sort((a, b) => a.description !== b.description ? a.description < b.description ? -1 : 1 : 0 )
      .map((oneTrans)=> {
    return <Transaction key={oneTrans.id} transaction={oneTrans} />
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
        {AllTransactionsArray}
      </tbody>
    </table>
  );
};

export default TransactionsList;
