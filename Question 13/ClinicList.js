import React, { Component } from 'react';

class ClinicList extends Component {
  constructor() {
    super();
    this.state = {
      clinics: [
        { id: 1, name: 'Clinic A' },
        { id: 2, name: 'Clinic B' },
        { id: 3, name: 'Clinic C' },
      ],
    };
  }

  render() {
    return (
      <div>
        <h2>Clinic List</h2>
        <ul>
          {this.state.clinics.map((clinic) => (
            <li key={clinic.id}>{clinic.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ClinicList;
