import React from 'react';
import {shallow} from 'enzyme';

import YearDropdown from '../YearDropdown';

describe('YearDropdown component should', () => {
  test('render correctly', () => {
    const yearDropdown = shallow(<YearDropdown startYear={2000} numYears={10}/>);
    expect(yearDropdown.find('select').length).toBe(1);
  });

  test('render the correct number of years', () => {
    const yearDropdown = shallow(<YearDropdown startYear={2000} numYears={5}/>);
    expect(yearDropdown.find('option').length).toBe(5);
  });

  test.each([
      [0, 2019],
      [1, 2018],
      [2, 2017],
      [3, 2016],
      [4, 2015],
    ])('render the years in order: at %i index, year %i', (yearItemIndex, expectedYear) => {
      const yearDropDown = shallow(<YearDropdown startYear={2015} numYears={5}/>);
      expect(yearDropDown.find('select').childAt(yearItemIndex).prop('value')).toBe(expectedYear);
  });
});
