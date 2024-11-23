import React from 'react';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '80vh',
};

const defaultCenter = {
  lat: 37.7749, // Default latitude (San Francisco)
  lng: -122.4194, // Default longitude (San Francisco)
};

const GoogleMapComponent = ({ center }) => {
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={12}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;