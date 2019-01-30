import React from 'react';
import {shallow} from 'enzyme';

import YearDropdown from '../YearDropdown';
import DropdownList from '../common/DropdownList';

describe('YearDropdown component should', () => {
  describe('render correctly with:', () => {
    const yearDropdown = shallow(<YearDropdown startYear={2000} numYears={5}/>);
    const dropDownList = yearDropdown.find(DropdownList);

    test('a DropdownList control', () => {
      expect(dropDownList.exists()).toBe(true);
    });
    test('10 items supplied to the DropdownList', () => {
      expect(dropDownList.prop('items').length).toBe(5);
    });
    test.each([
      [0, 2004],
      [1, 2003],
      [2, 2002],
      [3, 2001],
      [4, 2000],
    ])('years in descending order: at index %i it has year %i', (index, expectedYear) => {
      expect(dropDownList.prop('items')[index].name).toBe(expectedYear.toString());
    });
  });

  test('selected year is rendered correctly', () => {
    const yearDropdown = shallow(<YearDropdown startYear={2000} numYears={5} selectedYear={2004}/>);
    expect(yearDropdown.find(DropdownList).prop('selectedItem')).toBe('2004');
  });

  test('triggers onYearSelected with the correct year when an Year is selected', () => {
    const onYearSelected = jest.fn();
    const yearDropdown = shallow(<YearDropdown startYear={2000} numYears={10} onYearSelected={onYearSelected}/>);
    yearDropdown.find(DropdownList).prop('onItemSelected')('2000');
    expect(onYearSelected).toHaveBeenCalledWith(2000);
  });

  test('NOT trigger onYearSelected when the event handler is not supplied', () => {
    const onYearSelected = jest.fn();
    const yearDropdown = shallow(<YearDropdown startYear={2000} numYears={20}/>);
    yearDropdown.find(DropdownList).prop('onItemSelected')('2000');
    expect(onYearSelected).not.toHaveBeenCalled();
  });
});
