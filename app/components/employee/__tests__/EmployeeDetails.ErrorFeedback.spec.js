import React from 'react';
import {shallow} from 'enzyme';
import {Form} from "react-bootstrap";

import EmployeeDetails from "../EmployeeDetails";
import ErrorFeedback from '../../ErrorFeedback';

describe('Employee Details component displaying errors', () => {
  describe('using ErrorFeedback component', () => {
    test.each([
      ['firstName', 'txtFirstName'],
      ['lastName', 'txtLastName'],
      ['dateOfBirth', 'txtDateOfBirth'],
      ['hireDate', 'txtHireDate'],
      ['email', 'txtEmail'],
    ])('when %p field has an error, it is supplied to ErrorFeedback component', (errField, ctrlField) => {
      const errors = [{field: errField, message: 'error!'}];
      const employeeDetails = shallow(<EmployeeDetails errors={errors}/>);
      const feedback = employeeDetails.find({controlId: ctrlField}).find(ErrorFeedback);

      expect(feedback.prop('error')).toEqual(errors[0]);
    });
  });

  describe('in text input fields', () => {
    test.each([
      ['firstName', 'txtFirstName'],
      ['lastName', 'txtLastName'],
      ['email', 'txtEmail'],
    ])('when %p field has an error, "isInvalid" prop is set to "true"', (errField, ctrlField) => {
      const errors = [{field: errField, message: 'error!'}];
      const employeeDetails = shallow(<EmployeeDetails errors={errors}/>);
      expect(
        employeeDetails.find({controlId: ctrlField}).find(Form.Control).prop('isInvalid')
      ).toBe(true);
    });

    test('when there are no errors, "isInvalid" prop is set to "false"', () => {
      const employeeDetails = shallow(<EmployeeDetails />);
      expect(employeeDetails.find(Form.Control).find({isInvalid: true}).length).toBe(0);
    })
  })
});
