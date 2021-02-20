import React from 'react';
import PropTypes from 'prop-types';

import { Menu } from 'semantic-ui-react';
import './style.scss';

function Navbar(props) {
  return (
    <span className="navbar">
      <Menu fluid widths={3}>
        <Menu.Item>
          <div>Name</div>
        </Menu.Item>
        <Menu.Item>
          <div>Block</div>
        </Menu.Item>
        <Menu.Item position="right">
          <div>Account</div>
        </Menu.Item>
      </Menu>
    </span>
  );
}

export default Navbar;
