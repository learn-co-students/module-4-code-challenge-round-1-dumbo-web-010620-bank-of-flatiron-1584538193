import React from "react";

const Search = (props) => {

  let handleChange = (e) => {
    // console.log(e.target.value) works!
    props.changeSearchTerm( e.target.value )
  }

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={ handleChange }
        value={ props.transactionSearchTerm}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
