import React, {useState} from "react";
import Transaction from "./Transaction";

const TransactionsList = (props) => {
  
  //if transactions list "clicked" = true then return sorted array else return normal array
  let [clicked, setClicked] = useState(false)

  
  
  let tableRowData=()=>{
    return props.transData.map(transObj => 
      (<Transaction key={transObj.id} transData={transObj} remove={props.removeTrans}/>
    ))
  }

  let sortedTable=()=>{
    return props.transData.sort(props.sortedArray).map(transObj => 
      (<Transaction key={transObj.id} transData={transObj} remove={props.removeTrans}/>
    ))
  }

  let handleOnClick=(event)=>{

    (clicked? 
      setClicked(false)
    :
    setClicked(true)
    )

    console.log(clicked)
  }

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description<button onClick={handleOnClick}>^</button></h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>

          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
      {
        !clicked? tableRowData() : sortedTable()
      }
      </tbody>
    </table>
  );
};

export default TransactionsList;
