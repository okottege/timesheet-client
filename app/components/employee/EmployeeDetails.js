import React from 'react';
import PropTypes from 'prop-types';
import {Form, FormGroup, FormControl} from "react-bootstrap";

class EmployeeDetails extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup controlId="frmEmployeeDetails">
          <FormControl type="text" id="txtFirstName" />
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
