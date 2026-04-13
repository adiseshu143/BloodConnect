import React from 'react';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  fullWidth = false,
  ...props
}) => {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2 whitespace-nowrap focus-visible:ring-2 focus-visible:ring-offset-2';

  const variants = {
    primary: 'bg-linear-to-br from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 hover:shadow-xl active:scale-95 focus-visible:outline-primary-500 focus-visible:ring-primary-400',
    secondary: 'bg-linear-to-br from-secondary-500 to-secondary-600 text-white hover:from-secondary-600 hover:to-secondary-700 hover:shadow-xl active:scale-95 focus-visible:outline-secondary-500 focus-visible:ring-secondary-400',
    danger: 'bg-linear-to-br from-accent to-red-700 text-white hover:from-red-700 hover:to-red-800 hover:shadow-xl active:scale-95 focus-visible:outline-accent focus-visible:ring-red-400',
    outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-50 hover:border-primary-600 hover:shadow-md active:scale-95 focus-visible:outline-primary-500 focus-visible:ring-primary-400',
    ghost: 'text-primary-500 hover:bg-primary-50 active:scale-95 focus-visible:outline-primary-500 focus-visible:ring-primary-400',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-7 py-3.5 text-lg',
    xl: 'px-9 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export const IconButton = ({
  icon: Icon,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  className = '',
  ...props
}) => {
  const sizes = {
    sm: 'p-1.5',
    md: 'p-2',
    lg: 'p-3',
  };

  return (
    <button
      className={`flex-center rounded-lg transition-smooth hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed ${sizes[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      <Icon size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} />
    </button>
  );
};

export const Badge = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon = null,
}) => {
  const variants = {
    primary: 'bg-linear-to-r from-primary-100 to-primary-50 text-primary-800 border border-primary-200 font-semibold',
    secondary: 'bg-linear-to-r from-secondary-100 to-secondary-50 text-secondary-800 border border-secondary-200 font-semibold',
    success: 'bg-linear-to-r from-green-100 to-green-50 text-green-800 border border-green-200 font-semibold',
    warning: 'bg-linear-to-r from-yellow-100 to-yellow-50 text-yellow-800 border border-yellow-200 font-semibold',
    error: 'bg-linear-to-r from-red-100 to-red-50 text-red-800 border border-red-200 font-semibold',
    urgent: 'bg-linear-to-r from-accent to-red-600 text-white shadow-md font-semibold',
  };

  const sizes = {
    sm: 'px-2.5 py-1 text-xs rounded-md flex items-center gap-1.5',
    md: 'px-3.5 py-1.5 text-sm rounded-lg flex items-center gap-2',
    lg: 'px-4.5 py-2 text-base rounded-lg flex items-center gap-2',
  };

  return (
    <span className={`inline-flex items-center gap-2 ${variants[variant]} ${sizes[size]} ${className}`}>
      {Icon && <Icon size={size === 'sm' ? 12 : size === 'lg' ? 18 : 14} />}
      {children}
    </span>
  );
};

export const Card = ({
  children,
  className = '',
  onClick = null,
  hoverable = false,
}) => {
  return (
    <div
      className={`card ${hoverable ? 'hover:shadow-lg cursor-pointer' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export const Alert = ({
  variant = 'info',
  title = '',
  message = '',
  onClose = null,
  className = '',
}) => {
  const variants = {
    success: 'bg-green-50 border-green-200 text-green-800',
    error: 'bg-red-50 border-red-200 text-red-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    info: 'bg-blue-50 border-blue-200 text-blue-800',
  };

  return (
    <div
      className={`border rounded-lg p-4 flex items-start gap-3 ${variants[variant]} ${className}`}
    >
      <div className="flex-1">
        {title && <h4 className="font-semibold">{title}</h4>}
        {message && <p className="text-sm mt-1">{message}</p>}
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="text-lg font-bold opacity-60 hover:opacity-100"
        >
          ×
        </button>
      )}
    </div>
  );
};

export const Modal = ({
  isOpen,
  onClose,
  title = '',
  children,
  size = 'md',
  className = '',
}) => {
  if (!isOpen) return null;

  const sizes = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex-center p-4">
      <div className={`${sizes[size]} w-full bg-surface rounded-lg shadow-2xl animate-slideInUp ${className}`}>
        {title && (
          <div className="border-b border-border p-6 flex-between">
            <h2 className="text-2xl font-bold">{title}</h2>
            <button
              onClick={onClose}
              className="text-2xl text-text-muted hover:text-text-primary"
            >
              ×
            </button>
          </div>
        )}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export const Skeleton = ({ className = '', height = 'h-4' }) => {
  return (
    <div className={`bg-border rounded ${height} ${className} animate-pulse`} />
  );
};

export const EmptyState = ({
  icon: Icon,
  title,
  description,
  action = null,
  className = '',
}) => {
  return (
    <div className={`text-center py-12 ${className}`}>
      {Icon && <Icon className="w-16 h-16 mx-auto text-text-muted mb-4" />}
      <h3 className="text-xl font-semibold text-text-primary mb-2">{title}</h3>
      <p className="text-text-muted mb-6">{description}</p>
      {action && <div>{action}</div>}
    </div>
  );
};

export const LoadingSpinner = ({ size = 'md', className = '' }) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div className={`flex-center ${className}`}>
      <div className={`${sizes[size]} border-4 border-border border-t-secondary-500 rounded-full animate-spin`} />
    </div>
  );
};

export const Divider = ({ vertical = false, className = '' }) => {
  if (vertical) {
    return <div className={`w-px h-full bg-border ${className}`} />;
  }
  return <div className={`h-px w-full bg-border ${className}`} />;
};

export const Breadcrumb = ({ items = [], className = '' }) => {
  return (
    <nav className={`flex items-center gap-2 text-sm ${className}`}>
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          {idx > 0 && <span className="text-text-muted">/</span>}
          {item.href ? (
            <a href={item.href} className="text-secondary-500 hover:text-secondary-600">
              {item.label}
            </a>
          ) : (
            <span className="text-text-primary">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export const Tabs = ({
  tabs = [],
  activeTab = 0,
  onTabChange = () => {},
  className = '',
}) => {
  return (
    <div className={className}>
      <div className="flex border-b border-border gap-6">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => onTabChange(idx)}
            className={`py-3 px-4 border-b-2 transition-smooth ${
              activeTab === idx
                ? 'border-secondary-500 text-secondary-500 font-semibold'
                : 'border-transparent text-text-muted hover:text-text-primary'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-6">
        {tabs[activeTab]?.content}
      </div>
    </div>
  );
};

export const Tooltip = ({
  content,
  children,
  position = 'top',
  className = '',
}) => {
  const positions = {
    top: 'bottom-full mb-2 left-1/2 -translate-x-1/2',
    bottom: 'top-full mt-2 left-1/2 -translate-x-1/2',
    left: 'right-full mr-2 top-1/2 -translate-y-1/2',
    right: 'left-full ml-2 top-1/2 -translate-y-1/2',
  };

  return (
    <div className="relative group inline-block">
      {children}
      <div
        className={`absolute ${positions[position]} bg-text-primary text-white px-3 py-2 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none ${className}`}
      >
        {content}
      </div>
    </div>
  );
};
