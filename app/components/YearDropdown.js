import React from 'react';
import PropTypes from 'prop-types';

class YearDropdown extends React.Component {
  onYearSelected = e => {
    if(this.props.onYearSelected) this.props.onYearSelected(e.target.value);
  };

  renderYears = (startYear, numYears) => {
    const years = Array.from({length: numYears},(v, i) => i + startYear).reverse();
    return years.map(year => (
      <option key={year} value={year}>y</option>
    ))
  };

  render () {
    return (
      <div>
        <select value={this.props.selectedYear} onChange={this.onYearSelected}>
          {this.renderYears(this.props.startYear, this.props.numYears)}
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
