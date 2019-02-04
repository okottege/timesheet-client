import React from 'react';
import PropTypes from 'prop-types';
import {Form, ButtonToolbar, Button} from "react-bootstrap";
import DatePicker from "../DatePicker";

class EmployeeDetails extends React.Component {
  onFieldChange = e => {
    if(this.props.onDetailsChanged) this.props.onDetailsChanged({field: e.field, value: e.target.value});
  };

  onFormSubmit = e => {
    if(e) e.preventDefault();
    if(this.props.onSubmit) this.props.onSubmit();
  };

  render() {
    return (
      <Form onSubmit={this.onFormSubmit}>
        <Form.Group controlId="txtFirstName">
          <Form.Label>First name</Form.Label>
          <Form.Control
            type="text"
            value={this.props.employee.firstName}
            onChange={e => this.onFieldChange({...e, field: 'firstName'})} />
        </Form.Group>

        <Form.Group controlId="txtLastName">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            type="text"
            value={this.props.employee.lastName}
            onChange={e => this.onFieldChange({...e, field: 'lastName'})} />
        </Form.Group>

        <Form.Group controlId="txtDateOfBirth">
          <Form.Label>Date of birth</Form.Label>
          <DatePicker
            onDateSelected={e => this.onFieldChange({...e, field: 'dateOfBirth'})}
            selectedDate={this.props.employee.dateOfBirth}/>
        </Form.Group>

        <Form.Group controlId="txtHireDate">
          <Form.Label>Hire date</Form.Label>
          <DatePicker
            onDateSelected={e => this.onFieldChange({...e, field: 'hireDate'})}
            selectedDate={this.props.employee.hireDate} />
        </Form.Group>

        <Form.Group controlId="txtEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={this.props.employee.email}
            onChange={e => this.onFieldChange({...e, field: 'email'})} />
        </Form.Group>

        <ButtonToolbar>
          <Button id="btnSubmit" type="submit" variant="primary">Submit</Button>
          <Button id="btnCancel" variant="secondary" onClick={this.props.onCancel}>Cancel</Button>
        </ButtonToolbar>
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
  onDetailsChanged: PropTypes.func,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func
};

EmployeeDetails.defaultProps = {
  mode: 'Create',
  employee: {}
};

export default EmployeeDetails;
