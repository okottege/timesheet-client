import React from 'react';
import PropTypes from 'prop-types';

class DateDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.onDateSelected = this.onDateSelected.bind(this);
  }

  renderDatesForMonth(month) {
    const date = new Date(this.props.year, this.props.monthIndex + 1, 0);
    return DateDropdown.renderDateOptions(date.getDate());
  }

  static renderDateOptions(numDays) {
    const dates = Array.from({length: numDays}, (v, k) => k+1);
    return dates.map(date => (
      <option key={date} value={date}>d</option>
    ));
  }

  onDateSelected(e) {
    if(this.props.onDateSelected) this.props.onDateSelected(e.target.value);
  }

  render() {
    return (
      <div>
        <select value={this.props.selectedDate} onChange={this.onDateSelected}>
          {this.renderDatesForMonth(this.props.monthIndex)}
        </select>
      </div>
    );
  }
}

DateDropdown.propTypes = {
  monthIndex: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  selectedDate: PropTypes.number,
  onDateSelected: PropTypes.func
};

export default DateDropdown;
