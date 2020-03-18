import React from "react";

const Transaction = (props) => {

  let handleDeleteButton = (e) => {
    // console.log(props.transObj.id)
    props.handleDelete(props.transObj.id)
  }
  


  return (
    <tr>
      <td>{props.transObj.date}</td>
      <td>{props.transObj.description}</td>
      <td>{props.transObj.category}</td>
      <td>{props.transObj.amount}</td>
      <td><button className="ui button" type="submit" onClick={handleDeleteButton}>DELETE</button></td>
    </tr>
  );
};

export default Transaction;
