import React from 'react';
import PropTypes from 'prop-types';
import {Form, ButtonToolbar, Button, Alert} from "react-bootstrap";

import DatePicker from '../DatePicker';
import Styles from '../styles/general';
import ErrorFeedback from '../ErrorFeedback';
import FormTextInput from '../common/FormTextInput';

class EmployeeDetails extends React.Component {
  onFieldChange = e => this.props.onDetailsChanged({field: e.field, value: e.target.value});

  onFormSubmit = e => {
    if(e && e.preventDefault) e.preventDefault();
    this.props.onSubmit();
  };

  findError = fld => this.props.errors.find(e => e.field === fld);

  getErrorText = fld => {
    const error = this.findError(fld);
    return error ? error.message : '';
  };

  renderErrorSummary = () => this.props.errors.length > 0
    ? <Alert variant="danger">There are some validation errors, please correct them before continuing.</Alert>
    : null;

  render() {
    return (
      <div>
        {this.renderErrorSummary()}

        <Form onSubmit={this.onFormSubmit}>
          <FormTextInput
            fieldName="firstName"
            onInputChanged={e => this.onFieldChange({...e, field: 'firstName'})}
            fieldId="txtFirstName"
            labelText="First name"
            value={this.props.employee.firstName}
            errorText={this.getErrorText('firstName')} />

          <FormTextInput
            fieldName="lastName"
            onInputChanged={e => this.onFieldChange({...e, field: 'lastName'})}
            fieldId="txtLastName"
            labelText="Last name"
            value={this.props.employee.lastName}
            errorText={this.getErrorText('lastName')} />

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

          <FormTextInput
            fieldName="email"
            onInputChanged={e => this.onFieldChange({...e, field: 'email'})}
            inputType="email"
            fieldId="txtEmail"
            labelText="Email address"
            value={this.props.employee.email}
            errorText={this.getErrorText('email')} />

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
  errors: PropTypes.arrayOf(PropTypes.shape({
    field: PropTypes.string,
    message: PropTypes.string
  })),
  onDetailsChanged: PropTypes.func,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func
};

EmployeeDetails.defaultProps = {
  employee: {},
  errors: [],
  onDetailsChanged: () => {},
  onSubmit: () => {},
  onCancel: () => {}
};

export default EmployeeDetails;
