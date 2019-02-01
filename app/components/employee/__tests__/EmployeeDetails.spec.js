import React from 'react';
import {shallow, mount} from 'enzyme';
import {Form, FormGroup, FormControl, ControlLabel} from "react-bootstrap";

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
        const lbl = fld.find(ControlLabel);
        const formCtrl = fld.find(FormControl);

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
        const lbl = fld.find(ControlLabel);

        expect(fld.find(DatePicker).exists()).toBe(true);
        expect(lbl.at(0).text()).toBe(labelText);
      })
    });
  });

  describe('have the default props', () => {
    const employeeDetails = mount(<EmployeeDetails/>);

    test("the 'mode' prop should default to 'Create'", () => {
      expect(employeeDetails.prop('mode')).toBe('Create');
    })
  })
});
