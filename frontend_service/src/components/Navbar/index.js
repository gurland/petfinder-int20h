import React from 'react';
import './style.scss';

import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { links } from '../../utils/constants';

function Navbar(props) {
  return (
    <span className="navbar">
      <Menu fluid widths={2}>
        <Menu.Item position="left">
          <Link className="logo" to={links.homepage}>
            Pet Finder
          </Link>
        </Menu.Item>
        <Menu.Item position="right">
          <div className="user-action-wrap">Account</div>
        </Menu.Item>
      </Menu>
    </span>
  );
}

export default Navbar;
