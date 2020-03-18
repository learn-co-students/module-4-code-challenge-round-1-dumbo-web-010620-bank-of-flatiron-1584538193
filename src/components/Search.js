import React from "react";

const Search = (props) => {
  let handleSearch = (event) => {
    props.searching(event.target.value)
  }
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={handleSearch}
        value={props.search}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
