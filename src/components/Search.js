import React from "react";

const Search = (props) => {
//Need two things. searchTerm(state of Parent) -value 
//and function def to change searchTerm -callback fn
//thus change state of Parent
//controlled component
//care about what's being typed as it's being typed

//invoke callback fn from parent - changeSearchTerm
  const handleChange = (e) => {
    props.changeSearchTerm(e.target.value)
  }

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={handleChange}
        value={props.searchTerm}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
