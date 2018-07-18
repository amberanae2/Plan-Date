import React from "react";

const SearchResults = props => (
  <ul className="list-group search-results">
    {props.results.map(result => (
      <li key={result} className="list-group-item">
        <img alt="" src={result} className="img-fluid" />
      </li>
    ))}
  </ul>
);

export default SearchResults;