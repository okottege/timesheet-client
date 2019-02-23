import React from 'react';
import {shallow} from 'enzyme';
import {Form, Button, Alert} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';

import LoginForm from '../LoginForm';
import FormTextInput from '../../common/FormTextInput';

describe('Login form should', () => {

  const getInputChangedArgs = (field, value) => ({target: {value}, field});

  describe('render correctly with', () => {
    const loginForm = shallow(<LoginForm/>);

    test('a "Form" element', () => {
      expect(loginForm.find(Form).exists()).toBe(true);
    });
    test.each([
      ['txtUsername', 'text', 'username', 'Username'],
      ['txtPassword', 'password', 'password', 'Password'],
    ])('a %p field', (fieldId, inputType, fieldName, labelText) => {
      const txtField = loginForm.find(FormTextInput).find({fieldId});
      expect(txtField.exists()).toBe(true);
      expect(txtField.prop('inputType')).toBe(inputType);
      expect(txtField.prop('fieldName')).toBe(fieldName);
      expect(txtField.prop('labelText')).toBe(labelText);
    });
    test('a submit button with text "Login"', () => {
      const loginButton = loginForm.find(Button);
      expect(loginButton.exists()).toBe(true);
      expect(loginButton.at(0).text()).toBe('Login');
      expect(loginButton.prop('type')).toBe('submit');
      expect(loginButton.prop('variant')).toBe('primary');
    });
  });

  describe('capture field changes', () => {
    test.each([
      ['username', 'txtUsername', 'test.user'],
      ['password', 'txtPassword', 'pass@word01']
    ])('when %p field changes, its value is updated correctly', (field, fieldId, expValue) => {
      const loginForm = shallow(<LoginForm />);
      loginForm.find({fieldId}).prop('onInputChanged')(getInputChangedArgs(field, expValue));
      expect(loginForm.find({fieldId}).prop('value')).toBe(expValue);
    });
  });

  describe('submit the form correctly', () => {
    const loginForm = shallow(<LoginForm/>);

    test.each([
      ['Username', 'txtUsername'],
      ['Password', 'txtPassword'],
    ])('field %p is required', (fieldName, fieldId) => {
      loginForm.find(Form).prop('onSubmit')({preventDefault: jest.fn()});
      expect(loginForm.find({fieldId}).prop('errorText')).toBe(`${fieldName} is required`);
      expect(loginForm.find(Alert).at(0).text()).toBe('There was a problem with Login');
    });

    test('on successful login, user is redirected to home page', () => {
      loginForm.find({fieldId: 'txtUsername'})
        .prop('onInputChanged')(getInputChangedArgs('username', 'usr-name'));
      loginForm.find({fieldId: 'txtPassword'})
        .prop('onInputChanged')(getInputChangedArgs('password', 'pass@word01'));

      loginForm.find(Form).prop('onSubmit')({preventDefault: jest.fn()});

      expect(loginForm.find(Redirect).exists()).toBe(true);
      expect(loginForm.find(Redirect).prop('to')).toBe('/');
    });
  });
});
