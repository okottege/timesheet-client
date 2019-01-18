import React from 'react';
import {shallow} from 'enzyme';
import DatePicker from '../DatePicker';


describe('DatePicker functionality', () => {
  test('DatePicker renders without crashing', () => {
    const datePicker = shallow(<DatePicker/>);
    expect(datePicker.length).toEqual(1);
  });
});
