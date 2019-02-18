import React from 'react';
import {mount, shallow} from 'enzyme';
import {Form, Button} from "react-bootstrap";

import EmployeeDetails from '../EmployeeDetails';
import DatePicker from '../../DatePicker';

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
      ])('input field of type: %p with id %p and label: %p exists', (type, fieldId, labelText) => {
        const fld = employeeDetails.find({fieldId});

        expect(fld.prop('inputType')).toBe(type);
        expect(fld.prop('fieldId')).toBe(fieldId);
        expect(fld.prop('labelText')).toBe(labelText);
      });
    });

    describe('has the date fields: ', () => {
      test.each([
        ['txtDateOfBirth', 'Date of birth'],
        ['txtHireDate', 'Hire date'],
      ])('date picker field with id %p and label: %p exists', (controlId, labelText) => {
        const fld = employeeDetails.find({controlId});
        const lbl = fld.find(Form.Label);

        expect(fld.find(DatePicker).exists()).toBe(true);
        expect(lbl.at(0).text()).toBe(labelText);
      });
    });

    test('have a submit button', () => {
      const button = employeeDetails.find(Button).find({id: 'btnSubmit'}).at(0);
      expect(button.prop('variant')).toBe('primary');
      expect(button.text()).toBe('Submit');
    });
  });

  describe('have the default props', () => {
    test("the 'employee' prop should be an empty object", () => {
      const employeeDetails = mount(<EmployeeDetails/>);
      expect(employeeDetails.prop('employee')).toEqual({});
    });
  });

  describe('display employee details that have been supplied', () => {
    const employee = {
      firstName: 'Steven',
      lastName: 'Smith',
      dateOfBirth: new Date(1980, 4, 14),
      hireDate: new Date(2013, 9, 15),
      email: 'steve.smith@gmail.com'
    };
    const employeeDetails = shallow(<EmployeeDetails employee={employee}/>);

    test.each([
      ['txtFirstName', employee.firstName],
      ['txtLastName', employee.lastName],
      ['txtEmail', employee.email]
    ])('the text field %p is populated with %p', (textFieldId, expectedValue) => {
      const fld = employeeDetails.find({fieldId: textFieldId});
      expect(fld.prop('value')).toBe(expectedValue);
    });

    test.each([
      ['txtDateOfBirth', employee.dateOfBirth],
      ['txtHireDate', employee.hireDate],
    ])('the date picker field %p is populated with %p', (dateFieldId, expectedDate) => {
      const fld = employeeDetails.find({controlId: dateFieldId}).find(DatePicker);
      expect(fld.prop('selectedDate')).toEqual(expectedDate);
    });
  });
});
