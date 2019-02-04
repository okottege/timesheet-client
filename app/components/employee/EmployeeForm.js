import React from 'react';
import PropTypes from 'prop-types';
import EmployeeDetails from "./EmployeeDetails";

class EmployeeForm extends React.Component {
  state = {};

  render() {
    return (
      <EmployeeDetails />
    )
  }
}

EmployeeForm.propTypes = {
  employeeId: PropTypes.number
};

export default EmployeeForm;
