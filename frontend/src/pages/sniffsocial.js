import { useState, useEffect } from 'react';
import { LoadScript, GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import axios from 'axios';
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';

const mapContainerStyle = {
  width: '100%',
  height: '100vh',
};

const defaultCenter = {
  lat: 37.7749, // Default latitude (San Francisco)
  lng: -122.4194, // Default longitude (San Francisco)
};

const speciesIcons = {
  dog: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
  cat: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png',
  bird: 'https://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
  // Add more species and their corresponding icons here
};

export default function SniffSocial() {
  const [mapCenter, setMapCenter] = useState(defaultCenter);
  const [markerPositions, setMarkerPositions] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [distance, setDistance] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Mock user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    pets: [
      { name: 'Buddy', species: 'Dog', age: 3, imageUrl: 'https://via.placeholder.com/150' },
      { name: 'Whiskers', species: 'Cat', age: 2, imageUrl: 'https://via.placeholder.com/150' },
    ],
  };

  useEffect(() => {
    // Get the user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setMapCenter({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error('Error getting current location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  const handleSearch = async () => {
    setLoading(true);
    setError('');
    try {
      const requestUrl = `http://127.0.0.1:8000/nearby-pets/?address=${encodeURIComponent(searchQuery)}&radius_km=${distance}`;
      console.log('Request URL:', requestUrl); // Log the request URL
      const response = await axios.get(requestUrl);
      console.log('Response status:', response.status); // Log the response status
      const petsData = response.data;
      const positions = petsData.map(pet => ({
        lat: pet.lat,
        lng: pet.lng,
        name: pet.name,
        species: pet.species,
        age: pet.age,
        owner_email: maskEmail(pet.owner_email),
        address: maskAddress(pet.address),
        imageUrl: 'https://via.placeholder.com/150', // Placeholder image URL
      }));
      setMarkerPositions(positions);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching nearby pets:', error);
      setError('Failed to fetch nearby pets. Please try again later.');
      setLoading(false);
    }
  };

  const maskEmail = (email) => {
    const [user, domain] = email.split('@');
    const maskedUser = user.slice(0, 2) + '***' + user.slice(-1);
    return `${maskedUser}@${domain}`;
  };

  const maskAddress = (address) => {
    const parts = address.split(' ');
    if (parts.length > 2) {
      return `${parts[0]} *** ${parts.slice(-1)}`;
    }
    return address;
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-lg p-4 flex justify-between items-center">
        <div className="flex-1 flex justify-center">
          <span className="text-xl font-bold text-gray-900">SniffSocials</span>
        </div>
        <button className="btn btn-secondary">Logout</button>
      </nav>

      <div className="flex flex-1">
        {/* Left Column */}
        <div className="w-1/4 bg-white p-6 shadow-lg overflow-y-auto">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Upcoming Dates</h2>
            <div className="p-4 border rounded-lg shadow-sm bg-gray-50">
              {/* Add content for upcoming dates */}
              <p>No upcoming dates.</p>
            </div>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pet Playdates</h2>
            <div className="p-4 border rounded-lg shadow-sm bg-gray-50">
              {/* Add content for pet playdates */}
              <p>No pet playdates scheduled.</p>
            </div>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Search Nearby Pets</h2>
            <input
              type="text"
              placeholder="Enter address..."
              className="input input-bordered w-full mb-4"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <input
              type="number"
              placeholder="Distance (km)"
              className="input input-bordered w-full mb-4"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
            />
            <button className="btn btn-primary w-full" onClick={handleSearch}>
              Search
            </button>
            {error && (
              <div className="alert alert-error mt-4">
                <div className="flex-1">
                  <label>{error}</label>
                </div>
              </div>
            )}
            {loading && (
              <div className="flex items-center justify-center mt-4">
                <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Center Column */}
        <div className="flex-1 p-4">
          <LoadScript googleMapsApiKey={"AIzaSyCeyf_gkJR7zbSbcGMYzx_BZOPF1p0VWrU"}>
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={mapCenter}
              zoom={12}
            >
              {markerPositions.map((position, index) => (
                <Marker
                  key={index}
                  position={{ lat: position.lat, lng: position.lng }}
                  icon={speciesIcons[position.species.toLowerCase()] || 'https://maps.google.com/mapfiles/ms/icons/red-dot.png'} // Default icon if species not found
                  onClick={() => setSelectedMarker(position)}
                />
              ))}
              {selectedMarker && (
                <InfoWindow
                  position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
                  onCloseClick={() => setSelectedMarker(null)}
                >
                  <div className="p-2">
                    <img src={selectedMarker.imageUrl} alt={selectedMarker.name} className="w-full h-32 object-cover rounded-lg mb-2" />
                    <h3 className="text-lg font-bold">{selectedMarker.name}</h3>
                    <p>Species: {selectedMarker.species}</p>
                    <p>Age: {selectedMarker.age}</p>
                    <p>Owner: {selectedMarker.owner_email}</p>
                    <p>Address: {selectedMarker.address}</p>
                  </div>
                </InfoWindow>
              )}
            </GoogleMap>
          </LoadScript>
        </div>

        {/* Right Column */}
        <div className="w-1/4 bg-white p-6 shadow-lg overflow-y-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Selected Pet Details</h2>
          {selectedMarker ? (
            <div className="p-4 border rounded-lg shadow-sm bg-gray-50">
              <img src={selectedMarker.imageUrl} alt={selectedMarker.name} className="w-full h-32 object-cover rounded-lg mb-2" />
              <h3 className="text-lg font-bold">{selectedMarker.name}</h3>
              <p>Species: {selectedMarker.species}</p>
              <p>Age: {selectedMarker.age}</p>
              <p>Owner: {selectedMarker.owner_email}</p>
              <p>Address: {selectedMarker.address}</p>
            </div>
          ) : (
            <p>No pet selected.</p>
          )}
        </div>
      </div>
    </div>
  );
}