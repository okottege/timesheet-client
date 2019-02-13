import React from 'react';
import PropTypes from 'prop-types';
import EmployeeDetails from './EmployeeDetails';

const getValidationErrors = e => {
  const errors = [];
  if(!e.firstName) errors.push({field: 'firstName', message: 'First name is required.'});
  if(!e.lastName) errors.push({field: 'lastName', message: 'Last name is required.'});
  if(!e.dateOfBirth) errors.push({field: 'dateOfBirth', message: 'Date of birth is required.'});
  if(!e.hireDate) errors.push({field: 'hireDate', message: 'Hire date is required.'});
  if(!e.email) errors.push({field: 'email', message: 'Email is required.'});

  return errors;
};

class EmployeeForm extends React.Component {
  state = {
    employee: {},
    errors: []
  };

  onEmployeeDetailsChanged = e => {
    const {field, value} = e;
    this.setState(prevState => (
      {employee: {...prevState.employee, [field]: value}})
    );
  };

  onEmployeeDetailsSubmit = () => {
    this.validateEmployee(this.state.employee)
  };

  validateEmployee = e => {
    const errors = getValidationErrors(e);
    this.setState(s => ({...s, errors }));
  };

  render() {
    return (
      <EmployeeDetails
        employee={this.state.employee}
        errors={this.state.errors}
        onDetailsChanged={this.onEmployeeDetailsChanged}
        onSubmit={this.onEmployeeDetailsSubmit}/>
    );
  }
}

EmployeeForm.propTypes = {
  employeeId: PropTypes.number
};

export default EmployeeForm;
