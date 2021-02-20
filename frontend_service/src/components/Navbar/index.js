import React from 'react';
import './style.scss';

import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { links } from '../../utils/constants';

function Navbar(props) {
  return (
    <span className="navbar">
      <Menu fluid>
        <Menu.Item position="left">
          <div className="logo">Pet Finder</div>
        </Menu.Item>
        <Menu.Item>
          <div className="tabs-wrap">
            <Link to={{ pathname: links.homepage }}>
              <div className="tab-item active">Пошук</div>
            </Link>
            <Link to={{ pathname: links.createAd, isLost: true }}>
              <div className="tab-item">Загубив</div>
            </Link>
            <Link to={{ pathname: links.createAd, isLost: false }}>
              <div className={'tab-item'}>Знайшов</div>
            </Link>
          </div>
        </Menu.Item>
        <Menu.Item position="right">
          <div className="user-action-wrap">Account</div>
        </Menu.Item>
      </Menu>
    </span>
  );
}

export default Navbar;
