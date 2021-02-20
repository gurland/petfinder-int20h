import React, { useEffect } from 'react';
import './style.scss';

import { GoogleMap } from '../../components';

import { Input } from 'semantic-ui-react';

function Homepage() {
  return (
    <div className="main-content">
      <div className="inputs-wrap">
        <Input icon="search" iconPosition="left" placeholder="Search" />
        <div className="map">
          <GoogleMap />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
