import React from 'react';
import {shallow} from 'enzyme';
import {Form, FormGroup} from 'react-bootstrap';

import LoginForm from '../LoginForm';

describe('Login form should', () => {
  describe('render correctly with', () => {
    const loginForm = shallow(<LoginForm/>);

    test('a "Form" element', () => {
      expect(loginForm.find(Form).exists()).toBe(true);
    });
    test('a "Username" field', () => {
      expect(loginForm.find(FormGroup).find({controlId: 'txtUsername'}).exists()).toBe(true);
    });
  });
});
