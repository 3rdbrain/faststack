import React, { useState, useEffect } from 'react';
import Navbar from '../pages/navbar_custom';
import GoogleMapComponent from '../components/GoogleMapComponent';
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';

const defaultCenter = {
  lat: 37.7749, // Default latitude (San Francisco)
  lng: -122.4194, // Default longitude (San Francisco)
};

const SniffSocial = () => {
  const [mapCenter, setMapCenter] = useState(defaultCenter);
  const [searchQuery, setSearchQuery] = useState('');

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

  const handleSearch = () => {
    // Handle search functionality here
    console.log('Search query:', searchQuery);
  };

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center" data-theme="lightblue">
      <div className="bg-beige-100 p-4 rounded-lg shadow-lg w-full max-w-4xl h-auto">
        {/* Navbar */}
        <Navbar />

        <div className="grid grid-cols-12 gap-4 p-4">
          {/* Left Section */}
          <div className="col-span-3 bg-beige-100 p-4 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Search Nearby Pets</h2>
            <input
              type="text"
              placeholder="Enter location"
              className="input input-bordered w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-primary mt-2" onClick={handleSearch}>
              Search
            </button>

            {/* Upcoming Playdates */}
            <div className="bg-beige-100 p-4 shadow-lg mt-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Upcoming Playdates</h2>
              <ul className="list-disc pl-4">
                <li>Playdate with Max on Nov 20</li>
                <li>Playdate with Bella on Nov 22</li>
              </ul>
            </div>
          </div>

          {/* Center Section */}
          <div className="col-span-6 bg-beige-100 p-4 shadow-lg">
            <GoogleMapComponent center={mapCenter} />
          </div>

          {/* Right Section */}
          <div className="col-span-3 bg-beige-100 p-4 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pet Details</h2>
            <p className="text-gray-700">Details about the selected pet will appear here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SniffSocial;
