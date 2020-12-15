import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layouts/header';
import Technicians from './components/Technicians';
import AddTechnician from './components/AddTechnician';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

class App extends Component {

  state = {
    technicians: [],
    technicianEdit: null,
  };

  componentDidMount() {
    const dataTechnicians = require("./data/Technicians.json");
    this.setState({ technicians: dataTechnicians });
  }

  // Edit Customer
  editTechnician = (technicianed) => {
    this.setState({
    technicianEdit: technicianed,
    });
    window.scrollTo(0, 0);
  };

  // Update Technician
  updateTechnician = (
    id,
    first_name,
    last_name,
    email,
    typeIds,
    skillsId,
    hour_rate,
    daily_capacity,
  ) => {
    this.setState({
      technicians: this.state.technicians.map((technician) => {
        if (technician.id === id) {
          technician.first_name = first_name;
          technician.last_name = last_name;
          technician.email = email;
          technician.typeIds = typeIds;
          technician.skillsId = skillsId;
          technician.hour_rate = hour_rate;
          technician.daily_capacity = daily_capacity;
        }
        return technician;
      }),
    });
  };

  // Delete Technician
  delTechnician = (id) => {
    this.setState({ technicians: [...this.state.technicians.filter(technician => technician.id !== id)] });
  }

  //Add Technician
  addTechnician = (first_name, last_name, email, typeIds, skillsId, hour_rate, daily_capacity) => {
    const newTechnician = {
      id: uuidv4(),
      first_name,
      last_name,
      email,
      typeIds,
      skillsId,
      hour_rate,
      daily_capacity,
    }
    this.setState({ technicians: [...this.state.technicians, newTechnician]})
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <Technicians 
                  technicians={this.state.technicians}
                  delTechnician={this.delTechnician}
                  editTechnician={this.editTechnician}
                />
                <AddTechnician 
                  addTechnician={this.addTechnician} 
                  updateTechnician={this.updateTechnician}
                  technicianEdit={this.state.technicianEdit}
                />
              </React.Fragment>
            )} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
