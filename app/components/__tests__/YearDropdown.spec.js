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
      const yearOption = yearDropDown.find('select').childAt(yearItemIndex);

      expect(yearOption.prop('value')).toBe(expectedYear);
      expect(yearOption.text()).toBe(expectedYear.toString());
  });

  test('selected year is rendered correctly', () => {
    const yearDropdown = shallow(<YearDropdown startYear={2000} numYears={5} selectedYear={2004}/>);
    expect(yearDropdown.find('select').prop('value')).toBe(2004);
  });

  test('triggers onYearSelected with the correct year when an Year is selected', () => {
    const onYearSelected = jest.fn();
    const yearDropdown = shallow(<YearDropdown startYear={2000} numYears={10} onYearSelected={onYearSelected}/>);
    yearDropdown.find('select').simulate('change', {target: {value: 2005}});
    expect(onYearSelected).toHaveBeenCalledWith(2005);
  });

  test('NOT trigger onYearSelected when the event handler is not supplied', () => {
    const yearDropdown = shallow(<YearDropdown startYear={2000} numYears={20}/>);
    yearDropdown.find('select').simulate('change', {target: {value: 2005}});
    expect(yearDropdown.length).toBe(1);
  });
});
