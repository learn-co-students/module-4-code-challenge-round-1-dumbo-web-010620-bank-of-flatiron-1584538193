import React from "react";

const Search = (props) => {

  const handleSearch = (e) => {
    props.changeSearchTerm(e.target.value)
  }

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={handleSearch}
        value={props.searchTerm} //state is now controlled by this
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
