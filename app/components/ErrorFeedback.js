import React from 'react';
import PropTypes from 'prop-types';
import {Form} from "react-bootstrap";

class ErrorFeedback extends React.Component {
  renderError(errors, field) {
    const error = errors.find(e => e.field === field);
    if(error) return <Form.Control.Feedback type="invalid">{error.message}</Form.Control.Feedback>;

    return '';
  }

  render() {
    return this.props.errors
      ? this.renderError(this.props.errors, this.props.field) : '';
  }
}

ErrorFeedback.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.shape({
    field: PropTypes.string,
    message: PropTypes.string
  })),
  field: PropTypes.string
};

ErrorFeedback.defaultProps = {
  errors: []
};

export default ErrorFeedback;
