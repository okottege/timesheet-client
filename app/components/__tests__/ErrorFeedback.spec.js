import React from 'react';
import {shallow} from 'enzyme';
import {Form} from 'react-bootstrap';

import ErrorFeedback from '../ErrorFeedback';

describe('ErrorFeedback component should', () => {
  test('render correctly when errors are supplied', () => {
    const errFeedback = shallow(
      <ErrorFeedback errors={[{field: 'fld', message: 'error msg'}]} field="fld"/>);
    const feedback = errFeedback.find(Form.Control.Feedback);

    expect(feedback.prop('type')).toBe('invalid');
    expect(feedback.at(0).childAt(0).text()).toEqual('error msg');
  });
});
