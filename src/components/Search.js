import React from "react";

class Search extends React.Component {

  searchBar = (e) => {
    this.props.newSearch(e.target.value)
  }

  render() {
    return (
      <div className="ui large fluid icon input">
        <input
          type="text"
          placeholder={"Search your Recent Transactions"}
          value={this.props.search}
          onChange={this.searchBar}
        />
        <i className="circular search link icon"></i>
      </div>
    );

  }

}

export default Search;
