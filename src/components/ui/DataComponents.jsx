import React from 'react';

export const Table = ({
  columns = [],
  data = [],
  className = '',
  responsive = true,
}) => {
  if (data.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-text-muted">No data available</p>
      </div>
    );
  }

  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full">
        <thead>
          <tr className="border-b border-border bg-gray-50">
            {columns.map((col) => (
              <th
                key={col.accessor}
                className="px-6 py-3 text-left text-sm font-semibold text-text-primary"
              >
                {col.Header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={idx}
              className="border-b border-border hover:bg-gray-50 transition-colors"
            >
              {columns.map((col) => (
                <td
                  key={col.accessor}
                  className="px-6 py-4 text-sm text-text-primary"
                >
                  {col.Cell ? col.Cell(row) : row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const DataCard = ({
  title = '',
  value = '',
  icon: Icon = null,
  trend = null,
  trendLabel = '',
  className = '',
  onClick = null,
}) => {
  return (
    <div
      className={`card flex items-start justify-between ${onClick ? 'cursor-pointer hover:shadow-lg' : ''} ${className}`}
      onClick={onClick}
    >
      <div className="flex-1">
        <p className="text-text-muted text-sm mb-1">{title}</p>
        <h3 className="text-3xl font-bold text-text-primary">{value}</h3>
        {trend && (
          <div className={`text-sm mt-2 ${trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {trend > 0 ? '▲' : '▼'} {trendLabel}
          </div>
        )}
      </div>
      {Icon && (
        <div className="w-12 h-12 rounded-lg bg-secondary-100 flex-center shrink-0">
          <Icon size={24} className="text-secondary-500" />
        </div>
      )}
    </div>
  );
};

export const DonorCard = ({
  donor = {},
  onSelect = () => {},
  showActions = false,
  className = '',
}) => {
  return (
    <div className={`card hover:shadow-lg cursor-pointer ${className}`} onClick={() => onSelect(donor)}>
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-secondary-100 flex-center text-secondary-500 font-bold text-lg">
          {donor.initials || 'DN'}
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-text-primary">{donor.name}</h4>
          <p className="text-sm text-text-muted">{donor.location}</p>
        </div>
        {donor.status && (
          <span className="px-2 py-1 rounded text-xs font-semibold bg-green-100 text-green-800">
            {donor.status}
          </span>
        )}
      </div>

      <div className="grid grid-cols-3 gap-3 mb-4 pb-4 border-b border-border">
        <div className="text-center">
          <p className="text-2xl font-bold text-primary-500">{donor.bloodGroup}</p>
          <p className="text-xs text-text-muted">Blood</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-secondary-500">{donor.distance || '?'}km</p>
          <p className="text-xs text-text-muted">Away</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-primary-500">{donor.readinessScore || 0}%</p>
          <p className="text-xs text-text-muted">Ready</p>
        </div>
      </div>

      {showActions && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelect(donor);
          }}
          className="w-full bg-secondary-500 text-white py-2 rounded-lg font-semibold hover:bg-secondary-600 transition-smooth"
        >
          Select Donor
        </button>
      )}
    </div>
  );
};

export const RequestCard = ({
  request = {},
  onClick = null,
  showActions = false,
  className = '',
}) => {
  const getPriorityColor = (priority) => {
    const colors = {
      critical: 'bg-accent text-white',
      high: 'bg-orange-100 text-orange-800',
      medium: 'bg-blue-100 text-blue-800',
      low: 'bg-green-100 text-green-800',
    };
    return colors[priority] || 'bg-gray-100 text-gray-800';
  };

  const getStatusColor = (status) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800',
      matched: 'bg-blue-100 text-blue-800',
      in_transit: 'bg-purple-100 text-purple-800',
      completed: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800',
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div
      className={`card hover:shadow-lg transition-shadow ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <h4 className="font-semibold text-text-primary">{request.hospitalName}</h4>
          <p className="text-sm text-text-muted">{request.location}</p>
        </div>
        <div className="text-right">
          <span className={`inline-block px-2 py-1 rounded text-xs font-semibold ${getPriorityColor(request.priority)}`}>
            {request.priority}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4 pb-4 border-b border-border">
        <div>
          <p className="text-sm text-text-muted">Blood Group</p>
          <p className="text-lg font-bold text-primary-500">{request.bloodGroup}</p>
        </div>
        <div>
          <p className="text-sm text-text-muted">Units Needed</p>
          <p className="text-lg font-bold text-accent">{request.unitsNeeded}</p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className={`px-2 py-1 rounded text-xs font-semibold ${getStatusColor(request.status)}`}>
          {request.status}
        </span>
        {request.timeRemaining && (
          <p className="text-sm text-text-muted">{request.timeRemaining}h left</p>
        )}
      </div>

      {showActions && (
        <button className="w-full mt-4 bg-secondary-500 text-white py-2 rounded-lg font-semibold hover:bg-secondary-600">
          Respond
        </button>
      )}
    </div>
  );
};

export const HospitalCard = ({
  hospital = {},
  onClick = null,
  className = '',
}) => {
  return (
    <div
      className={`card hover:shadow-lg cursor-pointer ${className}`}
      onClick={onClick}
    >
      <div className="mb-3">
        <h4 className="font-semibold text-text-primary">{hospital.name}</h4>
        <p className="text-sm text-text-muted">{hospital.address}</p>
      </div>

      <div className="space-y-2 text-sm mb-4 pb-4 border-b border-border">
        <div>
          <span className="text-text-muted">Phone:</span>
          <p className="text-text-primary">{hospital.phone}</p>
        </div>
        <div>
          <span className="text-text-muted">Emergency:</span>
          <p className="text-accent font-semibold">{hospital.emergencyContact}</p>
        </div>
      </div>

      <div className="flex gap-2">
        {hospital.hasBloodBank && (
          <span className="inline-block px-2 py-1 rounded bg-secondary-100 text-secondary-800 text-xs font-semibold">
            Blood Bank
          </span>
        )}
        {hospital.verified && (
          <span className="inline-block px-2 py-1 rounded bg-green-100 text-green-800 text-xs font-semibold">
            Verified
          </span>
        )}
      </div>
    </div>
  );
};

export const StatsGrid = ({ stats = [], className = '' }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${className}`}>
      {stats.map((stat, idx) => (
        <DataCard key={idx} {...stat} />
      ))}
    </div>
  );
};

export const RequestTimeline = ({ events = [], className = '' }) => {
  return (
    <div className={className}>
      {events.map((event, idx) => (
        <div key={idx} className="flex gap-4 mb-6 last:mb-0">
          <div className="flex flex-col items-center">
            <div className={`w-4 h-4 rounded-full ${event.completed ? 'bg-secondary-500' : 'bg-border'}`} />
            {idx < events.length - 1 && (
              <div className="w-0.5 h-12 bg-border mt-2" />
            )}
          </div>
          <div className="flex-1 pt-1">
            <p className="font-semibold text-text-primary">{event.title}</p>
            <p className="text-sm text-text-muted">{event.timestamp}</p>
            {event.description && (
              <p className="text-sm text-text-primary mt-1">{event.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
