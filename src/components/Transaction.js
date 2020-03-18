import React from "react";

const Transaction = (props) => {


  const handleDelete = () => {
    props.deleteOneTransaction(props.transaction.id)
  }


  let {date, description, category, amount} = props.transaction
  return(
    <React.Fragment>
    
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td><button onClick={handleDelete}>Banish to the Shadow Realm</button></td>
    </tr>
    
    </React.Fragment>
  );
};

export default Transaction;
