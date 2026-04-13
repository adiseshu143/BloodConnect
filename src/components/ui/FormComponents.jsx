import React from 'react';

export const Input = ({
  label = '',
  placeholder = '',
  type = 'text',
  value = '',
  onChange = () => {},
  error = '',
  helperText = '',
  disabled = false,
  required = false,
  className = '',
  ...props
}) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-sm font-semibold text-text-primary mb-2">
          {label}
          {required && <span className="text-accent ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full px-4 py-2.5 border rounded-lg transition-smooth focus:outline-none focus:ring-2 ${
          error
            ? 'border-accent focus:ring-accent/30'
            : 'border-border focus:border-secondary-500 focus:ring-secondary-500/30'
        } ${disabled ? 'bg-gray-50 cursor-not-allowed' : 'bg-surface'}`}
        {...props}
      />
      {error && <p className="text-accent text-sm mt-1">{error}</p>}
      {helperText && !error && (
        <p className="text-text-muted text-sm mt-1">{helperText}</p>
      )}
    </div>
  );
};

export const Textarea = ({
  label = '',
  placeholder = '',
  value = '',
  onChange = () => {},
  error = '',
  helperText = '',
  disabled = false,
  required = false,
  rows = 4,
  className = '',
  ...props
}) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-sm font-semibold text-text-primary mb-2">
          {label}
          {required && <span className="text-accent ml-1">*</span>}
        </label>
      )}
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
        className={`w-full px-4 py-2.5 border rounded-lg transition-smooth focus:outline-none focus:ring-2 resize-none ${
          error
            ? 'border-accent focus:ring-accent/30'
            : 'border-border focus:border-secondary-500 focus:ring-secondary-500/30'
        } ${disabled ? 'bg-gray-50 cursor-not-allowed' : 'bg-surface'}`}
        {...props}
      />
      {error && <p className="text-accent text-sm mt-1">{error}</p>}
      {helperText && !error && (
        <p className="text-text-muted text-sm mt-1">{helperText}</p>
      )}
    </div>
  );
};

export const Select = ({
  label = '',
  value = '',
  onChange = () => {},
  options = [],
  error = '',
  helperText = '',
  disabled = false,
  required = false,
  placeholder = 'Select an option',
  className = '',
  ...props
}) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-sm font-semibold text-text-primary mb-2">
          {label}
          {required && <span className="text-accent ml-1">*</span>}
        </label>
      )}
      <select
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`w-full px-4 py-2.5 border rounded-lg transition-smooth focus:outline-none focus:ring-2 appearance-none ${
          error
            ? 'border-accent focus:ring-accent/30'
            : 'border-border focus:border-secondary-500 focus:ring-secondary-500/30'
        } ${disabled ? 'bg-gray-50 cursor-not-allowed' : 'bg-surface'}`}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-accent text-sm mt-1">{error}</p>}
      {helperText && !error && (
        <p className="text-text-muted text-sm mt-1">{helperText}</p>
      )}
    </div>
  );
};

export const Checkbox = ({
  label = '',
  checked = false,
  onChange = () => {},
  error = '',
  disabled = false,
  className = '',
  ...props
}) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="w-5 h-5 rounded border-border border-2 cursor-pointer checked:bg-secondary-500 checked:border-secondary-500 focus:ring-2 focus:ring-secondary-500/30"
        {...props}
      />
      {label && (
        <label className="text-text-primary cursor-pointer flex-1">{label}</label>
      )}
      {error && <p className="text-accent text-sm">{error}</p>}
    </div>
  );
};

export const RadioGroup = ({
  label = '',
  value = '',
  onChange = () => {},
  options = [],
  error = '',
  disabled = false,
  className = '',
}) => {
  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-semibold text-text-primary mb-3">
          {label}
        </label>
      )}
      <div className="space-y-2">
        {options.map((option) => (
          <div key={option.value} className="flex items-center gap-3">
            <input
              type="radio"
              id={option.value}
              name={label}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
              disabled={disabled}
              className="w-5 h-5 rounded-full border-border border-2 cursor-pointer checked:border-secondary-500 accent-secondary-500"
            />
            <label htmlFor={option.value} className="text-text-primary cursor-pointer">
              {option.label}
            </label>
          </div>
        ))}
      </div>
      {error && <p className="text-accent text-sm mt-2">{error}</p>}
    </div>
  );
};

export const BloodGroupSelector = ({
  value = '',
  onChange = () => {},
  error = '',
  label = 'Blood Group',
  required = false,
  className = '',
}) => {
  const bloodGroups = ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'];

  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-semibold text-text-primary mb-3">
          {label}
          {required && <span className="text-accent ml-1">*</span>}
        </label>
      )}
      <div className="grid grid-cols-4 gap-2">
        {bloodGroups.map((group) => (
          <button
            key={group}
            type="button"
            onClick={() => onChange(group)}
            className={`py-2.5 px-3 rounded-lg font-semibold transition-smooth border-2 ${
              value === group
                ? 'bg-secondary-500 text-white border-secondary-500'
                : 'bg-surface text-text-primary border-border hover:border-secondary-500'
            }`}
          >
            {group}
          </button>
        ))}
      </div>
      {error && <p className="text-accent text-sm mt-2">{error}</p>}
    </div>
  );
};

export const LocationInput = ({
  label = '',
  value = '',
  onChange = () => {},
  error = '',
  helperText = '',
  required = false,
  placeholder = 'Enter location',
  className = '',
  onLocationClick = null,
}) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-sm font-semibold text-text-primary mb-2">
          {label}
          {required && <span className="text-accent ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full px-4 py-2.5 border rounded-lg transition-smooth focus:outline-none focus:ring-2 pr-10 ${
            error
              ? 'border-accent focus:ring-accent/30'
              : 'border-border focus:border-secondary-500 focus:ring-secondary-500/30'
          }`}
        />
        {onLocationClick && (
          <button
            type="button"
            onClick={onLocationClick}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary-500 hover:text-secondary-600"
            title="Use current location"
          >
            📍
          </button>
        )}
      </div>
      {error && <p className="text-accent text-sm mt-1">{error}</p>}
      {helperText && !error && (
        <p className="text-text-muted text-sm mt-1">{helperText}</p>
      )}
    </div>
  );
};

