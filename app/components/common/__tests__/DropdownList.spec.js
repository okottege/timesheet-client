import React from 'react';
import {shallow} from 'enzyme';
import {DropdownButton, MenuItem} from "react-bootstrap";

import DropdownList from '../DropdownList';

describe('DropdownList component should', () =>{
  const items = [{name: 'January', value: "0"}, {name: 'February', value: "1"}, {name: 'March', value: "2"}];

  test('render the top level components correctly', () => {
    const dropdownList = shallow(<DropdownList/>);
    expect(dropdownList.find(DropdownButton).exists()).toEqual(true);
    expect(dropdownList.find(DropdownButton).prop('title')).toEqual('Select...');
  });

  test('render the supplied items correctly', () => {
    const dropDownList = shallow(<DropdownList items={items}/>);
    const menuItems = dropDownList.find(MenuItem);

    expect(menuItems.length).toEqual(items.length);
    items.forEach((item, i) => {
      expect(menuItems.at(i).prop('eventKey')).toEqual(item.value);
      expect(menuItems.at(i).childAt(0).text()).toEqual(item.name);
      expect(menuItems.at(i).prop('onSelect')).toBeDefined();
    });
  });

  test('use the selectedItem as the title of DropdownButton', () => {
    const dropdownList = shallow(<DropdownList items={items} selectedItem="1"/>);
    expect(dropdownList.find(DropdownButton).prop('title')).toEqual('1');
  });

  test('onItemSelected handler is invoked with correct arguments', () => {
    const onItemSelected = jest.fn();
    const dropDownList = shallow(
        <DropdownList items={items} onItemSelected={onItemSelected} onSelect={onItemSelected}/>
      );
    dropDownList.find(MenuItem).at(1).prop('onSelect')('1');

    expect(onItemSelected).toHaveBeenCalledWith('1');
  });
});
