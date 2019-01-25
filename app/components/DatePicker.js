import React from 'react';
import PropTypes from 'prop-types';

import DateDropdown from './DateDropdown';
import MonthDropdown from './MonthDropdown';
import YearDropdown from './YearDropdown';

class DatePicker extends React.Component {
  hasTitle() {
    return !!this.props.title;
  }
  render() {
    return (
      <div>
        {this.hasTitle() &&
          <span>{this.props.title}</span>
        }
        <DateDropdown monthIndex={0} year={2018}/>
        <MonthDropdown />
        <YearDropdown startYear={1970} numYears={2018}/>
      </div>
    );
  }
}

DatePicker.propTypes = {
  title: PropTypes.string,
  selectedDate: PropTypes.instanceOf(Date),
  dateRequired: PropTypes.bool,
  defaultToCurrentDate: PropTypes.bool
};

export default DatePicker;
