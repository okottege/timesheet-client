import React from 'react';
import {Button, ButtonToolbar, Form, Card} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';

import FormTextInput from '../common/FormTextInput';

class LoginForm extends React.Component {
  state = {
    username: '',
    password: '',
    redirectToHome: false
  };

  onInputChanged = e => {
    const {field} = e;
    this.setState(prevState => ({...prevState, [field]: e.target.value}));
  };

  onLogin = () => {
    this.setState(prevState => ({...prevState, redirectToHome: true}));
  };

  renderLoginForm = () => {
    return (
      <Card>
        <Card.Header>Login to Timesheets</Card.Header>
        <Card.Body>
          <Card.Title>Enter your username and password</Card.Title>
          <Form onSubmit={this.onLogin}>
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
  };

  render() {
    if(this.state.redirectToHome) return <Redirect to="/" />;

    return this.renderLoginForm();
  }
}

export default LoginForm;
