import React from 'react';
import PropTypes from 'prop-types';

import DropdownList from "./common/DropdownList";
import populateArrayWithSequence from './common/utils/arrayHelpers';

class YearDropdown extends React.Component {
  getYears = (startYear, numYears) => {
    return populateArrayWithSequence(startYear, numYears)
      .reverse()
      .map(String)
      .map(i => ({name: i, value: i}));
  };

  render () {
    return (
      <DropdownList
        items={this.getYears(this.props.startYear, this.props.numYears)}
        selectedItem={this.props.selectedYear.toString()}
        onItemSelected={year => this.props.onYearSelected(Number(year))}/>
    );
  }
}

YearDropdown.propTypes = {
  startYear: PropTypes.number.isRequired,
  numYears: PropTypes.number.isRequired,
  selectedYear: PropTypes.number,
  onYearSelected: PropTypes.func,
};

YearDropdown.defaultProps = {
  selectedYear: new Date().getFullYear(),
  onYearSelected: () => {}
};

export default YearDropdown;
