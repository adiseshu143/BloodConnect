import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, MapPin, Filter, Map } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup, Circle, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { DonorCard } from "../components/ui/DataComponents";

// Fix for default leaflet icons in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom user icon
const userIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

import { EmptyState, LoadingSpinner } from "../components/ui/BasicComponents";
import { Input,
 Select, BloodGroupSelector } from '../components/ui/FormComponents';
import { mockDonors } from '../data/mockData';
import { ROUTES, BLOOD_GROUPS, DISTANCE_UNITS } from '../constants';
import { calculateDistance } from '../utils/helpers';

const RecenterAutomatically = ({ lat, lng }) => {
  const map = useMap();
  React.useEffect(() => {
    if (lat && lng) {
      map.setView([lat, lng], 12);
    }
  }, [lat, lng, map]);
  return null;
}

const FindDonorsPage = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    bloodGroup: '',
    maxDistance: 20,
    availability: 'all',
  });

  const [sortBy, setSortBy] = useState('distance');
  const [userLocation, setUserLocation] = useState(null);
  const [locationError, setLocationError] = useState('');
  const [isLocating, setIsLocating] = useState(false);

  const handleGetLocation = () => {
    setIsLocating(true);
    setLocationError('');
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setIsLocating(false);
        },
        (error) => {
          setLocationError('Unable to retrieve your location');
          setIsLocating(false);
        }
      );
    } else {
      setLocationError('Geolocation is not supported by your browser');
      setIsLocating(false);
    }
  };

  const filteredDonors = useMemo(() => {
    let filtered = [...mockDonors];

    if (filters.bloodGroup) {
      filtered = filtered.filter((d) => d.bloodGroup === filters.bloodGroup);
    }

    if (filters.availability === 'available') {
      filtered = filtered.filter((d) => d.isAvailable);
    } else if (filters.availability === 'verified') {
      filtered = filtered.filter((d) => d.verified);
    }

    filtered = filtered.filter((d) => d.distance <= filters.maxDistance);

    const sorted = filtered.sort((a, b) => {
      if (sortBy === 'distance') return a.distance - b.distance;
      if (sortBy === 'readiness') return b.readinessScore - a.readinessScore;
      return 0;
    });

    return sorted;
  }, [filters, sortBy]);

  const handleDonorSelect = (donor) => {
    navigate(`/donor/${donor.id}`, { state: { donor } });
  };

  return (
    <div className="bg-background min-h-screen flex flex-col">

      <main className="flex-1">
        <div className="container-max py-8">
          {/* Header */}
          <div className="mb-8 flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold mb-2">Find Donors</h1>
              <p className="text-text-muted">
                Browse verified blood donors in your area
              </p>
            </div>
            <div className="flex flex-col items-end">
              <button
                onClick={handleGetLocation}
                disabled={isLocating}
                className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors disabled:opacity-50"
              >
                <MapPin size={20} />
                {isLocating ? 'Locating...' : 'Use My Location'}
              </button>
              {userLocation && (
                <span className="text-sm text-green-600 mt-1">Location active: {userLocation.lat.toFixed(2)}, {userLocation.lng.toFixed(2)}</span>
              )}
              {locationError && (
                <span className="text-sm text-red-500 mt-1">{locationError}</span>
              )}
            </div>
          </div>

          {/* Filters */}
          <div className="bg-surface border border-border rounded-lg p-6 mb-8">
            <div className="flex items-center gap-2 mb-6">
              <Filter size={20} />
              <h2 className="text-lg font-semibold">Filters</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <BloodGroupSelector
                value={filters.bloodGroup}
                onChange={(bg) =>
                  setFilters((prev) => ({ ...prev, bloodGroup: bg }))
                }
                label="Blood Group"
              />

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Max Distance (km)
                </label>
                <Input
                  type="range"
                  min="0"
                  max="100"
                  value={filters.maxDistance}
                  onChange={(e) =>
                    setFilters((prev) => ({
                      ...prev,
                      maxDistance: parseInt(e.target.value),
                    }))
                  }
                />
                <p className="text-text-muted text-sm mt-1">
                  {filters.maxDistance} km
                </p>
              </div>

              <Select
                label="Availability"
                value={filters.availability}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    availability: e.target.value,
                  }))
                }
                options={[
                  { value: 'all', label: 'All Donors' },
                  { value: 'available', label: 'Available Now' },
                  { value: 'verified', label: 'Verified Only' },
                ]}
              />

              <Select
                label="Sort By"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                options={[
                  { value: 'distance', label: 'Nearest First' },
                  { value: 'readiness', label: 'Highest Readiness' },
                ]}
              />
            </div>
          </div>

          {/* Real-time Map View (Appearance Only) */}
          <div className="bg-surface border border-border rounded-lg p-6 mb-8 overflow-hidden">
            <div className="flex items-center gap-2 mb-4">
              <Map size={20} className="text-primary-600" />
              <h2 className="text-lg font-semibold">Real-time Donor Map View</h2>
              <span className="ml-auto flex items-center gap-2 text-sm text-green-600 font-medium bg-green-50 px-2 py-1 rounded">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Live
              </span>
            </div>
            
            <div className="relative w-full h-[400px] bg-slate-100 rounded-lg border border-slate-200 overflow-hidden z-0">
              <MapContainer 
                center={userLocation ? [userLocation.lat, userLocation.lng] : [20.5937, 78.9629]} 
                zoom={userLocation ? 12 : 5} 
                style={{ height: "100%", width: "100%" }}
                zoomControl={false}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                
                {userLocation && <RecenterAutomatically lat={userLocation.lat} lng={userLocation.lng} />}
                
                {/* User Location */}
                {userLocation && (
                  <>
                    <Marker position={[userLocation.lat, userLocation.lng]} icon={userIcon}>
                      <Popup>
                        <strong>You are here</strong>
                      </Popup>
                    </Marker>
                    <Circle 
                      center={[userLocation.lat, userLocation.lng]} 
                      radius={filters.maxDistance * 1000} // km to meters
                      pathOptions={{ color: 'blue', fillColor: 'blue', fillOpacity: 0.1, weight: 1 }} 
                    />
                  </>
                )}

                {/* Mock Donors on Map */}
                {filteredDonors.slice(0, 15).map((donor, idx) => {
                  // For visual appearance only, generate a deterministic lat/lng around user loc or center
                  const baseLat = userLocation ? userLocation.lat : 20.5937;
                  const baseLng = userLocation ? userLocation.lng : 78.9629;
                  
                  // Convert abstract distance to approx degree difference (1 degree ~ 111km)
                  const distanceInDeg = (donor.distance / 111);
                  const angle = (idx * 45 + (donor.distance % 10) * 10) * (Math.PI / 180);
                  
                  const lat = baseLat + (Math.cos(angle) * distanceInDeg);
                  const lng = baseLng + (Math.sin(angle) * distanceInDeg);

                  return (
                    <Marker 
                      key={`map-donor-${donor.id}`} 
                      position={[lat, lng]}
                    >
                      <Popup>
                        <div className="text-center">
                          <strong>{donor.name}</strong><br/>
                          <span className="text-red-500 font-bold">{donor.bloodGroup}</span><br/>
                          <span className="text-sm text-gray-500">{donor.distance} km away</span>
                        </div>
                      </Popup>
                    </Marker>
                  );
                })}
              </MapContainer>
            </div>
          </div>

          {/* Results */}
          {filteredDonors.length > 0 ? (
            <>
              <p className="text-text-muted mb-6">
                Found {filteredDonors.length} donor{filteredDonors.length !== 1 ? 's' : ''}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDonors.map((donor) => (
                  <DonorCard
                    key={donor.id}
                    donor={donor}
                    onSelect={handleDonorSelect}
                    showActions={true}
                  />
                ))}
              </div>
            </>
          ) : (
            <EmptyState
              icon={Heart}
              title="No Donors Found"
              description="Try adjusting your filters or check back later"
              action={
                <button
                  onClick={() => setFilters({ bloodGroup: '', maxDistance: 20, availability: 'all' })}
                  className="text-secondary-500 font-semibold hover:text-secondary-600"
                >
                  Clear Filters
                </button>
              }
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default FindDonorsPage;
