import React from 'react';
import PropTypes from 'prop-types';

import GoogleMapReact from 'google-map-react';

function GoogleMap({ onClick, mapRef, mapsRef, onMapLoad, center }) {
  const kyivCenter = { lat: 50.450001, lng: 30.523333 };
  const mapCenter = { lat: center.lat || kyivCenter.lat, lng: center.lng || kyivCenter.lng };

  const createMapOptions = () => ({
    fullscreenControl: false,
  });

  return (
    <GoogleMapReact
      options={createMapOptions}
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_TOKEN, libraries: 'places' }}
      defaultCenter={mapCenter}
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
  center: PropTypes.shape({ lng: PropTypes.number, lat: PropTypes.number }),
};

GoogleMap.defaultProps = {
  onClick: () => {},
  onMapLoad: () => {},
  mapRef: null,
  mapsRef: null,
  center: {},
};

export default GoogleMap;
