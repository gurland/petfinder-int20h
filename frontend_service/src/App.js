import React, { useCallback, useContext, useEffect, useState } from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { Loader } from 'semantic-ui-react';
import { Navbar, Chat } from './components';
import { Homepage, CreateAdPage, ADPage, SearchResults, ProfilePage, Auth } from './pages';
import { links } from './utils/constants';
import { getChats, testToken } from './utils/api/requests';
import { actions, store } from './utils/store';

function App() {
  const { state, dispatch } = useContext(store);
  const [loading, setLoading] = useState(true);

  const setAuthorized = useCallback((authorized) => dispatch({ type: actions.SET_AUTHORIZED, payload: authorized }), [
    dispatch,
  ]);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      setAuthorized(false);
      setLoading(false);
    } else {
      (async () => {
        const { status } = await testToken(token);
        if (status === 200) {
          setAuthorized(true);
        } else {
          setAuthorized(false);
        }
        setLoading(false);
      })();
    }
  }, [setAuthorized]);

  return loading ? (
    <div className="app-main" style={{ height: '100%' }}>
      <div className="main-content">
        <Loader active inline="centered" size="massive" inverted>
          Завантаження...
        </Loader>
      </div>
    </div>
  ) : (
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
            <Route path={links.account}>
              <ProfilePage />
            </Route>
            {state.authorized && (
              <>
                <Route path={links.createAdLost}>
                  <CreateAdPage isLost={true} />
                </Route>
                <Route path={links.createAdFound}>
                  <CreateAdPage isLost={false} />
                </Route>
              </>
            )}
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
