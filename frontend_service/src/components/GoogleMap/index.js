import React from 'react';
import PropTypes from 'prop-types';

import GoogleMapReact from 'google-map-react';

function GoogleMap({ circleRadius, circleCenter }) {
  const kyivCenter = { lat: 50.450001, lng: 30.523333 };

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_TOKEN, libraries: 'places' }}
      defaultCenter={kyivCenter}
      defaultZoom={10}
      onGoogleApiLoaded={({ map, maps }) =>
        new maps.Circle({
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#FF0000',
          fillOpacity: 0.3,
          map,
          center: kyivCenter,
          radius: 275,
        })
      }
    />
  );
}

GoogleMap.propTypes = {};

export default GoogleMap;
