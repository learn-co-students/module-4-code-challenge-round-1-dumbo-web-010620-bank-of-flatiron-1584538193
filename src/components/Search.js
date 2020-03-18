import React from "react";

const Search = (props) => {
  let handleOnChange=(event)=>{
    props.updateInput(event.target.value)
  }
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        value={props.typeInp}
        onChange={handleOnChange}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
