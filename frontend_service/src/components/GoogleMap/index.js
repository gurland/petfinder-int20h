import React from 'react';
import PropTypes from 'prop-types';

import GoogleMapReact from 'google-map-react';

function GoogleMap({ onClick, mapRef, mapsRef, onMapLoad }) {
  const kyivCenter = { lat: 50.450001, lng: 30.523333 };

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_TOKEN, libraries: 'places' }}
      defaultCenter={kyivCenter}
      defaultZoom={10}
      onClick={onClick}
      onGoogleApiLoaded={({ map, maps }) => {
        if (mapRef) mapRef.current = map;
        if (mapsRef) mapsRef.current = maps;
        onMapLoad(map, maps);
      }}
    />
  );
}

GoogleMap.propTypes = {
  onClick: PropTypes.func,
  mapRef: PropTypes.object,
  mapsRef: PropTypes.object,
  onMapLoad: PropTypes.func,
};

GoogleMap.defaultProps = {
  onClick: () => {},
  onMapLoad: () => {},
  mapRef: null,
  mapsRef: null,
};

export default GoogleMap;
