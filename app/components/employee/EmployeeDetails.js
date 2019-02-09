import React from 'react';
import PropTypes from 'prop-types';
import {Form, ButtonToolbar, Button, Alert} from "react-bootstrap";

import DatePicker from '../DatePicker';
import Styles from '../styles/general';
import ErrorFeedback from '../ErrorFeedback';

class EmployeeDetails extends React.Component {
  onFieldChange = e => {
    if(this.props.onDetailsChanged) this.props.onDetailsChanged({field: e.field, value: e.target.value});
  };

  onFormSubmit = e => {
    if(e) e.preventDefault();
    if(this.props.onSubmit) this.props.onSubmit();
  };

  findError = fld => this.props.errors.find(e => e.field === fld);
  hasError = fld => this.findError(fld) !== undefined;
  renderErrorSummary = () => this.props.errors.length > 0
    ? <Alert variant="danger">There are some validation errors, please correct them before continuing.</Alert>
    : null;

  render() {
    return (
      <div>
        {this.renderErrorSummary()}

        <Form onSubmit={this.onFormSubmit}>
          <Form.Group controlId="txtFirstName">
            <Form.Label>First name</Form.Label>
            <Form.Control
              type="text"
              value={this.props.employee.firstName}
              isInvalid={this.hasError('firstName')}
              onChange={e => this.onFieldChange({...e, field: 'firstName'})} />
            <ErrorFeedback error={this.findError('firstName')}/>
          </Form.Group>

          <Form.Group controlId="txtLastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type="text"
              value={this.props.employee.lastName}
              isInvalid={this.hasError('lastName')}
              onChange={e => this.onFieldChange({...e, field: 'lastName'})} />
            <ErrorFeedback error={this.findError('lastName')}/>
          </Form.Group>

          <Form.Group controlId="txtDateOfBirth">
            <Form.Label>Date of birth</Form.Label>
            <DatePicker
              onDateSelected={e => this.onFieldChange({...e, field: 'dateOfBirth'})}
              selectedDate={this.props.employee.dateOfBirth}/>
            <ErrorFeedback error={this.findError('dateOfBirth')}/>
          </Form.Group>

          <Form.Group controlId="txtHireDate">
            <Form.Label>Hire date</Form.Label>
            <DatePicker
              onDateSelected={e => this.onFieldChange({...e, field: 'hireDate'})}
              selectedDate={this.props.employee.hireDate} />
            <ErrorFeedback error={this.findError('hireDate')}/>
          </Form.Group>

          <Form.Group controlId="txtEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={this.props.employee.email}
              isInvalid={this.hasError('email')}
              onChange={e => this.onFieldChange({...e, field: 'email'})} />
            <ErrorFeedback error={this.findError('email')}/>
          </Form.Group>

          <ButtonToolbar>
            <div style={Styles.buttonSpacing}>
              <Button id="btnSubmit" type="submit" variant="primary">Submit</Button>
            </div>
            <div>
              <Button id="btnCancel" variant="secondary" onClick={this.props.onCancel}>Cancel</Button>
            </div>
          </ButtonToolbar>
        </Form>
      </div>
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
  errors: PropTypes.arrayOf(PropTypes.shape({
    field: PropTypes.string,
    message: PropTypes.string
  })),
  onDetailsChanged: PropTypes.func,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func
};

EmployeeDetails.defaultProps = {
  mode: 'Create',
  employee: {},
  errors: []
};

export default EmployeeDetails;
