import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Routes from './routes';

const Index = () => (
  <BrowserRouter>
    <React.Fragment>
      <Route component={Routes} />
    </React.Fragment>
  </BrowserRouter>
);

ReactDOM.render(<Index />, document.getElementById('index'));
