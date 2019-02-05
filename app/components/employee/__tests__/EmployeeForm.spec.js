import React from 'react';
import {shallow} from 'enzyme';

import EmployeeForm from "../EmployeeForm";
import EmployeeDetails from "../EmployeeDetails";

describe('The Employee Form should', () => {
  test('render correctly', () => {
    const employeeForm = shallow(<EmployeeForm/>);
    expect(employeeForm.find(EmployeeDetails).exists()).toBe(true);
  });
  describe('update the state correctly', () => {
    const employeeForm = shallow(<EmployeeForm />);
    test('when "firstName" field changes, state is updated', () => {
      employeeForm.find(EmployeeDetails).prop('onDetailsChanged')({field: 'firstName', value: 'bob'});
      expect(employeeForm.state().employee['firstName']).toBe('bob');
    })
  });
});
