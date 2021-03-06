import React from 'react';
import {shallow} from 'enzyme';

import DateDropdown from '../DateDropdown';
import DropdownList from '../common/DropdownList';

describe('DateDropdown component should', () => {
  test('render correctly', () => {
    const dateDropdown = shallow(<DateDropdown monthIndex={2} year={2019}/>);
    expect(dateDropdown.find(DropdownList).length).toBe(1);
  });

  describe('render the dates for months for a year (2018) correctly', () => {
    test.each([
      [0, 31], // January
      [1, 28], // February
      [2, 31], // March
      [3, 30], // April
      [4, 31], // May
      [5, 30], // June
      [6, 31], // July
      [7, 31], // August
      [8, 30], // September
      [9, 31], // October
      [10, 30], // November
      [11, 31], // December
    ])('number of days for month at index %i should be %i', (monthIndex, expectedNumDays) => {
      const dateDropdown = shallow(<DateDropdown monthIndex={monthIndex} year={2018}/>);
      const dropdownList = dateDropdown.find(DropdownList);

      expect(dropdownList.prop('items').length).toBe(expectedNumDays);
    });
  });

  describe("render the dates for February correctly", () => {
    test.each([
      [2012, 29],
      [2006, 28],
      [2000, 29],
      [1990, 28],
    ])('for year %i expect %i days in February', (year, expectedDays) => {
      const dateDropdown = shallow(<DateDropdown monthIndex={1} year={year}/>);
      expect(dateDropdown.find(DropdownList).prop('items').length).toBe(expectedDays);
    });
  });

  test('display the selected date of the month correctly', () => {
    const dateDropdown = shallow(<DateDropdown monthIndex={0} year={2012} selectedDate={20}/>);
    expect(dateDropdown.find(DropdownList).prop('selectedItem')).toBe('20');
  });

  test('invoke onSelectedDate handler upon date selection with selected date', () => {
    const onChange = jest.fn();
    const dateDropdown = shallow(<DateDropdown monthIndex={1} year={2018} onDateSelected={onChange}/>);
    dateDropdown.find(DropdownList).prop('onItemSelected')('2');

    expect(onChange).toHaveBeenCalledWith(2);
  });

  test('not try to invoke onDateSelected handler if its not supplied', () => {
    const dateDropdown = shallow(<DateDropdown monthIndex={1} year={2018} />);
    dateDropdown.find(DropdownList).prop('onItemSelected')('10');
    expect(dateDropdown.length).toBe(1);
  });
});
