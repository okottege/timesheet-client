import React from 'react';
import PropTypes from 'prop-types';
import {Form, Button} from "react-bootstrap";
import DatePicker from "../DatePicker";

class EmployeeDetails extends React.Component {
  onDateOfBirthSelected = date => {};
  onHireDateSelected = date => {};
  onSubmit = e => {};

  render() {
    return (
      <Form>
        <Form.Group controlId="txtFirstName">
          <Form.Label>First name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group controlId="txtLastName">
          <Form.Label>Last name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group controlId="txtDateOfBirth">
          <Form.Label>Date of birth</Form.Label>
          <DatePicker onDateSelected={this.onDateOfBirthSelected}/>
        </Form.Group>
        <Form.Group controlId="txtHireDate">
          <Form.Label>Hire date</Form.Label>
          <DatePicker onDateSelected={this.onHireDateSelected}/>
        </Form.Group>
        <Form.Group controlId="txtEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" />
        </Form.Group>

        <Button controlId="btnSubmit" variant="primary" onClick={this.onSubmit}>
          Submit
        </Button>
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
