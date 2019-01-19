import React from 'react';
import {shallow} from 'enzyme';
import DatePicker from '../DatePicker';

describe('DatePicker functionality', () => {
  test('DatePicker renders without crashing', () => {
    const datePicker = shallow(<DatePicker/>);
    expect(datePicker.length).toEqual(1);
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
