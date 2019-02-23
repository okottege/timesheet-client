import React from 'react';
import {Button, ButtonToolbar, Form, Card} from 'react-bootstrap';

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
      <Card>
        <Card.Header>Login to Timesheets</Card.Header>
        <Card.Body>
          <Card.Title>Enter your username and password</Card.Title>
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
        </Card.Body>
        <Card.Footer>Forgotten your password?  Use the password recovery.</Card.Footer>
      </Card>
    );
  }
}

export default LoginForm;
