import React from 'react';
import PropTypes from 'prop-types';
import {Form, FormGroup} from 'react-bootstrap';

import ErrorFeedback from "../ErrorFeedback";

const FormTextInput = props => {
  return (
    <FormGroup controlId={props.fieldId}>
      <Form.Label>{props.labelText}</Form.Label>
      <Form.Control
        type={props.inputType}
        value={props.value}
        onChange={e => props.onInputChanged({...e, field: props.fieldName})}
        isInvalid={props.errorText !== ''} />
      <ErrorFeedback error={{message: props.errorText}} />
    </FormGroup>
  );
};

FormTextInput.propTypes = {
  fieldName: PropTypes.string.isRequired,
  onInputChanged: PropTypes.func.isRequired,
  fieldId: PropTypes.string,
  inputType: PropTypes.string,
  labelText: PropTypes.string,
  value: PropTypes.string,
  errorText: PropTypes.string
};

FormTextInput.defaultProps = {
  fieldId: 'txtCtrl',
  inputType: 'text',
  labelText: '',
  value: '',
  errorText: ''
};

export default FormTextInput;
