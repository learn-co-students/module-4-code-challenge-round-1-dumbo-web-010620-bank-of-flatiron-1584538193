import React from "react";

const Search = (props) => {

  const helpWithChange = (e) =>{
    // console.log(e.target.value);
    
    props.handleSearchWord(e.target.value)
  }
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        value = {props.searhWord}
        onChange={ helpWithChange}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
