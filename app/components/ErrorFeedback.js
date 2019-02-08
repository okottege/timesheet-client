import React from 'react';
import PropTypes from 'prop-types';
import {Form} from "react-bootstrap";

class ErrorFeedback extends React.Component {
  render() {
    return (
      <Form.Control.Feedback type="invalid">
        {this.props.errors.find(e => e.field === this.props.field).message}
      </Form.Control.Feedback>
    );
  }
}

ErrorFeedback.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.shape({
    field: PropTypes.string,
    message: PropTypes.string
  })),
  field: PropTypes.string
};

export default ErrorFeedback;
