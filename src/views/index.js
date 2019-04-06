import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Routes from './routes';
import Header from './components/header';

const Index = () => (
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <Route component={Routes} />
    </React.Fragment>
  </BrowserRouter>
);

ReactDOM.render(<Index />, document.getElementById('index'));
