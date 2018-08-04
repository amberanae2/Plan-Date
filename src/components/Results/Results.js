import React from "react";

const Results = props => (
  <ul className="list-group search-results">
    {props.results.map(result => (
      <li key={result} className="list-group-item">
      </li>
    ))}
  </ul>
);

export default Results;