/** @format */

import React, { Component } from 'react';
//import axios from 'axios';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import Swal from 'sweetalert2';
import { getSingleEmployee, updateEmployees } from '../../services/employee';
import 'react-datepicker/dist/react-datepicker.css';

class EditEmployees extends Component {
  state = {
    empId: '',
    fullname: '',
    initials: '',
    empName: '',
    gender: '',
    dob: new Date(),
    email: '',
    mobile: '',
    designation: '',
    empType: '',
    joinedDate: new Date(),
    experience: '',
    salary: '',
    notes: '',
  };

  componentDidMount() {
    this.fetchEmployees();
  }

  fetchEmployees = async () => {
    try {
      const response = await getSingleEmployee(this.props.match.params.id);

      this.setState({
        empId: response.data.empId,
        fullname: response.data.fullname,
        initials: response.data.initials,
        empName: response.data.empName,
        gender: response.data.gender,
        dob: new Date(response.data.dob),
        email: response.data.email,
        mobile: response.data.mobile,
        designation: response.data.designation,
        empType: response.data.empType,
        joinedDate: new Date(response.data.joinedDate),
        experience: response.data.experience,
        salary: response.data.salary,
        notes: response.data.notes,
      });
    } catch (e) {
      // error handling
    }
  };

  onChangeEmpId = (e) => {
    this.setState({
      empId: e.target.value,
    });
  };
  onChangeFullName = (e) => {
    this.setState({
      fullname: e.target.value,
    });
  };
  onChangeInitials = (e) => {
    this.setState({
      initials: e.target.value,
    });
  };
  onChangeEmpName = (e) => {
    this.setState({
      empName: e.target.value,
    });
  };
  onChangeGender = (e) => {
    this.setState({
      gender: e.target.value,
    });
  };
  onChangeDOB = (dob) => {
    this.setState({
      dob: dob,
    });
  };
  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  onChangeMobile = (e) => {
    this.setState({
      mobile: e.target.value,
    });
  };
  onChangeDesignation = (e) => {
    this.setState({
      designation: e.target.value,
    });
  };
  onChangeEmpType = (e) => {
    this.setState({
      empType: e.target.value,
    });
  };
  onChangeJoinedDate = (joinedDate) => {
    this.setState({
      joinedDate: joinedDate,
    });
  };
  onChangeExperience = (e) => {
    this.setState({
      experience: e.target.value,
    });
  };
  onChangeSalary = (e) => {
    this.setState({
      salary: e.target.value,
    });
  };
  onChangeNotes = (e) => {
    this.setState({
      notes: e.target.value,
    });
  };

  onSubmit = async (e) => {
    e.preventDefault();

    const employee = {
      empId: this.state.empId,
      fullname: this.state.fullname,
      initials: this.state.initials,
      empName: this.state.empName,
      gender: this.state.gender,
      dob: this.state.dob,
      email: this.state.email,
      mobile: this.state.mobile,
      designation: this.state.designation,
      empType: this.state.empType,
      joinedDate: this.state.joinedDate,
      experience: this.state.experience,
      salary: this.state.salary,
      notes: this.state.notes,
    };

    try {
      const response = await updateEmployees(this.props.match.params.id, employee);
      console.log(response.data);
    } catch (e) {
      // error handling
    }

    Swal.fire({
      icon: 'success',
      title: 'Data updated successfully!',
    });

    this.setState({ empId: '' });
    this.setState({ fullname: '' });
    this.setState({ initials: '' });
    this.setState({ empName: '' });
    this.setState({ gender: '' });
    this.setState({ dob: new Date() });
    this.setState({ email: '' });
    this.setState({ mobile: '' });
    this.setState({ designation: '' });
    this.setState({ empType: '' });
    this.setState({ joinedDate: new Date() });
    this.setState({ experience: '' });
    this.setState({ salary: '' });
    this.setState({ notes: '' });
    // window.location = "/";
  };

