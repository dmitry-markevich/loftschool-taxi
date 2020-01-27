import React, { useEffect, useRef } from 'react';
import MapboxGl from 'mapbox-gl';
import '../../css/mapbox-gl.css';

const MapPage = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    MapboxGl.accessToken =
      'pk.eyJ1IjoibWR2ZG9wIiwiYSI6ImNrNXZpMnB0eDBxYnUza28wcHFmMXZnb2sifQ.dgrZA9kxtXmMQFpke8Li_Q';
    new MapboxGl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [-74.5, 40],
      zoom: 9
    });
  }, []);

  return (
    <div className="tx-map-container">
      <div ref={mapContainer}></div>
    </div>
  );
};

export default MapPage;
