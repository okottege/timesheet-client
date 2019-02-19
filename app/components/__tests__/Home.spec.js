import React from 'react';
import {shallow} from 'enzyme';

import Home from '../Home';

describe('Home component should', () => {
  test('render correctly', () => {
    const home = shallow(<Home/>);
    expect(home.length).toBe(1);
  });
});
