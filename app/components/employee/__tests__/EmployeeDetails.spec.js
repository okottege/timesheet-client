import React from 'react';
import {shallow, mount} from 'enzyme';
import {Form} from "react-bootstrap";

import EmployeeDetails from '../EmployeeDetails';

describe('Employee Details component should', () => {
  describe('render the correct fields', () => {
    const employeeDetails = mount(<EmployeeDetails/>);

    test('one top-level form element', () => {
      expect(employeeDetails.find(Form).length).toBe(1);
    });
    test('one input field for first name', () => {
      const txtFirstName = employeeDetails.find('input#txtFirstName');
      expect(txtFirstName.exists()).toBe(true);
    });
  });

  describe('have the default props', () => {
    const employeeDetails = mount(<EmployeeDetails/>);

    test("the 'mode' prop should default to 'Create'", () => {
      expect(employeeDetails.prop('mode')).toBe('Create');
    })
  })
});
