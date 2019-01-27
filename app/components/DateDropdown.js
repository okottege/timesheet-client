import React from 'react';
import PropTypes from 'prop-types';
import DropdownList from "./common/DropdownList";

class DateDropdown extends React.Component {
  onDateSelected = date => {
    if(this.props.onDateSelected) this.props.onDateSelected(Number(date));
  };

  getDaysForMonth = (year, monthIndex) => {
    const date = new Date(year, monthIndex + 1, 0);
    return Array.from({length: date.getDate()}, (v, k) => k+1)
      .map(d => ({name: d.toString(), value: d.toString()}));
  };

  render() {
    const selectedDate = this.props.selectedDate;
    return (
      <div>
        <DropdownList
          items={this.getDaysForMonth(this.props.year, this.props.monthIndex)}
          selectedItem={selectedDate ? selectedDate.toString() : undefined}
          onItemSelected={this.onDateSelected}/>
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
