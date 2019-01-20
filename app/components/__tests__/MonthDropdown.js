import React from 'react';
import {shallow} from 'enzyme';
import MonthDropdown from '../MonthDropdown';

describe('MonthDropdown functionality', () => {
  test('MonthDropdown should render without issues', () => {
    const ddMonth = shallow(<MonthDropdown/>);
    expect(ddMonth.length).toEqual(1);
  });
});
