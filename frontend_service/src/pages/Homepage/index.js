import React from 'react';
import './style.scss';

import { GoogleMap } from '../../components';

import { Input } from 'semantic-ui-react';
import { useMarker } from '../../utils/hooks';

function Homepage() {
  const { setCircleRadius, setMarkerPos, circleRadius, mapRef, mapsRef, markerPos } = useMarker();
  const onMapClick = ({ lng, lat }) => setMarkerPos({ lng, lat });

  return (
    <div className="main-content">
      <div className="inputs-wrap">
        <Input icon="search" iconPosition="left" placeholder="Search" />
        <div className="range-select-wrap">
          <h3 htmlFor="circle-radius" class="radius-header">Радіус області пошуку: {circleRadius / 1000} км</h3>
          <div className="range-select">
            <label htmlFor="circle-radius">100 м</label>
            <Input
              type="range"
              id="circle-radius"
              min={100}
              max={5000}
              step={100}
              value={circleRadius}
              onChange={(e, data) => setCircleRadius(() => (data.value ? parseInt(data.value, 10) : 100))}
            />
            <label htmlFor="circle-radius">5 км</label>
          </div>
        </div>
        <div className="map">
          <GoogleMap mapRef={mapRef} mapsRef={mapsRef} onClick={onMapClick} />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
