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
});
