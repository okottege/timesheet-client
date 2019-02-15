import React from 'react';
import PropTypes from 'prop-types';
import {Form} from "react-bootstrap";

const ErrorFeedback = props =>  {
  return props.error && props.error.message
    ? <Form.Control.Feedback type="invalid">{props.error.message}</Form.Control.Feedback>
    : null;
};

ErrorFeedback.propTypes = {
  error: PropTypes.shape({
    field: PropTypes.string,
    message: PropTypes.string
  })
};

ErrorFeedback.defaultProps = {
  error: {}
};

export default ErrorFeedback;
