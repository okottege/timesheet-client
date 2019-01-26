import React from 'react';
import {shallow} from 'enzyme';

import EmployeeDetails from '../EmployeeDetails';

describe('Employee Details component should', () => {
  test('render correctly', () => {
    const employeeDetails = shallow(<EmployeeDetails/>);
    expect(employeeDetails.length).toBe(1);
  });
});
