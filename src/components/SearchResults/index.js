import React from "react";
import "./style.css";

const styles = {
  buttonStyle: {
    visibility: "hidden"
  }
};

function SearchResults(props) {
  return (
    <table className="list-group search-results">
      <thead>
        <tr className="title d-flex justify-content-between align-items-center">
          <td><button style={styles.buttonStyle} name="" onClick={props.handleButtonClick}>Headshot</button></td>
          <td><button name="employee-name" onClick={props.handleButtonClick}>Name</button></td>
          <td><button name="phone" onClick={props.handleButtonClick}>Phone</button></td>
          <td><button name="email" onClick={props.handleButtonClick}>Email</button></td>
          <td><button name="date-of-birth" onClick={props.handleButtonClick}>D.O.B.</button></td>
        </tr>
      </thead>
      <tbody>
        {props.results.map(result => (
          <tr className="d-flex align-items-center justify-content-between"
            key={result.name.first + result.name.last}>
            <td><img src={result.picture.large} alt={result.name.first + result.name.last}></img></td>
            <td>{result.name.first} {result.name.last}</td>
            <td>{result.phone}</td>
            <td>{result.email}</td>
            <td>{result.dob.date.slice(0, 10)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SearchResults;
