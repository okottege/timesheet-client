import React from 'react';
import ReactDOM from 'react-dom';
import {Alert} from 'react-bootstrap';

import './index.css';
import DatePicker from './components/DatePicker';
import EmployeeDetails from './components/employee/EmployeeDetails';

class App extends React.Component {
  state = {
    selectedDate: new Date()
  };
  onDateSelected = date => {
    this.setState({selectedDate: date});
  };

  render() {
    return (
      <div className="container-fluid">
        <Alert bsStyle="warning">
          <strong>Simple Warning</strong>, best to take it easy.
        </Alert>
        <h1>Hello Mr Developer!</h1>
        <div className="form-group">
          <label>Date of birth</label>
          <DatePicker className="form-control" selectedDate={this.state.selectedDate} onDateSelected={this.onDateSelected}/>
        </div>
        <div>
          <EmployeeDetails/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
