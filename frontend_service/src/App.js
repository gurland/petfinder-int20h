import React from 'react';
import './App.scss';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Navbar, GoogleMap } from './components';
import { Homepage } from './pages';
import { links } from './utils/constants';

function App() {
  return (
    <Router>
      <Navbar position={'top'} />
      <Switch>
        <Route path={links.homepage} exact>
          <Homepage />
        </Route>
        <Route path={links.map}>
          <GoogleMap />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
