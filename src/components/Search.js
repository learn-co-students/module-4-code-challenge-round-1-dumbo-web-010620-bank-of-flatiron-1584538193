import React from "react";

const Search = (props) => {
  // console.log(props)

  const handleChange = (evt) => {
    // console.log(evt)
    props.changeSearch(evt.target.value)
  }

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        value={props.searchTerm}
        onChange={handleChange}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};
// 2/3 done (search)
export default Search;
