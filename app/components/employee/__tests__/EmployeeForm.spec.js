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
    test.each([
      ['firstName', 'Bob'],
      ['lastName', 'Smith'],
      ['dateOfBirth', new Date(2019, 2, 3)],
    ])('when %p field changes, state is updated', (field, value) => {
      employeeForm.find(EmployeeDetails).prop('onDetailsChanged')({field, value});
      expect(employeeForm.state().employee[field]).toEqual(value);
    })
  });
});
