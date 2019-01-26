import React from 'react';
import {shallow} from 'enzyme';
import {DropdownButton, MenuItem} from "react-bootstrap";

import DropdownList from '../DropdownList';

describe('DropdownList component should', () =>{
  test('render correctly', () => {
    const dropdownList = shallow(<DropdownList/>);
    expect(dropdownList.find(DropdownButton).exists()).toEqual(true);
    expect(dropdownList.find(MenuItem).exists()).toEqual(true);
  });
});
