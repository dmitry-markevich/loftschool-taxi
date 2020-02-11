import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadAddressesMap, getRouteMap } from '../../modules/map';

import MapboxGl from 'mapbox-gl';
import './mapbox-gl.css';

import { Button, Select, InputLabel, MenuItem } from '@material-ui/core';

const MapPage = () => {
  const mapContainer = useRef(null);
  const dispatch = useDispatch();
  const addresses = useSelector(state => state.map.addresses);
  const route = useSelector(state => state.map.route);
  const error = useSelector(state => state.map.mapError);
  const hasCard = useSelector(
    state => state.user.card.id !== undefined && state.user.card.id !== ''
  );
  const [map, setMap] = useState(null);

  useEffect(() => {
    // Load Addresses
    dispatch(loadAddressesMap());

    // Map
    MapboxGl.accessToken =
      'pk.eyJ1IjoibWR2ZG9wIiwiYSI6ImNrNXZpMnB0eDBxYnUza28wcHFmMXZnb2sifQ.dgrZA9kxtXmMQFpke8Li_Q';

    const map = new MapboxGl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [30.315868, 59.939095],
      zoom: 9
    });

    map.on('load', () => {
      setMap(map);
    });
  }, []);

  useEffect(() => {
    if (map && route.length > 0) {
      map.flyTo({
        center: route[0],
        zoom: 15
      });

      const layer = map.getLayer('route');

      if (layer) {
        map.getSource('route').setData({
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: route
          }
        });
      } else {
        map.addSource('route', {
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: route
            }
          }
        });

        map.addLayer({
          id: 'route',
          type: 'line',
          source: 'route',
          layout: {
            'line-join': 'round',
            'line-cap': 'round'
          },
          paint: {
            'line-color': '#ffc617',
            'line-width': 8
          }
        });
      }
    }
  }, [map, route]);

  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [addressError, setAddressError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (!address1 || !address2) {
      setAddressError('Укажите обе точки маршрута');
    } else if (address1 === address2) {
      setAddressError('Точки маршрута не должны совпадать');
    } else {
      setAddressError('');
      dispatch(getRouteMap({ address1, address2 }));
    }
  };

  const handleChange = e => {
    switch (e.target.name) {
      case 'address1':
        setAddress1(e.target.value);
        break;
      case 'address2':
        setAddress2(e.target.value);
        break;
      default:
    }
  };

  return (
    <>
      <div className="tx-map-container">
        <div ref={mapContainer}></div>
      </div>
      <div className="tx-route-editor tx-box">
        {hasCard ? (
          <form onSubmit={handleSubmit} className="tx-form">
            <div className="tx-line">
              <InputLabel id="route-from-label">Откуда:</InputLabel>
              <Select
                name="address1"
                value={address1}
                onChange={handleChange}
                labelId="route-from-label"
              >
                {addresses
                  .filter(address => address !== address2)
                  .map((address, i) => (
                    <MenuItem key={i} value={address}>
                      {address}
                    </MenuItem>
                  ))}
              </Select>
            </div>
            <div className="tx-line">
              <InputLabel id="route-to-label">Куда:</InputLabel>
              <Select
                name="address2"
                value={address2}
                onChange={handleChange}
                labelId="route-to-label"
              >
                {addresses
                  .filter(address => address !== address1)
                  .map((address, i) => (
                    <MenuItem key={i} value={address}>
                      {address}
                    </MenuItem>
                  ))}
              </Select>
            </div>
            <div className="tx-line">
              <Button type="submit">Вызвать такси</Button>
            </div>
            <div className="tx-line">
              <span className="tx-error">{addressError || error}</span>
            </div>
          </form>
        ) : (
          <p>
            Для заказа такси необходимо заполнить{' '}
            <Link to="/profile" className="tx-link">
              Платежные данные
            </Link>
          </p>
        )}
      </div>
    </>
  );
};

export default MapPage;
