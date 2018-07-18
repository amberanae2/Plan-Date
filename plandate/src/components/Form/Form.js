import React from "react";

const Form = props => (
  <form className ="search">
    <div className="form-group">
      <label htmlFor="category">
        Select a category
      </label>
      <input
        className="form-control"
        id="category"
        type="text"
        value={props.search}
        placeholder="Select a category"
        name="category"
        onChange={props.handleInputChange}
        required
        list="categories"
      />
     <datalist id="restaurants">
      {props.restaurants.map(restaurant => <option value={restaurant} key={restaurant}/>)}
     </datalist> 
    <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success"
    > Search </button>
    </div>
  </form>
);

export default Form;
