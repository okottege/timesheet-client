import React from 'react';
import {shallow} from 'enzyme';

import EmployeeForm from "../EmployeeForm";
import EmployeeDetails from "../EmployeeDetails";

describe('The Employee Form should', () => {
  test('render correctly', () => {
    const employeeForm = shallow(<EmployeeForm/>);
    expect(employeeForm.find(EmployeeDetails).exists()).toBe(true);
  })
});
