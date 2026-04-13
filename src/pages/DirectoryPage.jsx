import React, { useState, useMemo } from 'react';
import { HospitalCard } from "../components/ui/DataComponents";
import { LoadingSpinner } from "../components/ui/BasicComponents";
import { Input, Select } from '../components/ui/FormComponents';
import { mockHospitals } from '../data/mockData';

const DirectoryPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    hasBloodBank: 'all',
    verified: 'all',
  });

  const filtered = useMemo(() => {
    let result = [...mockHospitals];

    if (searchTerm) {
      result = result.filter(
        (h) =>
          h.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          h.address.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filters.hasBloodBank === 'yes') {
      result = result.filter((h) => h.hasBloodBank);
    }

    if (filters.verified === 'yes') {
      result = result.filter((h) => h.verified);
    }

    return result;
  }, [searchTerm, filters]);

  return (
    <div className="bg-background min-h-screen flex flex-col">

      <main className="flex-1">
        <div className="container-max py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Hospital Directory</h1>
            <p className="text-text-muted">
              Find hospitals and blood banks near you
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-surface border border-border rounded-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input
                label="Search by name or location"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="AIIMS, Delhi..."
              />
              <Select
                label="Has Blood Bank"
                value={filters.hasBloodBank}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    hasBloodBank: e.target.value,
                  }))
                }
                options={[
                  { value: 'all', label: 'All' },
                  { value: 'yes', label: 'Yes' },
                ]}
              />
              <Select
                label="Verified Only"
                value={filters.verified}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    verified: e.target.value,
                  }))
                }
                options={[
                  { value: 'all', label: 'All' },
                  { value: 'yes', label: 'Verified' },
                ]}
              />
            </div>
          </div>

          {/* Results */}
          {filtered.length > 0 ? (
            <>
              <p className="text-text-muted mb-6">
                Found {filtered.length} hospital{filtered.length !== 1 ? 's' : ''}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((hospital) => (
                  <HospitalCard key={hospital.id} hospital={hospital} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-text-muted">No hospitals found</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default DirectoryPage;
