import React from 'react';
import PropTypes from 'prop-types';

import DropdownList from './common/DropdownList';

class MonthDropdown extends React.Component {

  state = {
    months: [
      {name: 'January', value: '0'},
      {name: 'February', value: '1'},
      {name: 'March', value: '2'},
      {name: 'April', value: '3'},
      {name: 'May', value: '4'},
      {name: 'June', value: '5'},
      {name: 'July', value: '6'},
      {name: 'August', value: '7'},
      {name: 'September', value: '8'},
      {name: 'October', value: '9'},
      {name: 'November', value: '10'},
      {name: 'December', value: '11'},
    ]
  };

  onMonthSelected = monthIndex => this.props.onMonthSelected(Number(monthIndex));

  render() {
    return (
      <DropdownList
        items={this.state.months}
        selectedItem={this.props.selectedMonth.toString()}
        onItemSelected={this.onMonthSelected}/>
    );
  }
}

MonthDropdown.propTypes = {
  selectedMonth: PropTypes.number,
  onMonthSelected: PropTypes.func
};

MonthDropdown.defaultProps = {
  selectedMonth: new Date().getMonth(),
  onMonthSelected: () => {}
};

export default MonthDropdown;
