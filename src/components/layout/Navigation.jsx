import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LogOut, User, Heart } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { ROUTES } from '../../constants/index';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, user, logout, hasRole } = useAuth();
  const location = useLocation();

  const navLinks = [
    { href: ROUTES.HOME, label: 'Home' },
    { href: ROUTES.FIND_DONORS, label: 'Find Donors' },
    { href: ROUTES.DIRECTORY, label: 'Directory' },
    { href: ROUTES.ABOUT, label: 'About' },
    { href: ROUTES.CONTACT, label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-linear-to-r from-primary-500 via-primary-600 to-primary-700 text-white sticky top-0 z-40 shadow-2xl backdrop-blur-sm bg-opacity-95">
      <div className="container-max flex items-center justify-between">
        {/* Logo */}
        <Link to={ROUTES.HOME} className="flex items-center gap-3 py-4 group" aria-label="Go to Homepage">
          <div className="relative">
            <Heart aria-hidden="true" className="w-7 h-7 text-accent group-hover:scale-110 transition-transform" />
            <div className="absolute inset-0 rounded-full bg-accent/20 blur-md -z-10"></div>
          </div>
          <span className="text-2xl font-bold hidden sm:inline bg-linear-to-r from-white to-white/80 bg-clip-text text-transparent">BloodConnect</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-4 py-2 rounded-lg transition-all duration-300 font-semibold text-sm ${
                isActive(link.href)
                  ? 'bg-white/20 text-white shadow-lg'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA and Auth */}
        <div className="hidden md:flex items-center gap-3">
          {isAuthenticated ? (
            <>
              <Link to={ROUTES.EMERGENCY_REQUEST}>
                <button aria-label="Create Emergency Request" className="bg-linear-to-r from-accent to-red-700 hover:from-red-700 hover:to-red-800 text-white px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
                  🚨 Emergency
                </button>
              </Link>
              <div className="relative group">
                <button aria-expanded="false" aria-haspopup="true" className="flex items-center gap-2 px-4 py-2.5 rounded-lg hover:bg-white/10 transition-all duration-300 group-hover:bg-white/15">
                  <div aria-hidden="true" className="w-8 h-8 rounded-full bg-linear-to-br from-white/30 to-white/10 flex items-center justify-center font-bold text-sm border border-white/20">
                    {user?.name?.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-sm font-semibold">{user?.name?.split(' ')[0]}</span>
                </button>
                <div className="absolute right-0 top-full mt-3 bg-surface text-text-primary rounded-xl shadow-2xl p-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-max border border-gray-100/80 backdrop-blur">
                  {hasRole('donor') && (
                    <Link
                      to={ROUTES.DONOR_DASHBOARD}
                      className="block px-4 py-2.5 hover:bg-primary-50 rounded-lg transition-all duration-200 font-semibold text-sm"
                    >
                      👤 Donor Dashboard
                    </Link>
                  )}
                  {hasRole('hospital') && (
                    <Link
                      to={ROUTES.HOSPITAL_DASHBOARD}
                      className="block px-4 py-2.5 hover:bg-primary-50 rounded-lg transition-all duration-200 font-semibold text-sm"
                    >
                      🏥 Hospital Dashboard
                    </Link>
                  )}
                  {hasRole('admin') && (
                    <Link
                      to={ROUTES.ADMIN_DASHBOARD}
                      className="block px-4 py-2.5 hover:bg-primary-50 rounded-lg transition-all duration-200 font-semibold text-sm"
                    >
                      ⚙️ Admin Dashboard
                    </Link>
                  )}
                  <div className="border-t border-gray-100/50 my-1"></div>
                  <Link
                    to={ROUTES.DONOR_PROFILE}
                    className="block px-4 py-2.5 hover:bg-primary-50 rounded-lg transition-all duration-200 font-semibold text-sm"
                  >
                    👥 Profile
                  </Link>
                  <button
                    onClick={logout}
                    className="block w-full text-left px-4 py-2.5 hover:bg-red-50 rounded-lg transition-all duration-200 text-accent font-semibold text-sm"
                  >
                    🚪 Logout
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <Link to={ROUTES.LOGIN}>
                <button className="border-2 border-white hover:bg-white/10 text-white px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
                  Login
                </button>
              </Link>
              <Link to={ROUTES.REGISTER}>
                <button className="bg-accent hover:from-red-700 hover:to-red-800 text-white px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-all duration-300"
        >
          {isOpen ? <X aria-hidden="true" size={24} className="text-white" /> : <Menu aria-hidden="true" size={24} className="text-white" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-linear-to-b from-primary-600 to-primary-700 p-4 space-y-2 animate-slideInUp border-t border-white/10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg transition-all duration-200 font-semibold text-sm ${
                isActive(link.href)
                  ? 'bg-white/20'
                  : 'hover:bg-white/10'
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="border-t border-white/20 pt-3 mt-3 space-y-2">
            {isAuthenticated ? (
              <>
                <Link
                  to={ROUTES.EMERGENCY_REQUEST}
                  onClick={() => setIsOpen(false)}
                  className="block w-full bg-linear-to-r from-accent to-red-700 hover:from-red-700 hover:to-red-800 text-white px-4 py-3 rounded-lg font-semibold text-center transition-all duration-300 shadow-lg"
                >
                  🚨 Emergency Request
                </Link>
                { hasRole('donor') && (
                    <Link
                      to={ROUTES.DONOR_DASHBOARD}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 hover:bg-white/10 rounded-lg transition-all duration-200 font-semibold text-sm"
                    >
                      👤 Donor Dashboard
                    </Link>
                  )}
                  {hasRole('hospital') && (
                    <Link
                      to={ROUTES.HOSPITAL_DASHBOARD}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 hover:bg-white/10 rounded-lg transition-all duration-200 font-semibold text-sm"
                    >
                      🏥 Hospital Dashboard
                    </Link>
                  )}
                  {hasRole('admin') && (
                    <Link
                      to={ROUTES.ADMIN_DASHBOARD}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 hover:bg-white/10 rounded-lg transition-all duration-200 font-semibold text-sm"
                    >
                      ⚙️ Admin Dashboard
                    </Link>
                  )}
                <button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 hover:bg-white/10 rounded-lg transition-all duration-200 text-accent font-semibold text-sm"
                >
                  🚪 Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to={ROUTES.LOGIN}
                  onClick={() => setIsOpen(false)}
                  className="block w-full border-2 border-white text-white px-4 py-3 rounded-lg font-semibold text-center transition-all duration-300 hover:bg-white/10"
                >
                  Login
                </Link>
                <Link
                  to={ROUTES.REGISTER}
                  onClick={() => setIsOpen(false)}
                  className="block w-full bg-linear-to-r from-accent to-red-700 text-white px-4 py-3 rounded-lg font-semibold text-center transition-all duration-300 shadow-lg"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export const Sidebar = ({ isOpen = true, onClose = () => {}, items = [] }) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static left-0 top-0 h-screen bg-surface border-r border-border w-64 z-40 transform transition-transform md:transform-none ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 space-y-2 sticky top-0 max-h-screen overflow-y-auto">
          {items.map((item, idx) => (
            <React.Fragment key={idx}>
              {item.isSection ? (
                <h3 className="text-xs font-bold text-text-muted uppercase mt-6 mb-3">
                  {item.label}
                </h3>
              ) : (
                <Link
                  to={item.href}
                  onClick={onClose}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-smooth ${
                    item.active
                      ? 'bg-secondary-100 text-secondary-600 font-semibold border-l-4 border-secondary-500'
                      : 'text-text-primary hover:bg-gray-100'
                  }`}
                >
                  {item.icon && <item.icon size={20} />}
                  <span>{item.label}</span>
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>
      </aside>
    </>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-primary-500 text-white mt-12">
      <div className="container-max py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6" />
              <span className="text-xl font-bold">Blood Donation System</span>
            </div>
            <p className="text-white text-sm">
              Connecting lifesavers with those in need. Fast, reliable, trustworthy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white">
              <li>
                <Link to={ROUTES.HOME} className="hover:text-white transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.FIND_DONORS}
                  className="hover:text-white transition-smooth"
                >
                  Find Donors
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.DIRECTORY}
                  className="hover:text-white transition-smooth"
                >
                  Directory
                </Link>
              </li>
              <li>
                <Link to={ROUTES.ABOUT} className="hover:text-white transition-smooth">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Support</h4>
            <ul className="space-y-2 text-sm text-white">
              <li>
                <Link
                  to={ROUTES.CONTACT}
                  className="hover:text-white transition-smooth"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#policy" className="hover:text-white transition-smooth">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-white transition-smooth">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-smooth">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-2 text-sm text-white">
              <li>📧 support@blooddonation.com</li>
              <li>📞 1800-DONATE-1</li>
              <li>🚨 Emergency: 911</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col items-center justify-center text-center">
            <p className="text-sm text-white">
              © 2026 Blood Donation System. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const DashboardLayout = ({
  sidebarItems = [],
  children,
  title = '',
  description = '',
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        items={sidebarItems}
      />

      <div className="flex-1">
        <div className="border-b border-border bg-surface sticky top-0 z-30">
          <div className="container-max py-4 flex items-center justify-between">
            <div>
              {title && <h1 className="text-2xl font-bold">{title}</h1>}
              {description && (
                <p className="text-text-muted text-sm">{description}</p>
              )}
            </div>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>

        <main className="container-max py-8">{children}</main>
      </div>
    </div>
  );
};
