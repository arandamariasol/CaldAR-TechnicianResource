import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTechnician extends Component {
    state = {
        title: ''
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTechnician(this.state.title);
        this.setState({title:''})
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value});

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex'}}>
                <input 
                type="text" 
                name="title" 
                placeholder="Add Technician..."
                style={{flex: '10', padding: '5px'}}
                value={this.state.title}
                onChange={this.onChange}
                />
                <input
                type="submit"
                value="Submit"
                className="btn"
                style={{flex: '1', background: '#232f3e'}}
                />
            </form>
        )
    }
}

// Prop types
AddTechnician.propTypes = {
    addTechnician: PropTypes.func.isRequired,
}

export default AddTechnician
