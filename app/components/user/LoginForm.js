import React from 'react';
import {Button, ButtonToolbar, Form} from 'react-bootstrap';

import FormTextInput from '../common/FormTextInput';

class LoginForm extends React.Component {
  state = {
    username: '',
    password: ''
  };

  onInputChanged = e => {
    const {field} = e;
    this.setState(prevState => ({...prevState, [field]: e.target.value}));
  };

  render() {
    return (
      <Form>
        <FormTextInput
          fieldId="txtUsername"
          fieldName="username"
          labelText="Username"
          value={this.state.username}
          onInputChanged={e => this.onInputChanged({...e, field: 'username'})} />
        <FormTextInput
          fieldId="txtPassword"
          fieldName="password"
          inputType="password"
          labelText="Password"
          value={this.state.password}
          onInputChanged={e => this.onInputChanged({...e, field: 'password'})} />

        <ButtonToolbar>
          <Button id="btnLogin" type="submit" variant="primary">Login</Button>
        </ButtonToolbar>
      </Form>
    );
  }
}

export default LoginForm;
