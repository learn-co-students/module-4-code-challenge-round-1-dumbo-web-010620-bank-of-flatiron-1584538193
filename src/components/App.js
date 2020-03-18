import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      transactions: [],
    }
  }

  // // second (unsuccessful) React fetch 
  // componentDidMount() {
  //   const url = "http://localhost:6001/transactions"
  //   fetch(url)
  //   .then(resp => resp.json())
  //   .then(jsonObj => let thing = jsonObj.forEach(element => element));
      
  //     this.setState({transactions: thing})
  //   console.log("state:", this.state)
  // }

  /** FIRST UNSUCCESSFUL REACT FETCH 
   * WHY DOESN'T THIS setState WORK? json? */
    componentDidMount() {
    const url = "http://localhost:6001/transactions"
    fetch(url)
    .then(resp => resp.json())
    .then(jsonObj => this.setState({transactions: jsonObj}))
    console.log("state:", this.state)
  }





  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer />
      </div>
    );
  }
}

export default App;