  render() {
    return (
      <div>
        <h4>Edit Employee Information</h4>
        <hr></hr>
        <br />
        <form onSubmit={this.onSubmit}>
          <div
            className="form-group"
            style={{ fontWeight: 'bold', color: '#0b7fab' }}
          >
            <label>Employee Id</label>
            <input
              type="text"
              className="form-control"
              value={this.state.empId}
              onChange={this.onChangeEmpId}
              disabled
            />
          </div>
          <div
            className="form-group"
            style={{ fontWeight: 'bold', color: '#0b7fab' }}
          >
            <label>Full Name *</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.fullname}
              onChange={this.onChangeFullName}
            />
          </div>
        </form>
        <form onSubmit={this.onSubmit} style={{ columnCount: '2' }}>
          <div
            className="form-group"
            style={{ fontWeight: 'bold', color: '#0b7fab' }}
          >
            <label>Name with Initials *</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.initials}
              onChange={this.onChangeInitials}
            />
          </div>
          <div
            className="form-group"
            style={{ fontWeight: 'bold', color: '#0b7fab' }}
          >
            <label>Preferred / Displayed Name</label>
            <input
              type="text"
              className="form-control"
              value={this.state.empName}
              onChange={this.onChangeEmpName}
            />
          </div>
          <div
            className="form-group"
            style={{ fontWeight: 'bold', color: '#0b7fab' }}
          >
            <label>Gender</label>
            <select
              className="form-control"
              value={this.state.gender}
              onChange={this.onChangeGender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div
            className="form-group"
            style={{ fontWeight: 'bold', color: '#0b7fab' }}
          >
            <label>Date of Birth</label>
            <div>
              <DatePicker
                selected={this.state.dob}
                onChange={this.onChangeDOB}
                maxDate={new Date()}
              />
            </div>
          </div>
          <div
            className="form-group"
            style={{ fontWeight: 'bold', color: '#0b7fab' }}
          >
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>
          <div
            className="form-group"
            style={{ fontWeight: 'bold', color: '#0b7fab' }}
          >
            <label>Mobile Number</label>
            <input
              type="text"
              className="form-control"
              value={this.state.mobile}
              onChange={this.onChangeMobile}
            />
          </div>
          <div
            className="form-group"
            style={{ fontWeight: 'bold', color: '#0b7fab' }}
          >
            <label>Designation</label>
            <input
              type="text"
              className="form-control"
              value={this.state.designation}
              onChange={this.onChangeDesignation}
            />
          </div>
          <div
            className="form-group"
            style={{ fontWeight: 'bold', color: '#0b7fab' }}
          >
            <label>Employee Type</label>
            <select
              className="form-control"
              value={this.state.empType}
              onChange={this.onChangeEmpType}
            >
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Contract Basis">Contract Basis</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div
            className="form-group"
            style={{ fontWeight: 'bold', color: '#0b7fab' }}
          >
            <label>Joined Date</label>
            <div>
              <DatePicker
                selected={this.state.joinedDate}
                onChange={this.onChangeJoinedDate}
                maxDate={new Date()}
              />
            </div>
          </div>
          <div
            className="form-group"
            style={{ fontWeight: 'bold', color: '#0b7fab' }}
          >
            <label>Experience</label>
            <select
              className="form-control"
              value={this.state.experience}
              onChange={this.onChangeExperience}
            >
              <option value="Less than 01 Year">Less Than 1 Year</option>
              <option value="01 Year">01 Year</option>
              <option value="02 Years">02 Years</option>
              <option value="03 Years">03 Years</option>
              <option value="04 Years">04 Years</option>
              <option value="05 Years">05 Years</option>
              <option value="06 Years">06 Years</option>
              <option value="07 Years">07 Years</option>
              <option value="08 Years">08 Years</option>
              <option value="09 Years">09 Years</option>
              <option value="10 Years">10 Years</option>
              <option value="More than 10 Years">More than 10 Years</option>
            </select>
          </div>
        </form>
        <form onSubmit={this.onSubmit}>
          <div
            className="form-group"
            style={{ fontWeight: 'bold', color: '#0b7fab' }}
          >
            <label>Salary</label>
            <input
              type="text"
              className="form-control"
              value={this.state.salary}
              onChange={this.onChangeSalary}
            />
          </div>
          <div
            className="form-group"
            style={{ fontWeight: 'bold', color: '#0b7fab' }}
          >
            <label>Personal Notes</label>
            <textarea
              rows="4"
              cols="50"
              className="form-control"
              value={this.state.notes}
              onChange={this.onChangeNotes}
            />
          </div>
          <br />
          <div style={{ width: '165px' }}>
            <div className="form-group">
              <a href="http://localhost:3000/">
                <input
                  type="button"
                  value="Cancel"
                  className="btn btn-primary"
                  style={{
                    float: 'right',
                    borderColor: '#0b7fab',
                    backgroundColor: '#FFFFFF',
                    color: '#0b7fab',
                  }}
                />
              </a>
            </div>

            <div className="form-group">
              <input
                type="submit"
                value="Update"
                className="btn btn-primary"
                style={{
                  float: 'left',
                  borderColor: '#0b7fab',
                  backgroundColor: '#0b7fab',
                  color: '#FFFFFF',
                }}
              />
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
        </form>
      </div>
    );
  }
}

EditEmployees.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.any,
    }),
  }),
};
export default EditEmployees;
