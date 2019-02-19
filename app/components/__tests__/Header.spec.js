import React from 'react';
import {shallow} from 'enzyme';
import {Link} from 'react-router-dom';

import Header from '../Header';

describe('Header component should', () => {
  test('render correctly', () => {
    const header = shallow(<Header/>);
    expect(header.find(Link).length).toBe(4);
  });
});
