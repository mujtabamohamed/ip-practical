import React, { Component } from 'react';

class PatientForm extends Component {
  constructor() {
    super();
    this.state = {
      patientName: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ patientName: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here, e.g., sending patient data to the server
  };

  render() {
    return (
      <div>
        <h2>Add Patient</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Patient Name:
            <input
              type="text"
              value={this.state.patientName}
              onChange={this.handleInputChange}
            />
          </label>
          <button type="submit">Add Patient</button>
        </form>
      </div>
    );
  }
}

export default PatientForm;
