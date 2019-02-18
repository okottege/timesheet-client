import React from 'react';
import {shallow} from 'enzyme';
import {Alert} from "react-bootstrap";

import EmployeeDetails from "../EmployeeDetails";
import ErrorFeedback from '../../ErrorFeedback';

describe('Employee Details component displaying errors', () => {
  describe('using ErrorFeedback component', () => {
    test.each([
      ['dateOfBirth', 'txtDateOfBirth'],
      ['hireDate', 'txtHireDate'],
    ])('when %p field has an error, it is supplied to ErrorFeedback component', (errField, ctrlField) => {
      const errors = [{field: errField, message: 'error!'}];
      const employeeDetails = shallow(<EmployeeDetails errors={errors}/>);
      const feedback = employeeDetails.find({controlId: ctrlField}).find(ErrorFeedback);

      expect(feedback.prop('error')).toEqual(errors[0]);
    });
  });

  test('when there are errors, a top-level error message is displayed', () => {
    const employeeDetails = shallow(<EmployeeDetails errors={[{field: 'firstName', message: 'error!'}]}/>);
    expect(employeeDetails.find(Alert).find({variant: 'danger'}).exists()).toBe(true);
  });
  test('when there are no errors, then no top-level error message is displayd', () => {
    const employeeDetails = shallow(<EmployeeDetails/>);
    expect(employeeDetails.find(Alert).find({variant:'danger'}).exists()).toBe(false);
  });
});
