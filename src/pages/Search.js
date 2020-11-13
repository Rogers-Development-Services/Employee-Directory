import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";

class Search extends Component {
  state = {
    employees: [],
    search: "",
    results: [],
    error: "",
    toggle: ""
  };

  // When the component mounts, get a list of all available employees and update this.state.employees
  componentDidMount() {
    API.getEmployeeList()
      .then(res => {
        this.setState({ employees: res.data.results })
        this.setState({ results: res.data.results })
      })
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });

  };

  handleFormSubmit = event => {
    event.preventDefault();
  };

  handleButtonClick = event => {
    let category = event.target.name;
    event.preventDefault();
    this.setState({toggle: category});
    // console.log(category);

    // eslint-disable-next-line default-case
    switch(category) {
      case "employee-name": 
      // console.log(this.state.results);
      let employeeLastName = this.state.results[0].name.last;
      console.log(employeeLastName);
      let filteredByLastName = this.state.results.map(employee => {
        return employee.name.last.sort();
      });
      console.log(filteredByLastName);
      // this.setState({results: filteredByLastName});
        break;
      case "phone":
        break;
      case "email":
        break;
      case "date-of-birth":
        break;
    }
  };

  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Employee Search!</h1>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            employees={this.state.employees}  // what is this doing?
          />
          <SearchResults
            handleButtonClick={this.handleButtonClick}
            results={this.state.results}
          />
        </Container>
      </div>
    );
  }
}

export default Search;
