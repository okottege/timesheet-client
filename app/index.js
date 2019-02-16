import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import EmployeeForm from './components/employee/EmployeeForm';

function App() {
  return (
    <div className="container-fluid">
      <h1>Hello Mr Developer!</h1>
      <div>
        <EmployeeForm/>
      </div>
    </div>
  );
}

ReactDOM.render(<App/>, document.getElementById('app'));
