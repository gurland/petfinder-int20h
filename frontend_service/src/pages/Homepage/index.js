import React, { useState } from 'react';
import './style.scss';

import { GoogleMap } from '../../components';

import { Input, Button } from 'semantic-ui-react';
import { useMarker } from '../../utils/hooks';
import { links } from '../../utils/constants';
import { useHistory } from 'react-router-dom';

function Homepage() {
  const { setCircleRadius, setMarkerPos, circleRadius, mapRef, mapsRef, markerPos } = useMarker();
  const onMapClick = ({ lng, lat }) => setMarkerPos({ lng, lat });
  const [query, setQuery] = useState('');
  const history = useHistory();

  const canSearch = markerPos?.lng && markerPos?.lat && circleRadius;

  const searchUrl =
    canSearch && `${links.searchResults}?q=${query}&lng=${markerPos.lng}&lat=${markerPos.lat}&radius=${circleRadius}`;

  return (
    <>
      <div className="inputs-wrap">
        <div className="search-wrap">
          <Input placeholder="Search" onChange={(e) => setQuery(e.target.value)} value={query} />
          <Button circular positive icon="search" onClick={() => canSearch && history.push(searchUrl)} />
        </div>
        <div className="range-select-wrap">
          <h3 htmlFor="circle-radius" class="radius-header">
            Радіус області пошуку: {circleRadius / 1000} км
          </h3>
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
    </>
  );
}

export default Homepage;
