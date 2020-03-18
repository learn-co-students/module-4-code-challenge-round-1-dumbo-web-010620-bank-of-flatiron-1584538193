import React from "react";

const Search = (props) => {
  console.log(props.searchBar)

let handleSearch = (e) => {
    props.handleSearchTerms(e.target.value)

  }
let searchBar = props.searchBar
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        value={searchBar}   
        onChange={handleSearch}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
