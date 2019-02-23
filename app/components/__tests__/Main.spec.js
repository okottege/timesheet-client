import React from 'react';
import {mount} from 'enzyme';
import {MemoryRouter} from "react-router-dom";

import Home from '../Home';
import About from '../About';
import App from '../../App';
import NotFound from '../NotFound';
import LoginForm from '../user/LoginForm';

describe('Main component should render the correct component when', () => {
  test.each([
    ['/', Home],
    ['/about', About],
    ['/login', LoginForm],
    ['/random-route', NotFound]
  ])('route is %p', (route, component) => {
    const app = mount(
      <MemoryRouter initialEntries={[route]}>
        <App />
      </MemoryRouter>
    );
    expect(app.find(component)).toHaveLength(1);
  });
});
