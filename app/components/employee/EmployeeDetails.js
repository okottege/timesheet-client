import React from 'react';
import PropTypes from 'prop-types';
import {Form, Button} from "react-bootstrap";
import DatePicker from "../DatePicker";

class EmployeeDetails extends React.Component {
  state = {
    employee: {...this.props.employee}
  };

  onDateOfBirthSelected = date => {};
  onHireDateSelected = date => {};
  onSubmit = e => {};

  render() {
    return (
      <Form>
        <Form.Group controlId="txtFirstName">
          <Form.Label>First name</Form.Label>
          <Form.Control type="text" value={this.props.employee.firstName} />
        </Form.Group>
        <Form.Group controlId="txtLastName">
          <Form.Label>Last name</Form.Label>
          <Form.Control type="text" value={this.props.employee.lastName} />
        </Form.Group>
        <Form.Group controlId="txtDateOfBirth">
          <Form.Label>Date of birth</Form.Label>
          <DatePicker onDateSelected={this.onDateOfBirthSelected} selectedDate={this.props.employee.dateOfBirth}/>
        </Form.Group>
        <Form.Group controlId="txtHireDate">
          <Form.Label>Hire date</Form.Label>
          <DatePicker onDateSelected={this.onHireDateSelected} selectedDate={this.props.employee.hireDate}/>
        </Form.Group>
        <Form.Group controlId="txtEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" value={this.props.employee.email} />
        </Form.Group>

        <Button id="btnSubmit" variant="primary" onClick={this.onSubmit}>
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
  mode: 'Create',
  employee: {}
};

export default EmployeeDetails;
