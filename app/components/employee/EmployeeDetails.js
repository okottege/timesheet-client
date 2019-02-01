import React from 'react';
import PropTypes from 'prop-types';
import {Form, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import DatePicker from "../DatePicker";

class EmployeeDetails extends React.Component {
  onDateOfBirthSelected = date => {};
  onHireDateSelected = date => {};

  render() {
    return (
      <Form>
        <FormGroup controlId="txtFirstName">
          <ControlLabel>First name</ControlLabel>
          <FormControl type="text" />
        </FormGroup>
        <FormGroup controlId="txtLastName">
          <ControlLabel>Last name</ControlLabel>
          <FormControl type="text" />
        </FormGroup>
        <FormGroup controlId="txtDateOfBirth">
          <ControlLabel>Date of birth</ControlLabel>
          <DatePicker onDateSelected={this.onDateOfBirthSelected}/>
        </FormGroup>
        <FormGroup controlId="txtHireDate">
          <ControlLabel>Hire date</ControlLabel>
          <DatePicker onDateSelected={this.onHireDateSelected}/>
        </FormGroup>
        <FormGroup controlId="txtEmail">
          <ControlLabel>Email address</ControlLabel>
          <FormControl type="email" />
        </FormGroup>
      </Form>
    );
  }
}

EmployeeDetails.propTypes = {
  employee: PropTypes.shape({
    employeeId: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    dateOfBirth: PropTypes.instanceOf(Date),
    hireDate: PropTypes.instanceOf(Date),
    email: PropTypes.string
  }),
  mode: PropTypes.oneOf(['Create', 'Update']),
  onDetailsChanged: PropTypes.func
};

EmployeeDetails.defaultProps = {
  mode: 'Create'
};

export default EmployeeDetails;
