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
  };

  componentDidMount() {
    const dataTechnicians = require("./data/Technicians.json");
    this.setState({ technicians: dataTechnicians });
  }

  /*//Toggle Complete
  markComplete = (id) => {
  this.setState({ technicians: this.state.technicians.map(technician => {
    if(technician.id === id) {
      technician.completed = !technician.completed
    }
    return technician;
  }) });*/

  // Delete Technician
  delTechnician = (id) => {
    this.setState({ technicians: [...this.state.technicians.filter(technician => technician.id !== technician.id)] });
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
                <AddTechnician 
                  addTechnician={this.addTechnician} 
                />
                <Technicians 
                  technicians={this.state.technicians}
                  delTechnician={this.delTechnician}
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
