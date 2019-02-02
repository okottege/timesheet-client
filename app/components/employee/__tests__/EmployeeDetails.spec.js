import React from 'react';
import {mount, shallow} from 'enzyme';
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

    test('have a submit button', () => {
      const button = employeeDetails.find(Button).find({id: 'btnSubmit'}).at(0);
      expect(button.prop('variant')).toBe('primary');
      expect(button.text()).toBe('Submit');
    });
  });

  describe('have the default props', () => {
    const employeeDetails = mount(<EmployeeDetails/>);

    test("the 'mode' prop should default to 'Create'", () => {
      expect(employeeDetails.prop('mode')).toBe('Create');
    });
    test("the 'employee' prop should be an empty object", () => {
      expect(employeeDetails.prop('employee')).toEqual({});
    });
  });

  test('populate the state with props', () => {
    const employee = {
      firstName: 'Brian', lastName: 'Adams', dateOfBirth: new Date('1985-05-04'),
      hireDate: new Date('2011-11-10'), email: 'b.a@hotmail.com'};
    const employeeDetails = shallow(<EmployeeDetails employee={employee}/>);
    expect(employeeDetails.state('employee')).toEqual(employee);
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
      const fld = employeeDetails.find({controlId: textFieldId}).find(Form.Control);
      expect(fld.prop('value')).toBe(expectedValue);
    });

    test.each([
      ['txtDateOfBirth', employee.dateOfBirth],
      ['txtHireDate', employee.hireDate],
    ])('the date picker field %p is populated with %p', (dateFieldId, expectedDate) => {
      const fld = employeeDetails.find({controlId: dateFieldId}).find(DatePicker);
      expect(fld.prop('selectedDate')).toEqual(expectedDate);
    });
  })
});
