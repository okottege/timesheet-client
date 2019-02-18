import React from 'react';
import {shallow} from 'enzyme';
import {Form} from 'react-bootstrap';

import EmployeeDetails from '../EmployeeDetails';
import DatePicker from '../../DatePicker';

const invokeChangedHandler = (component, controlId, field, handlerArgValue) => {
  const fld = component.find({fieldId: controlId});
  fld.prop('onInputChanged')({target: {value: handlerArgValue}, field });
};

describe('Employee Details user interactions', () => {
  const employee = {
    firstName: 'Brian', lastName: 'Adams', dateOfBirth: new Date('1985-05-04'),
    hireDate: new Date('2011-11-10'), email: 'b.a@hotmail.com'};

  test.each([
    ['txtFirstName', 'firstName', 'New-Brian'],
    ['txtLastName', 'lastName', 'new-Adams'],
    ['txtEmail', 'email', 'abc.xyz@gmail.com'],
  ])('when text field %p changes, "onInputChanged" handler is invoked with args', (ctrlId, fldName, value) => {
    const onDetailsChanged = jest.fn();
    const employeeDetails = shallow(<EmployeeDetails employee={employee} onDetailsChanged={onDetailsChanged}/>);
    invokeChangedHandler(employeeDetails, ctrlId, fldName, value);

    expect(onDetailsChanged).toHaveBeenCalledWith({field: fldName, value});
  });

  test.each([
    ['txtDateOfBirth', 'dateOfBirth', new Date('2019-05-04')],
    ['txtHireDate', 'hireDate', new Date('2013-10-15')]
  ])('when date field %p changes, "onDateSelected" handler is invoked with args', (ctrlId, fldName, value) => {
    const onDetailsChanged = jest.fn();
    const employeeDetails = shallow(<EmployeeDetails employee={employee} onDetailsChanged={onDetailsChanged}/>);
    employeeDetails.find({controlId: ctrlId}).find(DatePicker).prop('onDateSelected')({target: {value}, field: fldName });
    expect(onDetailsChanged).toHaveBeenCalledWith({field: fldName, value});
  });

  describe('when the underlying form is submitted', () => {
    const onSubmit = jest.fn();
    const preventDefault = jest.fn();
    const employeeDetails = shallow(<EmployeeDetails onSubmit={onSubmit} />);

    test('the "onSubmit" handler is invoked', () => {
      employeeDetails.find(Form).prop('onSubmit')({preventDefault});
      expect(onSubmit).toHaveBeenCalled();
    });
    test('the "preventDefault" of args has been called', () => {
      employeeDetails.find(Form).prop('onSubmit')({preventDefault});
      expect(preventDefault).toHaveBeenCalled();
    });

    test.each([
      undefined, {}
    ])('if args is %p, then "preventDefault" is not called', args => {
      onSubmit.mockClear();
      preventDefault.mockClear();
      employeeDetails.find(Form).prop('onSubmit')(args);
      expect(onSubmit).toHaveBeenCalled();
      expect(preventDefault).not.toHaveBeenCalled();
    });
  });

  test('the onSubmit handler is ONLY invoked if it is supplied when the form is submitted', () => {
    const onSubmit = jest.fn();
    const employeeDetails = shallow(<EmployeeDetails/>);
    employeeDetails.find(Form).prop('onSubmit')();
    expect(onSubmit).not.toHaveBeenCalled();
  });


  test('when "Cancel" button is clicked, the supplied handler is invoked', () => {
    const onCancel = jest.fn();
    const employeeDetails = shallow(<EmployeeDetails onCancel={onCancel} />);
    employeeDetails.find({id: 'btnCancel'}).prop('onClick')();
    expect(onCancel).toHaveBeenCalled();
  });
});
