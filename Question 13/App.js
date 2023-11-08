import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ClinicList from './ClinicList';
import PatientForm from './PatientForm';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Clinic/Health Management</h1>
          <nav>
            <ul>
              <li>
                <Link to="/clinics">Clinics</Link>
              </li>
              <li>
                <Link to="/add-patient">Add Patient</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/clinics" component={ClinicList} />
            <Route path="/add-patient" component={PatientForm} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
