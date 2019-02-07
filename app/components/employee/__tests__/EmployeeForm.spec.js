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

  describe('validate input fields, when "submit" button is clicked', () => {
    const employeeForm = shallow(<EmployeeForm />);

    test.each([
      'firstName', 'lastName', 'dateOfBirth', 'hireDate', 'email'
    ])('if %p is empty, then validation error supplied to Employee Details component', (field) => {
      employeeForm.find(EmployeeDetails).prop('onDetailsChanged')({field, value: undefined});
      employeeForm.find(EmployeeDetails).prop('onSubmit')();
      const error = employeeForm.find(EmployeeDetails).prop('errors').find(e => e.field === field);

      expect(error.message).toBeDefined();
    });

    test('if all fields are filled out, no errors are supplied to Employee Details component', () => {
      const onDetailsChanged = employeeForm.find(EmployeeDetails).prop('onDetailsChanged');
      onDetailsChanged({field: 'firstName', value:'Sam'});
      onDetailsChanged({field: 'lastName', value: 'Billings'});
      onDetailsChanged({field: 'dateOfBirth', value: new Date('2012-08-12')});
      onDetailsChanged({field: 'hireDate', value: new Date('2019-00-12')});
      onDetailsChanged({field: 'email', value: 'a.b@gmail.com'});
      employeeForm.find(EmployeeDetails).prop('onSubmit')();

      expect(employeeForm.find(EmployeeDetails).prop('errors').length).toBe(0);
    })
  });
});
