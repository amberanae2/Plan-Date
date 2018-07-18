import React, { Component } from "react";
import API from "./utils/API";
import Form from "./components/Form/Form";
import Results from "./components/Results/Results";

class Search extends Component {
  state = {
    search: "",
    restaurants: [],
    results: [],
    error: ""
  };

  // When the component mounts, get a list of all available restaurants and update this.state.restaurants
  componentDidMount() {
    API.restaurantSearch()
      .then(res => this.setState({ restaurants: res.data.message }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.restaurantSearch(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };
  render() {
    return (
      <div>
         
          <Form
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            breeds={this.state.restaurants}
          />
          <Results results={this.state.results} />
      </div>
    );
  }
}

export default Search;
