import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTechnician extends Component {
    state = {
        first_name: "",
        last_name: "",
        email: "",
        skillsId: "",
        hour_rate: "",
        daily_capacity: "",
      };


      onSubmit = (e) => {
        e.preventDefault();
        this.props.addTechnician(
            this.state.first_name,
            this.state.last_name,
            this.state.email,
            this.state.skillsId,
            this.state.hour_rate,
            this.state.daily_capacity,
        );
        this.setState({
            first_name:"",
            last_name:"",
            email:"",
            skillsId:"",
            hour_rate: "",
            daily_capacity: "",
        })
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value});

    render() {
        return (
            <>
                <h3>Add new Technician</h3>

                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        name="first_name"
                        style={inputStyle}
                        placeholder="First Name..."
                        value={this.state.first_name}
                        onChange={this.onChange}
                    />
                    <input
                        type="text"
                        name="last_name"
                        style={inputStyle}
                        placeholder="Last Name..."
                        value={this.state.last_name}
                        onChange={this.onChange}
                    />
                    <input
                        type="text"
                        name="email"
                        style={inputStyle}
                        placeholder="Email..."
                        value={this.state.email}
                        onChange={this.onChange}
                    />
                    <input
                        type="text"
                        name="skillsId"
                        style={inputStyle}
                        placeholder="Skills Id..."
                        value={this.state.skillsId}
                        onChange={this.onChange}
                    />
                    <input
                        type="text"
                        name="hour_rate"
                        style={inputStyle}
                        placeholder="Hour rate..."
                        value={this.state.hour_rate}
                        onChange={this.onChange}
                    />
                    <input
                        type="text"
                        name="daily_capacity"
                        style={inputStyle}
                        placeholder="Daily capacity..."
                        value={this.state.daily_capacity}
                        onChange={this.onChange}
                    />
                    <input
                        type="submit"
                        value="Submit"
                        style={inputStyle}
                    />
                </form>
            </>
        )
    }
}

// Prop types
AddTechnician.propTypes = {
    addTechnician: PropTypes.func.isRequired,
}

const inputStyle = {
    padding: "10px",
    width: "50%",
    margin: "5px",
    borderRadius: "5px",
};


export default AddTechnician
