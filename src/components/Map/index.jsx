import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.js';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';

export const Map = ({ address }) => {
    const [map, setMap] = useState(null);

    useEffect(() => {
        const mapInstance = L.map('map', {
            center: [0, 0],
            zoom: 13,
            layers: [
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
                }),
            ],
        });
        setMap(mapInstance);

        return () => {
            if (mapInstance) {
                mapInstance.remove();
            }
        };
    }, []);

    useEffect(() => {
        if (map) {
            const geocoder = L.Control.Geocoder.nominatim();
            geocoder.geocode(address, results => {
                const location = { lat: -8.278541, lng: -35.978294 };
                if (location) {
                    map.setView(location, 13);
                    L.marker(location).addTo(map);
                }
            });
        }
    }, [address, map]);

    return <div id="map" style={{ width: '100%', height: 210, marginTop: '1rem', borderRadius: '16px' }} />;
};