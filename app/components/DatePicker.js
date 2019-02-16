import React from 'react';
import PropTypes from 'prop-types';
import {ButtonToolbar} from "react-bootstrap";

import DateDropdown from './DateDropdown';
import MonthDropdown from './MonthDropdown';
import YearDropdown from './YearDropdown';

class DatePicker extends React.Component {
  notifyDateChanged  = (type, value) => {
    const {selectedDate} = this.props;
    let changedDate;
    switch(type) {
      case 'date':
        changedDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), value);
        break;
      case 'month':
        changedDate = new Date(selectedDate.getFullYear(), value, selectedDate.getDate());
        break;
      default:
        changedDate = new Date(value, selectedDate.getMonth(), selectedDate.getDate());
        break;
    }
    this.props.onDateSelected({target: {value: changedDate}});
  };

  render() {
    const {selectedDate} = this.props;
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
  minYear: PropTypes.number,
  numberOfYears: PropTypes.number
};

DatePicker.defaultProps = {
  minYear: 1920,
  numberOfYears: 100,
  title: '',
  selectedDate: new Date(),
};

export default DatePicker;
