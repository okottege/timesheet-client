import React from 'react';
import {mount} from 'enzyme';
import {MemoryRouter} from "react-router-dom";

import Home from '../Home';
import About from '../About';
import App from '../../App';
import NotFound from '../NotFound';

describe('Main component should', () => {
  test.each([
    ['/', Home],
    ['/about', About],
    ['/random-route', NotFound]
  ])('render correct component when route is %p', (route, component) => {
    const app = mount(
      <MemoryRouter initialEntries={[route]}>
        <App />
      </MemoryRouter>
    );
    expect(app.find(component)).toHaveLength(1);
  });
});
