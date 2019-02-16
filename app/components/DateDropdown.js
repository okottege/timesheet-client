import React from 'react';
import PropTypes from 'prop-types';
import DropdownList from "./common/DropdownList";
import populateArrayWithSequence from "./common/utils/arrayHelpers";

class DateDropdown extends React.Component {
  onDateSelected = date => this.props.onDateSelected(Number(date));

  getDaysForMonth = (year, monthIndex) => {
    const date = new Date(year, monthIndex + 1, 0);
    return populateArrayWithSequence(1, date.getDate())
      .map(d => ({name: d.toString(), value: d.toString()}));
  };

  render() {
    return (
      <DropdownList
        items={this.getDaysForMonth(this.props.year, this.props.monthIndex)}
        selectedItem={this.props.selectedDate.toString()}
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

DateDropdown.defaultProps = {
  selectedDate: new Date().getDate(),
  onDateSelected: () => {}
};

export default DateDropdown;
