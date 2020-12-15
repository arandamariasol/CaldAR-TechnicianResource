import React, { Component } from 'react';
import Technicianitem from './TechnicianItem';
import PropTypes from 'prop-types';

class Technicians extends Component {
  render() {
    return (
      <div>
          <h3>Actual Technicians</h3>
          {this.props.technicians.map ((technician, index) => (
                <Technicianitem 
                  key={technician.id} 
                  technician={technician} 
                  delTechnician={this.props.delTechnician}
                  editTechnician={this.props.editTechnician}
                />
          ))}
      </div>
    );
  }
}

// Prop types
Technicians.propTypes = {
    technicians: PropTypes.array.isRequired,
    delTechnician: PropTypes.func.isRequired,
    editTechnician: PropTypes.func.isRequired,
}

export default Technicians;
