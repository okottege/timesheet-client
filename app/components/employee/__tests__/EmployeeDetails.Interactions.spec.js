import React from 'react';
import {shallow} from 'enzyme';
import {Form} from 'react-bootstrap';

import EmployeeDetails from '../EmployeeDetails';
import DatePicker from '../../DatePicker';

const invokeChangedHandler = (component, controlId, fieldType, handlerPropName, handlerArgValue) => {
  const fld = component.find({controlId}).find(fieldType);
  fld.prop(handlerPropName)({target: {value: handlerArgValue}});
};

describe('Employee Details user interactions', () => {
  const employee = {
    firstName: 'Brian', lastName: 'Adams', dateOfBirth: new Date('1985-05-04'),
    hireDate: new Date('2011-11-10'), email: 'b.a@hotmail.com'};

  test.each([
    ['txtFirstName', 'onChange', Form.Control, 'firstName', 'New-Brian'],
    ['txtLastName', 'onChange', Form.Control, 'lastName', 'new-Adams'],
    ['txtDateOfBirth', 'onDateSelected', DatePicker, 'dateOfBirth', new Date('2019-05-04')],
    ['txtHireDate', 'onDateSelected', DatePicker, 'hireDate', new Date('2013-10-15')],
    ['txtEmail', 'onChange', Form.Control, 'email', 'abc.xyz@gmail.com'],
  ])('when field %p changes, %p handler is invoked with args', (ctrlId, handlerName, fldType, fldName, value) => {
    const onDetailsChanged = jest.fn();
    const employeeDetails = shallow(<EmployeeDetails employee={employee} onDetailsChanged={onDetailsChanged}/>);
    invokeChangedHandler(employeeDetails, ctrlId, fldType, handlerName, value);

    expect(onDetailsChanged).toHaveBeenCalledWith({field: fldName, value: value});
  });

  test('handler is not invoked if none is supplied', () => {
    const onDetailsChanged = jest.fn();
    const employeeDetails = shallow(<EmployeeDetails/>);
    employeeDetails.find({controlId: 'txtFirstName'}).find(Form.Control).prop('onChange')({target: {value: 'test'}});

    expect(onDetailsChanged).not.toHaveBeenCalled();
  });

  test('when submit button is clicked, the supplied handler is invoked', () => {
    const onSubmit = jest.fn();
    const employeeDetails = shallow(<EmployeeDetails onSubmitClick={onSubmit} />);
    employeeDetails.find({id: 'btnSubmit'}).prop('onClick')();

    expect(onSubmit).toHaveBeenCalled();
  });
});
