import React from 'react';
import {shallow} from 'enzyme';
import {Form} from 'react-bootstrap';

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
  });
});
