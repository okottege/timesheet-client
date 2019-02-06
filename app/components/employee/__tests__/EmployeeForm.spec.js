import React from 'react';
import {shallow} from 'enzyme';

import EmployeeForm from "../EmployeeForm";
import EmployeeDetails from "../EmployeeDetails";

describe('The Employee Form should', () => {
  test('render correctly', () => {
    const employeeForm = shallow(<EmployeeForm/>);
    expect(employeeForm.find(EmployeeDetails).exists()).toBe(true);
  });

  describe('render Employee Details correctly when', () => {
    const employeeForm = shallow(<EmployeeForm />);
    test.each([
      ['firstName', 'Bob'],
      ['lastName', 'Smith'],
      ['dateOfBirth', new Date(2019, 2, 3)],
      ['hireDate', new Date(2013, 9, 15)],
      ['email', 'abc.xyz@gmail.com'],
    ])('%p field changes', (field, value) => {
      employeeForm.find(EmployeeDetails).prop('onDetailsChanged')({field, value});
      expect(employeeForm.find(EmployeeDetails).prop('employee')[field]).toEqual(value);
    });
  });
});
