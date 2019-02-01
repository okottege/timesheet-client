import React from 'react';
import {mount} from 'enzyme';
import {Form, Button} from "react-bootstrap";

import EmployeeDetails from '../EmployeeDetails';
import DatePicker from "../../DatePicker";

describe('Employee Details component should', () => {
  describe('render the correct fields', () => {
    const employeeDetails = mount(<EmployeeDetails/>);
    
    test('one top-level form element', () => {
      expect(employeeDetails.find(Form).length).toBe(1);
    });

    describe('has the text fields:', () => {
      test.each([
        ['text', 'txtFirstName', 'First name'],
        ['text', 'txtLastName', 'Last name'],
        ['email', 'txtEmail', 'Email address'],
      ])('input field of type: %p with id %p and label: %p exists', (type, controlId, labelText) => {
        const fld = employeeDetails.find({controlId: controlId});
        const lbl = fld.find(Form.Label);
        const formCtrl = fld.find(Form.Control);

        expect(formCtrl.prop('type')).toBe(type);
        expect(lbl.at(0).text()).toBe(labelText);
      });
    });

    describe('has the date fields: ', () => {
      test.each([
        ['txtDateOfBirth', 'Date of birth'],
        ['txtHireDate', 'Hire date'],
      ])('date picker field with id %p and label: %p exists', (controlId, labelText) => {
        const fld = employeeDetails.find({controlId: controlId});
        const lbl = fld.find(Form.Label);

        expect(fld.find(DatePicker).exists()).toBe(true);
        expect(lbl.at(0).text()).toBe(labelText);
      });
    });

    test('has submit button', () => {
      const button = employeeDetails.find(Button).find({controlId: 'btnSubmit'}).at(0);
      expect(button.prop('variant')).toBe('primary');
      expect(button.text()).toBe('Submit');
    });
  });

  describe('have the default props', () => {
    const employeeDetails = mount(<EmployeeDetails/>);

    test("the 'mode' prop should default to 'Create'", () => {
      expect(employeeDetails.prop('mode')).toBe('Create');
    })
  })
});
