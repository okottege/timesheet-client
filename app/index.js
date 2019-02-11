import React from 'react';
import ReactDOM from 'react-dom';
import {Alert} from 'react-bootstrap';

import './index.css';
import EmployeeForm from './components/employee/EmployeeForm';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <h1>Hello Mr Developer!</h1>
        <div>
          <EmployeeForm/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
