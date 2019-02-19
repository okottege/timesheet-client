import React from 'react';
import {shallow} from 'enzyme';

import NotFound from '../NotFound';

describe('NotFound component should', () => {
  test('render correctly', () => {
    const notFound = shallow(<NotFound/>);
    expect(notFound.length).toBe(1);
  })
});
