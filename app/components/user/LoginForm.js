import React from 'react';
import {Form} from 'react-bootstrap';

import FormTextInput from '../common/FormTextInput';

const onInputChanged = () => {};

function LoginForm() {
  return (
    <Form>
      <FormTextInput
        fieldId="txtUsername"
        fieldName="username"
        labelText="Username"
        onInputChanged={onInputChanged} />
      <FormTextInput
        fieldId="txtPassword"
        fieldName="password"
        inputType="password"
        labelText="Password"
        onInputChanged={onInputChanged} />
    </Form>
  );
}


export default LoginForm;
