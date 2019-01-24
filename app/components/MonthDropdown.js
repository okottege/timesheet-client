import React from 'react';
import PropTypes from 'prop-types';

class MonthDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      months: [
        {name: 'January', value: 0},
        {name: 'February', value: 1},
        {name: 'March', value: 2},
        {name: 'April', value: 3},
        {name: 'May', value: 4},
        {name: 'June', value: 5},
        {name: 'July', value: 6},
        {name: 'August', value: 7},
        {name: 'September', value: 8},
        {name: 'October', value: 9},
        {name: 'November', value: 10},
        {name: 'December', value: 11},
      ]
    };

    this.onMonthSelected = this.onMonthSelected.bind(this);
  }
  renderMonths() {
    return this.state.months.map(m => (
      <option key={m.value} value={m.value}>{m.name}</option>
    ));
  }

  onMonthSelected(e) {
    if(this.props.onMonthSelected) this.props.onMonthSelected(e.target.value);
  }

  render() {
    return (
      <div>
        <select value={this.props.selectedMonth} onChange={this.onMonthSelected}>
          {this.renderMonths()}
        </select>
      </div>
    );
  }
}

MonthDropdown.propTypes = {
  selectedMonth: PropTypes.number,
  onMonthSelected: PropTypes.func
};

export default MonthDropdown;
