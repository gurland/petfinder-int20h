import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Navbar, GoogleMap } from './components';
import { Homepage, CreateAdPage, ADPage, SearchResults } from './pages';
import { links } from './utils/constants';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path={links.homepage} exact>
          <Homepage />
        </Route>
        <Route path={links.searchResults}>
          <SearchResults />
        </Route>
        <Route path={links.ad}>
          <ADPage />
        </Route>
        <Route path={links.map}>
          <GoogleMap />
        </Route>
        <Route path={links.createAdLost}>
          <CreateAdPage isLost={true} />
        </Route>
        <Route path={links.createAdFound}>
          <CreateAdPage isLost={false} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
