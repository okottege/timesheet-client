import React from 'react';
import PropTypes from 'prop-types';
import DropdownList from "./common/DropdownList";
import {populateArrayWithSequence} from "./common/utils/arrayHelpers";

class DateDropdown extends React.Component {
  onDateSelected = date => {
    if(this.props.onDateSelected) this.props.onDateSelected(Number(date));
  };

  getDaysForMonth = (year, monthIndex) => {
    const date = new Date(year, monthIndex + 1, 0);
    return populateArrayWithSequence(1, date.getDate())
      .map(d => ({name: d.toString(), value: d.toString()}));
  };

  render() {
    const selectedDate = this.props.selectedDate
      ? this.props.selectedDate.toString()
      : undefined;

    return (
      <DropdownList
        items={this.getDaysForMonth(this.props.year, this.props.monthIndex)}
        selectedItem={selectedDate}
        onItemSelected={this.onDateSelected}/>
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
