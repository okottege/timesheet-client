import React from 'react';
import {shallow} from 'enzyme';

import About from '../About';

describe('About component should', () => {
  test('render correctly', () => {
    const about = shallow(<About/>);
    expect(about.length).toBe(1);
  });
});
