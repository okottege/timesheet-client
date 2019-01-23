import React from 'react';
import PropTypes from 'prop-types';

class DateOfTheMonthDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.onSelectedDate = this.onSelectedDate.bind(this);
  }

  renderDatesForMonth(month) {
    const date = new Date(this.props.year, this.props.monthIndex + 1, 0);
    return DateOfTheMonthDropdown.renderDateOptions(date.getDate());
  }

  static renderDateOptions(numDays) {
    const dates = Array.from({length: numDays}, (v, k) => k+1);
    return dates.map(date => (
      <option key={date} value={date}>d</option>
    ));
  }

  onSelectedDate(e) {
    if(this.props.onSelectedDate) this.props.onSelectedDate(e.target.value);
  }

  render() {
    return (
      <div>
        <select value={this.props.selectedDate} onChange={this.onSelectedDate}>
          {this.renderDatesForMonth(this.props.monthIndex)}
        </select>
      </div>
    );
  }
}

DateOfTheMonthDropdown.propTypes = {
  monthIndex: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  selectedDate: PropTypes.number,
  onSelectedDate: PropTypes.func
};

export default DateOfTheMonthDropdown;
