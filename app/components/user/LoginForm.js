import React from 'react';
import {Button, ButtonToolbar, Form, Card, Alert} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';

import FormTextInput from '../common/FormTextInput';

const validateInput = (username, password) => {
  const errors = [];
  if(!username) errors.push({field: 'username', message: 'Username is required'});
  if(!password) errors.push({field: 'password', message: 'Password is required'});

  return errors;
};

class LoginForm extends React.Component {
  state = {
    username: '',
    password: '',
    redirectToHome: false,
    errors: []
  };

  onInputChanged = e => {
    const {field} = e;
    this.setState(prevState => ({...prevState, [field]: e.target.value}));
  };

  onLogin = e => {
    e.preventDefault();

    const errors = validateInput(this.state.username, this.state.password);
    const redirectToHome = errors.length === 0;
    this.setState(prevState => ({...prevState, errors, redirectToHome}));
  };

  renderErrorSummary = () =>
    this.state.errors.length > 0 ? <Alert variant="danger">There was a problem with Login</Alert> : null;

  getErrorText = field => {
    const error = this.state.errors.find(e => e.field === field);
    if(error) return error.message;
    return '';
  };

  renderLoginForm = () => {
    return (
      <Card>
        <Card.Body>
          {this.renderErrorSummary()}
          <Card.Title>Enter your username and password</Card.Title>
          <Form onSubmit={this.onLogin}>
            <FormTextInput
              fieldId="txtUsername"
              fieldName="username"
              labelText="Username"
              errorText={this.getErrorText('username')}
              value={this.state.username}
              onInputChanged={e => this.onInputChanged({...e, field: 'username'})} />
            <FormTextInput
              fieldId="txtPassword"
              fieldName="password"
              inputType="password"
              labelText="Password"
              errorText={this.getErrorText('password')}
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
