import React from 'react';
import {shallow} from 'enzyme';

import MonthDropdown from '../MonthDropdown';
import DropdownList from "../common/DropdownList";

describe('MonthDropdown should', () => {
  test('render correctly', () => {
    const ddMonth = shallow(<MonthDropdown/>);
    expect(ddMonth.find(DropdownList).length).toBe(1);
  });

  describe('render the months in correct order', () => {
    const monthDropdown = shallow(<MonthDropdown/>);
    const monthItems = monthDropdown.find(DropdownList).prop('items');

    test('There should be 12 months in total', () => {
      expect(monthItems.length).toBe(12);
    });

    test.each([
      ['0', 'January'],
      ['1', 'February'],
      ['2', 'March'],
      ['3', 'April'],
      ['4', 'May'],
      ['5', 'June'],
      ['6', 'July'],
      ['7', 'August'],
      ['8', 'September'],
      ['9', 'October'],
      ['10', 'November'],
      ['11', 'December'],
    ])('month at index %i should be %p', (index, expectedMonthName) => {
      expect(monthItems[index].name).toBe(expectedMonthName);
      expect(monthItems[index].value).toBe(index);
    });
  });

  test("render no selected month when it is NOT supplied", () => {
    const monthDropdown = shallow(<MonthDropdown/>);
    expect(monthDropdown.prop('selectedMonth')).not.toBeDefined();
  });

  test.each([0, 1, 10])
    ('render the selected month correctly when selected month index is: %i', (selectedMonthIndex) => {
    const monthDropdown = shallow(<MonthDropdown selectedMonth={selectedMonthIndex}/>);
    expect(monthDropdown.find(DropdownList).prop('selectedItem')).toEqual(selectedMonthIndex.toString());
  });

  test('invoke onMonthSelected when a month is selected', () => {
    const onMonthSelected = jest.fn();
    const monthDropdown = shallow(<MonthDropdown onMonthSelected={onMonthSelected}/>);
    monthDropdown.find(DropdownList).prop('onItemSelected')('2');

    expect(onMonthSelected).toHaveBeenCalledWith(2);
  });

  test('invoke onMonthSelected ONLY when a handler is supplied', () => {
    const onMonthSelected = jest.fn();
    const monthDropdown = shallow(<MonthDropdown />);
    monthDropdown.find(DropdownList).prop('onItemSelected')('2');

    expect(onMonthSelected).not.toHaveBeenCalled();
  });
});
