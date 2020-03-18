import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "semantic-ui-css/semantic.min.css";

/*
CORE DELIVERABLES
As a user, I should be able to:

1. See a table of the transactions.

2. Fill out and submit the form to add a new transaction. 
This should add a the new transaction to the table as well 
as post the new transaction to the backend API for persistence.

3. Filter transactions by typing into the search bar. Only 
transactions with a description matching the search term should 
be shown in the transactions table.

*/

ReactDOM.render(<App />, document.getElementById("root"));
