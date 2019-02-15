import React from 'react';
import {shallow} from 'enzyme';
import {Form} from 'react-bootstrap';

import ErrorFeedback from '../ErrorFeedback';

describe('ErrorFeedback component should', () => {
  test('render correctly when errors are supplied', () => {
    const errFeedback = shallow(
      <ErrorFeedback error={{field: 'fld', message: 'error msg'}}/>);
    const feedback = errFeedback.find(Form.Control.Feedback);

    expect(feedback.prop('type')).toBe('invalid');
    expect(feedback.at(0).childAt(0).text()).toEqual('error msg');
  });
  test.each([
    {}, {message: ''}
  ])('not render Feedback component if error prop is %p', error => {
    const errFeedback = shallow(<ErrorFeedback error={error}/>);
    expect(errFeedback.find(Form.Control.Feedback).exists()).toBe(false);
  });
});
