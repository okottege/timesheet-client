import React from 'react';
import PropTypes from 'prop-types';

class YearDropdown extends React.Component {
  renderOptions(startYear, numYears) {
    const years = Array.from({length: numYears},(v, i) => i + startYear);
    return years.map(year => (
      <option value={year}>y</option>
    ))
  };

  render () {
    return (
      <div>
        <select>
          {this.renderOptions(this.props.startYear, this.props.numYears)}
        </select>
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