export const DateInput = ({
  label = '',
  value = '',
  onChange = () => {},
  error = '',
  helperText = '',
  required = false,
  min = '',
  max = '',
  className = '',
  ...props
}) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-sm font-semibold text-text-primary mb-2">
          {label}
          {required && <span className="text-accent ml-1">*</span>}
        </label>
      )}
      <input
        type="date"
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        className={`w-full px-4 py-2.5 border rounded-lg transition-smooth focus:outline-none focus:ring-2 ${
          error
            ? 'border-accent focus:ring-accent/30'
            : 'border-border focus:border-secondary-500 focus:ring-secondary-500/30'
        }`}
        {...props}
      />
      {error && <p className="text-accent text-sm mt-1">{error}</p>}
      {helperText && !error && (
        <p className="text-text-muted text-sm mt-1">{helperText}</p>
      )}
    </div>
  );
};

export const Form = ({ children, onSubmit = () => {}, className = '' }) => {
  return (
    <form onSubmit={onSubmit} className={className}>
      {children}
    </form>
  );
};

export const FormGroup = ({ children, className = '' }) => {
  return <div className={`space-y-4 ${className}`}>{children}</div>;
};

export const FormActions = ({ children, className = '' }) => {
  return (
    <div className={`flex gap-3 justify-end ${className}`}>{children}</div>
  );
};

// Re-export UI components from BasicComponents for convenience
export { Button, Badge, Card, Alert, Modal, Skeleton, EmptyState, LoadingSpinner, Divider, Breadcrumb, Tabs, Tooltip, IconButton } from './BasicComponents';

