import React from "react";

const Transaction = (props) => {

  let { date, description, category, amount, id} = {...props.transactionObj}

  let handleDelete = () => {
    props.deleteTransaction(id)
  }

  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <div class="ui vertical animated button" tabindex="0" onClick={ handleDelete }>
        <div class="hidden content">delete</div>
        <div class="visible content">
          <i class="delete icon"></i>
        </div>
      </div>
    </tr>
  );
};

export default Transaction;
