import React from 'react';
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
    errors: [],
    validateFields: false
  };

  onEmployeeDetailsChanged = e => {
    const {field, value} = e;
    this.setState(
      prevState => ({employee: {...prevState.employee, [field]: value}}),
      () => {
        if(this.state.validateFields) this.validateEmployee(this.state.employee);
      }
    );
  };

  onEmployeeDetailsSubmit = () => {
    this.validateEmployee(this.state.employee);
    this.setState(s => ({...s, validateFields: true}));
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

export default EmployeeForm;
