import React from 'react';
import PropTypes from 'prop-types';
import EmployeeDetails from "./EmployeeDetails";

class EmployeeForm extends React.Component {
  state = {
    employee: {}
  };

  onEmployeeDetailsChanged = e => {
    const {name, value} = e;
    this.setState(prevState => (
      {employee: {...prevState.employee, [name]: value}})
    );
  };

  render() {
    return (
      <EmployeeDetails
        employee={this.state.employee}
        onDetailsChanged={this.onEmployeeDetailsChanged} />
    )
  }
}

EmployeeForm.propTypes = {
  employeeId: PropTypes.number
};

export default EmployeeForm;
