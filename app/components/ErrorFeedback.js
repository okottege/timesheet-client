import React from 'react';
import PropTypes from 'prop-types';
import {Form} from "react-bootstrap";

class ErrorFeedback extends React.Component {
  render() {
    return this.props.error && this.props.error.message
      ? <Form.Control.Feedback type="invalid">{this.props.error.message}</Form.Control.Feedback>
      : null;
  }
}

ErrorFeedback.propTypes = {
  error: PropTypes.shape({
    field: PropTypes.string,
    message: PropTypes.string
  }),
};

export default ErrorFeedback;
