import React from 'react';
import {shallow} from 'enzyme';
import {Form} from 'react-bootstrap';

import EmployeeDetails from "../EmployeeDetails";

describe('Employee Details component displaying errors', () => {
  test('when firstName field has an error, it is displayed', () => {
    const employeeDetails = shallow(
      <EmployeeDetails errors={[{field: 'firstName', message: 'error msg'}]}/>);
    const feedback = employeeDetails.find({controlId: 'txtFirstName'}).find(Form.Control.Feedback);
    expect(feedback.at(0).childAt(0).text()).toBe('error msg');
  });
});
