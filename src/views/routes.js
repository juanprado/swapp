import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import Dashboard from './pages/dashboard';
import Feed from './pages/feed';

class Routes extends Component {
  constructor(props) {
    super(props);

    this.previousLocation = props.location;
  }

  render() {
    const { location } = this.props;

    return (
      <React.Fragment>
        <Switch location={location}>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/feed" component={Feed} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Routes;
