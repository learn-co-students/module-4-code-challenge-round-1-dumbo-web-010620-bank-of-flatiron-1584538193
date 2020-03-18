import React from "react";
import Transaction from "./Transaction";

const TransactionsList = (props) => {

  let renderTransactions = props.allTransactions.map(transaction => {
    if (transaction.description.toLowerCase().includes(props.searchTerm)) {
      return <Transaction
        transactionObj={ transaction }
        key={ transaction.id }
        deleteTransaction={ props.deleteTransaction }
      />
    }
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
        { renderTransactions }
      </tbody>
    </table>
  );
};

export default TransactionsList;
