import React from 'react';
import {shallow} from 'enzyme';

import EmployeeDetails from "../EmployeeDetails";
import ErrorFeedback from '../../ErrorFeedback';

describe('Employee Details component displaying errors', () => {
  test.each([
    ['firstName', 'txtFirstName'],
    ['lastName', 'txtLastName'],
    ['dateOfBirth', 'txtDateOfBirth'],
    ['hireDate', 'txtHireDate'],
    ['email', 'txtEmail'],
  ])('when %p field has an error, it is supplied to ErrorFeedback component', (errorField, ctrlField) => {
    const errors = [{field: errorField, message: 'error!'}];
    const employeeDetails = shallow(<EmployeeDetails errors={errors}/>);
    const feedback = employeeDetails.find({controlId: ctrlField}).find(ErrorFeedback);

    expect(feedback.prop('error')).toEqual(errors[0]);
  });
});
