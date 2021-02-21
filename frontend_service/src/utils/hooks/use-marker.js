import { useEffect, useRef, useState } from 'react';

export default function useMarker(noCircle = false) {
  const mapRef = useRef(null);
  const mapsRef = useRef(null);

  const [circleRadius, setCircleRadius] = useState(100);
  const [circle, setCircle] = useState(null);
  const [markerPos, setMarkerPos] = useState(null);
  const [marker, setMarker] = useState(null);

  useEffect(() => {
    if (mapRef.current && mapsRef.current) {
      if (circle) circle.setMap(null);

      if (!noCircle) {
        setCircle(
          new mapsRef.current.Circle({
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.3,
            center: markerPos,
            map: mapRef.current,
            radius: circleRadius,
          }),
        );
      }
    }
  }, [circleRadius, markerPos, window.location.pathname]);

  useEffect(() => {
    if (mapRef.current && mapsRef.current) {
      if (marker) marker.setMap(null);

      setMarker(
        new mapsRef.current.Marker({
          position: markerPos,
          map: mapRef.current,
        }),
      );
    }
  }, [markerPos]);

  return { setCircleRadius, setMarkerPos, circleRadius, markerPos, mapRef, mapsRef };
}
