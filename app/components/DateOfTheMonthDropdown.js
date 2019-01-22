import React from 'react';
import PropTypes from 'prop-types';

class DateOfTheMonthDropdown extends React.Component {
  render() {
    return (
      <div>
        <select></select>
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
