import React from 'react';
import {shallow} from 'enzyme';

import DateDropdown from '../DateOfTheMonthDropdown';

describe('DateOfTheMonthDropdown component should', () => {
  test('render correctly', () => {
    const dateDropdown = shallow(<DateDropdown monthIndex={2} year={2019}/>);
    expect(dateDropdown.find('select').length).toBe(1);
  });
  describe('render the dates for months correctly', () => {
    test.each([
      [0, 31],
      [1, 28],
      [2, 31]
    ])('number of days for month: $monthIndex should be $expectedNumDays', (monthIndex, expectedNumDays) => {
      const dateDropdown = shallow(<DateDropdown monthIndex={monthIndex} year={2018}/>);
      expect(dateDropdown.find('select').children().length).toBe(expectedNumDays);
    });
  });
});
