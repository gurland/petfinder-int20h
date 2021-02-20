import React, { useEffect } from 'react';
import './style.scss';

import { Input } from 'semantic-ui-react';

function Homepage() {
  return (
    <div className="main-content">
      <div className="inputs-wrap">
        <Input placeholder="Search" />
        <div className="map">Map</div>
      </div>
    </div>
  );
}

export default Homepage;
