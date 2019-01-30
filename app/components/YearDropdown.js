import React from 'react';
import PropTypes from 'prop-types';

import DropdownList from "./common/DropdownList";
import {populateArrayWithSequence} from './common/utils/arrayHelpers';

class YearDropdown extends React.Component {
  onYearSelected = year => {
    if(this.props.onYearSelected) this.props.onYearSelected(Number(year));
  };

  getYears = (startYear, numYears) => {
    return populateArrayWithSequence(startYear, numYears)
      .reverse()
      .map(i => i.toString())
      .map(i => ({name: i, value: i}));
  };

  getSelectedYear = selectedYear =>
    selectedYear !== undefined ? this.props.selectedYear.toString(): undefined;

  render () {
    return (
      <div>
        <DropdownList
          items={this.getYears(this.props.startYear, this.props.numYears)}
          selectedItem={this.getSelectedYear(this.props.selectedYear)}
          onItemSelected={this.onYearSelected}/>
      </div>
    );
  }
}

YearDropdown.propTypes = {
  startYear: PropTypes.number.isRequired,
  numYears: PropTypes.number.isRequired,
  selectedYear: PropTypes.number,
  onYearSelected: PropTypes.func,
};

export default YearDropdown;
