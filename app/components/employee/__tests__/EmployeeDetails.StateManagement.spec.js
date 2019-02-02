import React from 'react';
import {shallow} from 'enzyme';

import EmployeeDetails from '../EmployeeDetails';

describe('Employee Details state should', () => {
  const employee = {
    firstName: 'Brian', lastName: 'Adams', dateOfBirth: new Date('1985-05-04'),
    hireDate: new Date('2011-11-10'), email: 'b.a@hotmail.com'};

  test('be initialised with the "employee" prop', () => {
    const employeeDetails = shallow(<EmployeeDetails employee={employee}/>);
    expect(employeeDetails.state('employee')).toEqual(employee);
  });
});
