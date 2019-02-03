import React from 'react';
import {shallow} from 'enzyme';
import {Form} from 'react-bootstrap';

import EmployeeDetails from '../EmployeeDetails';


describe('Employee Details user interactions', () => {
  const employee = {
    firstName: 'Brian', lastName: 'Adams', dateOfBirth: new Date('1985-05-04'),
    hireDate: new Date('2011-11-10'), email: 'b.a@hotmail.com'};

  test.each([
    ['txtFirstName', 'firstName', 'New-Brian'],
    ['txtLastName', 'lastName', 'new-Adams'],
  ])('when text field: %p changes, handler is invoked with args {fieldName: %p, value: %p}', (ctrlId, fldName, value) => {
    const onDetailsChanged = jest.fn();
    const employeeDetails = shallow(<EmployeeDetails employee={employee} onDetailsChanged={onDetailsChanged}/>);
    const txtField = employeeDetails.find({controlId: ctrlId}).find(Form.Control);
    txtField.prop('onChange')({target: {value: value}});

    expect(onDetailsChanged).toHaveBeenCalledWith({field: fldName, value: value});
  });

  test('handler is not invoked if none is supplied', () => {
    const onDetailsChanged = jest.fn();
    const employeeDetails = shallow(<EmployeeDetails/>);
    employeeDetails.find({controlId: 'txtFirstName'}).find(Form.Control).prop('onChange')({target: {value: 'test'}});

    expect(onDetailsChanged).not.toHaveBeenCalled();
  });
});
