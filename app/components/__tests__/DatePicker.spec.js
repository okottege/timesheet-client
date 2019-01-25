import React from 'react';
import {shallow} from 'enzyme';

import DatePicker from '../DatePicker';
import DateDropdown from '../DateDropdown';
import MonthDropdown from '../MonthDropdown';
import YearDropdown from '../YearDropdown';

describe('DatePicker should', () => {
  describe('render correctly', () => {
    const datePicker = shallow(<DatePicker/>);

    test('DatePicker component is rendered', () => {
      expect(datePicker.length).toEqual(1);
    });
    test('DateDropdown component is rendered', () => {
      expect(datePicker.find(DateDropdown).exists()).toBe(true);
    });
    test('MonthDropdown component is rendered', () => {
      expect(datePicker.find(MonthDropdown).exists()).toBe(true);
    });
    test('YearDropdown component is rendered', () => {
      expect(datePicker.find(YearDropdown).exists()).toBe(true);
    });
  });
  test('DatePicker renders with title', () =>{
    const datePicker = shallow(<DatePicker title='Date of birth' />);
    expect(datePicker.find('span').text()).toBe('Date of birth');
  });
  test('If no title is not specified no span element exists', () => {
    const datePicker = shallow(<DatePicker title='' />);
    expect(datePicker.find('span').length).toEqual(0);
  });
});
