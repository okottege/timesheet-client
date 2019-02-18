import React from 'react';
import {shallow} from 'enzyme';
import {Form, Button} from 'react-bootstrap';

import LoginForm from '../LoginForm';
import FormTextInput from '../../common/FormTextInput';

describe('Login form should', () => {
  describe('render correctly with', () => {
    const loginForm = shallow(<LoginForm/>);

    test('a "Form" element', () => {
      expect(loginForm.find(Form).exists()).toBe(true);
    });
    test.each([
      ['txtUsername', 'text', 'username', 'Username'],
      ['txtPassword', 'password', 'password', 'Password'],
    ])('a %p field', (fieldId, inputType, fieldName, labelText) => {
      const txtUsername = loginForm.find(FormTextInput).find({fieldId});
      expect(txtUsername.exists()).toBe(true);
      expect(txtUsername.prop('inputType')).toBe(inputType);
      expect(txtUsername.prop('fieldName')).toBe(fieldName);
      expect(txtUsername.prop('labelText')).toBe(labelText);
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
      loginForm.find({fieldId}).prop('onInputChanged')({target: {value: expValue}, field});
      expect(loginForm.find({fieldId}).prop('value')).toBe(expValue);
    });
  });
});
