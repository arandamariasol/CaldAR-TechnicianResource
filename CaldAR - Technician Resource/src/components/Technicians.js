import React, { Component } from 'react';
import Technicianitem from './TechnicianItem';
import PropTypes from 'prop-types';

class Technicians extends Component {
  render() {
    return this.props.technicians.map ((technician) => (
       < Technicianitem 
          key={technician.id} 
          technician={technician} 
          delTechnician={this.props.delTechnician}
        />
    ));
  }
}

// Prop types
Technicians.propTypes = {
    technicians: PropTypes.array.isRequired,
    delTechnician: PropTypes.func.isRequired
}

export default Technicians;
