import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { Navbar } from './components';
import { Homepage, CreateAdPage, ADPage, SearchResults, ProfilePage, Auth } from './pages';
import { links } from './utils/constants';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app-main">
        <div className="main-content">
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
            <Route path={links.createAdLost}>
              <CreateAdPage isLost={true} />
            </Route>
            <Route path={links.createAdFound}>
              <CreateAdPage isLost={false} />
            </Route>
            <Route path={links.account}>
              <ProfilePage />
            </Route>
            <Route path={links.register}>
              <Auth action={'REGISTER'} />
            </Route>
            <Route path={links.login}>
              <Auth action={'LOGIN'} />
            </Route>
            <Route path="*">
              <Redirect to={links.homepage} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
