import React from 'react';
import {Switch, Route} from "react-router-dom";

import Home from './Home';
import About from './About';
import NotFound from './NotFound';
import LoginForm from './user/LoginForm';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={LoginForm} />
      <Route component={NotFound} />
    </Switch>
  </main>
);

export default Main;
