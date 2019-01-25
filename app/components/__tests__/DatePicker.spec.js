import React from 'react';
import {shallow} from 'enzyme';

import DatePicker from '../DatePicker';
import DateDropdown from '../DateDropdown';
import MonthDropdown from '../MonthDropdown';
import YearDropdown from '../YearDropdown';

describe('DatePicker should', () => {
  describe('render correctly', () => {
    const datePicker = shallow(<DatePicker onDateSelected={jest.fn()}/>);

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
      const yearDropdown = datePicker.find(YearDropdown);
      expect(yearDropdown.prop('startYear')).toBe(1920);
      expect(yearDropdown.prop('numYears')).toBe(100);
    });
  });

  test('render title', () =>{
    const datePicker = shallow(<DatePicker title='Date of birth' onDateSelected={jest.fn()}/>);
    expect(datePicker.find('span').text()).toBe('Date of birth');
  });

  test('NOT render title if its not supplied', () => {
    const datePicker = shallow(<DatePicker title='' onDateSelected={jest.fn()}/>);
    expect(datePicker.find('span').length).toEqual(0);
  });

  describe('render selected date correctly', () => {
    test('render current date as default when NO selectedDate is supplied', () => {
      const currentDate = new Date();
      const datePicker = shallow(<DatePicker onDateSelected={jest.fn()}/>);
      expect(datePicker.find(DateDropdown).prop('selectedDate')).toBe(currentDate.getDate());
      expect(datePicker.find(MonthDropdown).prop('selectedMonth')).toBe(currentDate.getMonth());
      expect(datePicker.find(YearDropdown).prop('selectedYear')).toBe(currentDate.getFullYear());
    });
    test('render the selectedDate when its supplied', () => {
      const date = new Date(2012, 1, 27);
      const datePicker = shallow(<DatePicker selectedDate={date} onDateSelected={jest.fn()}/>);
      expect(datePicker.find(DateDropdown).prop('selectedDate')).toBe(27);
      expect(datePicker.find(MonthDropdown).prop('selectedMonth')).toBe(1);
      expect(datePicker.find(YearDropdown).prop('selectedYear')).toBe(2012);
    });
  });

  describe('update selected date based on interactions', () => {
    let date, onDateSelected, datePicker;

    beforeEach(() => {
      date = new Date(2012, 1, 27);
      onDateSelected = jest.fn();
      datePicker = shallow(<DatePicker selectedDate={date} onDateSelected={onDateSelected}/>);
    });

    test('selected date is updated when date dropdown selection is made', () => {
      datePicker.find(DateDropdown).prop('onDateSelected')(12);
      expect(onDateSelected).toHaveBeenCalledWith(new Date(2012, 1, 12));
    });
    test("selected date's month is updated when month dropdown selection is made", () => {
      datePicker.find(MonthDropdown).prop('onMonthSelected')(4);
      expect(onDateSelected).toHaveBeenCalledWith(new Date(2012, 4, 27));
    });
    test("selected date's year is updated when year dropdown selection is made", () => {
      datePicker.find(YearDropdown).prop('onYearSelected')(2000);
      expect(onDateSelected).toHaveBeenCalledWith(new Date(2000, 1, 27));
    });
  });
});
