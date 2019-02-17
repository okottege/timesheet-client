import React from 'react';
import {shallow, mount} from 'enzyme';
import {FormGroup, Form} from 'react-bootstrap';

import FormTextInput from '../FormTextInput';
import ErrorFeedback from '../../ErrorFeedback';

describe('Form Text Input should', () => {
  describe('render text input field correctly with', () => {
    const txtField = shallow(<FormTextInput
                              fieldId="txtField"
                              fieldName="firstName"
                              labelText="First name"
                              inputType="text"
                              onInputChanged={() => {}}
                              value="Bob"/>);

    test('a FormGroup element with correct field id', () => {
      expect(txtField.find(FormGroup).find({controlId: "txtField"}).exists()).toBe(true);
    });

    test('a form label with correct text', () => {
      expect(txtField.find(Form.Label).at(0).text()).toBe('First name');
    });

    test('a form control of type "text" with value "Bob"', () => {
      const txtControl = txtField.find(Form.Control);
      expect(txtControl.prop('type')).toBe('text');
      expect(txtControl.prop('value')).toBe('Bob');
    });

    test('a validation error text and "isInvalid" flag set to true', () => {
      const errorTextField = shallow(<FormTextInput
                                      fieldName="firstName"
                                      errorText="First name is required"
                                      onInputChanged={() => {}}/>);
      expect(errorTextField.find(ErrorFeedback).prop('error').message).toBe('First name is required');
      expect(errorTextField.find(Form.Control).prop('isInvalid')).toBe(true);
    });

    test('the "onInputChanged" event handler correctly configured', () => {
      const onInputChanged = jest.fn();
      const inputField = shallow(<FormTextInput fieldName="firstName" onInputChanged={onInputChanged}/>);
      inputField.find(Form.Control).prop('onChange')({target: {value: 'Bobs'}});
      expect(onInputChanged).toHaveBeenCalledWith({field: 'firstName', target: {value: 'Bobs'}});
    });
  });
  describe('have the default prop values', () => {
    const txtInput = mount(<FormTextInput fieldName="firstName" onInputChanged={() => {}}/>);
    test.each([
      ['fieldId', 'txtCtrl'],
      ['inputType', 'text'],
      ['labelText', ''],
      ['value', ''],
      ['errorText', ''],
    ])('%p prop is %p', (propName, expectedValue) => {
      expect(txtInput.prop(propName)).toBe(expectedValue);
    });
  })
});
