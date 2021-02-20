import React from 'react';
import './style.scss';

import { Menu } from 'semantic-ui-react';

function Navbar(props) {
  return (
    <span className="navbar">
      <Menu fluid widths={2}>
        <Menu.Item position="left">
          <div className="logo">Pet Finder</div>
        </Menu.Item>
        <Menu.Item position="right">
          <div className="user-action-wrap">Account</div>
        </Menu.Item>
      </Menu>
    </span>
  );
}

export default Navbar;
