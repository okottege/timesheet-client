import React from 'react';
import PropTypes from 'prop-types';

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
