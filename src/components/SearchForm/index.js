import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.employee array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="employee-search">Employee Name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="employee"
          type="text"
          className="form-control"
          placeholder="Type in a employee name to begin"
          id="employee-search"
        />
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
