import React from "react";
import Transaction from "./Transaction";

const TransactionsList = (props) => {

  // console.log(props.handleDelete)
  let renderTransaction = props.bankData.bankData.map(transObj => 
   <Transaction key={transObj.id} transObj={transObj} handleDelete={props.handleDelete}/>
  )
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
        {renderTransaction}
      </tbody>
    </table>
  );
};

export default TransactionsList;
