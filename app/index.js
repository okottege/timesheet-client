import React from 'react';
import ReactDOM from 'react-dom';
import {Alert} from 'react-bootstrap';

import './index.css';
import DatePicker from './components/DatePicker';
import EmployeeForm from './components/employee/EmployeeForm';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Alert variant="warning">
          <strong>Simple Warning</strong>, best to take it easy.
        </Alert>
        <h1>Hello Mr Developer!</h1>
        <div>
          <EmployeeForm/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
