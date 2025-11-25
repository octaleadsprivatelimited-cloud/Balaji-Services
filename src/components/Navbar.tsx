import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { openWhatsAppQuote } from '../utils/whatsapp';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const mobileMenu = document.querySelector('.mobile-menu');
      if (isOpen && mobileMenu && !mobileMenu.contains(event.target as Node)) {
        setIsOpen(false);
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
          <Link to="/" className="flex items-center overflow-visible">
            <img 
              src="/images/logo.png" 
              alt="Balaji Services Logo" 
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* Mobile Menu - Only visible on small screens */}
          <div className="lg:hidden flex items-center space-x-3">
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
            <Link to="/services" className="text-white hover:text-gray-200 transition-colors font-medium">Services</Link>
            <Link to="/gallery" className="text-white hover:text-gray-200 transition-colors font-medium">Gallery</Link>
            <Link to="/faq" className="text-white hover:text-gray-200 transition-colors font-medium">FAQ's</Link>
            <Link to="/contact" className="text-white hover:text-gray-200 transition-colors font-medium">Contact</Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              to="/about"
              className="bg-secondary-600 hover:bg-secondary-700 text-white px-3 py-2 rounded-lg font-semibold transition-colors flex items-center space-x-1.5 shadow-lg text-sm"
            >
              <Award className="h-4 w-4" />
              <span>Quality Assured</span>
            </Link>
            
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
            <Link
              to="/"
              className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/services"
              className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/gallery"
              className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link
              to="/faq"
              className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              FAQ's
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-2 border-t border-gray-200">
              <button
                onClick={openWhatsAppQuote}
                className="w-full bg-accent-600 hover:bg-accent-700 text-white px-4 py-2.5 rounded-lg font-semibold transition-colors"
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
