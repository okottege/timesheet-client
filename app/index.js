import React from 'react';
import ReactDOM from 'react-dom';
import {Alert} from 'react-bootstrap';

import './index.css';
import DatePicker from './components/DatePicker';

class App extends React.Component {
  state = {
    selectedDate: new Date()
  };
  onDateSelected = date => {
    this.setState({selectedDate: date});
  };

  render() {
    return (
      <div>
        <Alert bsStyle="warning">
          <strong>Simple Warning</strong>, best to take it easy.
        </Alert>
        Hello Mr Developer!
        <div>
          <DatePicker selectedDate={this.state.selectedDate} onDateSelected={this.onDateSelected}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
