import React from 'react';

import Header from './components/Header';
import Main from './components/Main';

const App = () => (
  <div>
    <Header/>
    <div className="container-fluid">
      <Main/>
    </div>
  </div>
);

export default App;
