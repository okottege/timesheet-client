import React from 'react';
import {shallow} from 'enzyme';

import MonthDropdown from '../MonthDropdown';

describe('MonthDropdown functionality', () => {
  test('MonthDropdown should render without issues', () => {
    const ddMonth = shallow(<MonthDropdown/>);
    expect(ddMonth.length).toEqual(1);
  });

  describe('Render the months in correct order', () => {
    const monthDropdown = shallow(<MonthDropdown/>);
    const selectList = monthDropdown.find('select');

    test('There should be 12 months in total', () => {
      expect(selectList.children().length).toBe(12);
    });

    test.each([
      [0, 'January'],
      [1, 'February'],
      [2, 'March'],
      [3, 'April'],
      [4, 'May'],
      [5, 'June'],
      [6, 'July'],
      [7, 'August'],
      [8, 'September'],
      [9, 'October'],
      [10, 'November'],
      [11, 'December'],
    ])('item at index %i should be %p', (index, expectedMonthName) => {
      expect(selectList.childAt(index).text()).toBe(expectedMonthName);
      expect(selectList.childAt(index).prop('value')).toBe(index);
    });
  });

  test('Render no option selected when selected month is NOT supplied', () => {
    const monthDropdown = shallow(<MonthDropdown/>);
    expect(monthDropdown.find('select').prop('value')).toBe(undefined);
  });

  test('Render the selected month correctly when selected month is supplied', () => {
    const monthDropdown = shallow(<MonthDropdown selectedMonth={5}/>);
    expect(monthDropdown.find('select').prop('value')).toEqual(5);
  });

  test('invoke onMonthSelected when an item is selected from the list', () => {
    const onMonthSelected = jest.fn();
    const monthDropdown = shallow(<MonthDropdown onMonthSelected={onMonthSelected}/>);
    monthDropdown.find('select').simulate('change', {target: {value: 2}});

    expect(onMonthSelected).toHaveBeenCalledWith(2);
  });

  test('invoke onMonthSelected ONLY when a handler is supplied', () => {
    const monthDropdown = shallow(<MonthDropdown />);
    monthDropdown.find('select').simulate('change', {target: {value: 2}});
    expect(monthDropdown.length).toBe(1);
  });
});
