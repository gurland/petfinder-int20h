import React, { useCallback, useContext, useEffect } from 'react';
import './style.scss';

import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { links } from '../../utils/constants';
import { store, actions } from '../../utils/store';

function Navbar(props) {
  const { state, dispatch } = useContext(store);
  const setCurrentPage = useCallback((pathname) => dispatch({ type: actions.SET_CURRENT_PAGE, payload: pathname }), [
    dispatch,
  ]);

  const isActive = (pathname) => (state.currentPage === pathname ? 'active' : '');
  const onLinkClick = (pathname) => () => setCurrentPage(pathname);

  useEffect(() => {
    if (!state.currentPage) {
      setCurrentPage(window.location.pathname);
    }
  }, [setCurrentPage, state.currentPage]);

  return (
    <span className="navbar">
      <Menu fluid>
        <Menu.Item position="left">
          <div className="logo">Pet Finder</div>
        </Menu.Item>
        <Menu.Item>
          <div className="tabs-wrap">
            <Link to={{ pathname: links.homepage }} onClick={onLinkClick(links.homepage)}>
              <div className={`tab-item ${isActive(links.homepage)}`}>Пошук</div>
            </Link>
            <Link to={{ pathname: links.createAdLost }} onClick={onLinkClick(links.createAdLost)}>
              <div className={`tab-item ${isActive(links.createAdLost)}`}>Загубив</div>
            </Link>
            <Link to={{ pathname: links.createAdFound }} onClick={onLinkClick(links.createAdFound)}>
              <div className={`tab-item ${isActive(links.createAdFound)}`}>Знайшов</div>
            </Link>
          </div>
        </Menu.Item>
        <Menu.Item position="right">
          <Link className="nav-link user-action-wrap" to={links.account}>
            Account
          </Link>
        </Menu.Item>
      </Menu>
    </span>
  );
}

export default Navbar;
