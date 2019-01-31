import React from 'react';
import PropTypes from 'prop-types';
import {ButtonToolbar} from "react-bootstrap";

import DateDropdown from './DateDropdown';
import MonthDropdown from './MonthDropdown';
import YearDropdown from './YearDropdown';

class DatePicker extends React.Component {
  getSelectedDate = () => !this.props.selectedDate ? new Date() : this.props.selectedDate;

  notifyDateChanged  = (type, value) => {
    const selectedDate = this.getSelectedDate();
    switch(type) {
      case 'date':
        this.props.onDateSelected(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), value));
        break;
      case 'month':
        this.props.onDateSelected(new Date(selectedDate.getFullYear(), value, selectedDate.getDate()));
        break;
      case 'year':
        this.props.onDateSelected(new Date(value, selectedDate.getMonth(), selectedDate.getDate()));
        break;
    }
  };

  render() {
    const selectedDate = this.getSelectedDate();
    return (
      <div>
        {!!this.props.title &&
          <span>{this.props.title}</span>
        }
        <ButtonToolbar>
          <DateDropdown
            selectedDate={selectedDate.getDate()}
            monthIndex={selectedDate.getMonth()}
            year={selectedDate.getFullYear()}
            onDateSelected={d => this.notifyDateChanged('date', d)}/>

          <MonthDropdown
            selectedMonth={selectedDate.getMonth()}
            onMonthSelected={m => this.notifyDateChanged('month', m)} />

          <YearDropdown
            selectedYear={selectedDate.getFullYear()}
            startYear={this.props.minYear}
            numYears={this.props.numberOfYears}
            onYearSelected={y => this.notifyDateChanged('year', y)}/>
        </ButtonToolbar>
      </div>
    );
  }
}

DatePicker.propTypes = {
  onDateSelected: PropTypes.func.isRequired,
  title: PropTypes.string,
  selectedDate: PropTypes.instanceOf(Date),
  dateRequired: PropTypes.bool,
  defaultToCurrentDate: PropTypes.bool,
  minYear: PropTypes.number,
  numberOfYears: PropTypes.number
};

DatePicker.defaultProps = {
  minYear: 1920,
  numberOfYears: 100
};

export default DatePicker;
