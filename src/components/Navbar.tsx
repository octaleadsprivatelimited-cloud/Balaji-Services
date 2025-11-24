import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  Shield,
  HelpCircle,
  BookOpen,
  Award,
  Phone
} from 'lucide-react';
import { openWhatsAppQuote } from '../utils/whatsapp';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isInvisibleGrillDropdownOpen, setIsInvisibleGrillDropdownOpen] = useState(false);
  const [isClothHangerDropdownOpen, setIsClothHangerDropdownOpen] = useState(false);
  const [isMobileInvisibleGrillOpen, setIsMobileInvisibleGrillOpen] = useState(false);
  const [isMobileClothHangerOpen, setIsMobileClothHangerOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const invisibleGrillDropdownRef = useRef<HTMLDivElement>(null);
  const clothHangerDropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleInvisibleGrillDropdown = () => {
    setIsInvisibleGrillDropdownOpen(!isInvisibleGrillDropdownOpen);
  };

  const toggleClothHangerDropdown = () => {
    setIsClothHangerDropdownOpen(!isClothHangerDropdownOpen);
  };

  const toggleMobileInvisibleGrill = () => {
    setIsMobileInvisibleGrillOpen(!isMobileInvisibleGrillOpen);
  };

  const toggleMobileClothHanger = () => {
    setIsMobileClothHangerOpen(!isMobileClothHangerOpen);
  };

  const invisibleGrillServices = [
    { name: "Invisible Grill for Balconies", slug: "invisible-grill-for-balconies" },
    { name: "Invisible Grill for Windows", slug: "invisible-grill-for-windows" },
    { name: "Invisible Grill for Apartments", slug: "invisible-grill-for-apartments" }
  ];

  const clothHangerServices = [
    { name: "Pull & Dry Cloth Hangers", slug: "pull-dry-cloth-hangers" },
    { name: "Ceiling Cloth Hangers", slug: "ceiling-cloth-hangers" },
    { name: "Pull & Dry Cloth Hangers for Balconies", slug: "pull-dry-cloth-hangers-for-balconies" }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
      if (invisibleGrillDropdownRef.current && !invisibleGrillDropdownRef.current.contains(event.target as Node)) {
        setIsInvisibleGrillDropdownOpen(false);
      }
      if (clothHangerDropdownRef.current && !clothHangerDropdownRef.current.contains(event.target as Node)) {
        setIsClothHangerDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const mobileMenu = document.querySelector('.mobile-menu');
      if (isOpen && mobileMenu && !mobileMenu.contains(event.target as Node)) {
        setIsOpen(false);
        setIsMobileInvisibleGrillOpen(false);
        setIsMobileClothHangerOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Hide navbar on landing page for mobile
  if (location.pathname === '/landing') {
    return null;
  }

  return (
    <nav className="shadow-md fixed w-full z-50 bg-primary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
              <Link to="/" className="flex items-center space-x-3">
                <span className="text-white font-bold text-lg sm:text-xl">Balaji Services</span>
              </Link>

          {/* Mobile Menu - Only visible on small screens */}
          <div className="lg:hidden flex items-center space-x-3">
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-200 focus:outline-none focus:text-gray-200"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            <Link to="/" className="text-white hover:text-gray-200 transition-colors font-medium">Home</Link>
            <Link to="/about" className="text-white hover:text-gray-200 transition-colors font-medium">About</Link>
            
            {/* Invisible Grill Dropdown */}
            <div className="relative" ref={invisibleGrillDropdownRef}>
              <button
                onClick={toggleInvisibleGrillDropdown}
                className="flex items-center space-x-1 text-white hover:text-gray-200 transition-colors font-medium"
              >
                <span>Invisible Grill</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isInvisibleGrillDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isInvisibleGrillDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-200 py-3 z-50 max-h-80 overflow-y-auto"
                >
                      {invisibleGrillServices.map((service, index) => (
                        <Link
                          key={index}
                          to={`/services/${service.slug}`}
                          className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors text-sm font-medium"
                          onClick={() => setIsInvisibleGrillDropdownOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                </motion.div>
              )}
            </div>

            {/* Cloth Hangers Dropdown */}
            <div className="relative" ref={clothHangerDropdownRef}>
              <button
                onClick={toggleClothHangerDropdown}
                className="flex items-center space-x-1 text-white hover:text-gray-200 transition-colors font-medium"
              >
                <span>Cloth Hangers</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isClothHangerDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isClothHangerDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-200 py-3 z-50 max-h-80 overflow-y-auto"
                >
                      {clothHangerServices.map((service, index) => (
                        <Link
                          key={index}
                          to={`/services/${service.slug}`}
                          className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors text-sm font-medium"
                          onClick={() => setIsClothHangerDropdownOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                </motion.div>
              )}
            </div>

            <Link to="/gallery" className="text-white hover:text-gray-200 transition-colors font-medium">Gallery</Link>
            <Link to="/faq" className="text-white hover:text-gray-200 transition-colors font-medium">FAQ's</Link>

            <Link to="/contact" className="text-white hover:text-gray-200 transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Quality Button */}
            <Link
              to="/about"
              className="bg-secondary-600 hover:bg-secondary-700 text-white px-3 py-2 rounded-lg font-semibold transition-colors flex items-center space-x-1.5 shadow-lg text-sm"
            >
              <Award className="h-4 w-4" />
              <span>Quality Assured</span>
            </Link>
            
            {/* Get Quote Button */}
            <button
              onClick={openWhatsAppQuote}
              className="bg-accent-600 hover:bg-accent-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors cursor-pointer text-sm"
            >
              Get Quote
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="mobile-menu lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50 max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-3 space-y-2 bg-white">
            <Link to="/" className="block px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors" onClick={() => setIsOpen(false)}>About</Link>
            
            {/* Mobile Invisible Grill Dropdown */}
            <div className="space-y-1">
              <button
                onClick={toggleMobileInvisibleGrill}
                className="flex items-center justify-between w-full px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
              >
                <span className="font-semibold">Invisible Grill</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isMobileInvisibleGrillOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isMobileInvisibleGrillOpen && (
                <div className="ml-4 space-y-1 max-h-60 overflow-y-auto">
                  {invisibleGrillServices.map((service, index) => (
                    <Link
                      key={index}
                      to={`/services/${service.slug}`}
                      className="block px-3 py-2 text-gray-500 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors text-sm"
                      onClick={() => {
                        setIsOpen(false);
                        setIsMobileInvisibleGrillOpen(false);
                      }}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Cloth Hangers Dropdown */}
            <div className="space-y-1">
              <button
                onClick={toggleMobileClothHanger}
                className="flex items-center justify-between w-full px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
              >
                <span className="font-semibold">Cloth Hangers</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isMobileClothHangerOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isMobileClothHangerOpen && (
                <div className="ml-4 space-y-1 max-h-60 overflow-y-auto">
                  {clothHangerServices.map((service, index) => (
                    <Link
                      key={index}
                      to={`/services/${service.slug}`}
                      className="block px-3 py-2 text-gray-500 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors text-sm"
                      onClick={() => {
                        setIsOpen(false);
                        setIsMobileClothHangerOpen(false);
                      }}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link to="/gallery" className="block px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors" onClick={() => setIsOpen(false)}>Gallery</Link>
            <Link to="/faq" className="block px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors" onClick={() => setIsOpen(false)}>FAQ's</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors" onClick={() => setIsOpen(false)}>Contact</Link>

            {/* Mobile CTA Buttons */}
            <div className="pt-4 border-t border-gray-200 space-y-3">
              {/* Mobile Quality Button */}
              <Link
                to="/about"
                className="block w-full text-center bg-secondary-600 hover:bg-secondary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                onClick={() => setIsOpen(false)}
              >
                <Award className="h-5 w-5" />
                <span>Quality Assured</span>
              </Link>

              {/* Mobile Get Quote Button */}
              <button
                onClick={() => {
                  openWhatsAppQuote();
                  setIsOpen(false);
                }}
                className="block w-full text-center bg-accent-600 hover:bg-accent-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer"
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
