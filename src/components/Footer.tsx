import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-8 lg:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-2">Balaji Services</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Professional service business in Hyderabad.
              </p>
            </div>

            {/* Quick Links and Services - Side by side on mobile */}
            <div className="grid grid-cols-2 gap-6 md:col-span-1 lg:col-span-2">
              {/* Quick Links */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/" className="text-gray-300 hover:text-accent-400 transition-colors">Home</Link></li>
                  <li><Link to="/about" className="text-gray-300 hover:text-accent-400 transition-colors">About</Link></li>
                  <li><Link to="/gallery" className="text-gray-300 hover:text-accent-400 transition-colors">Gallery</Link></li>
                  <li><Link to="/faq" className="text-gray-300 hover:text-accent-400 transition-colors">FAQ's</Link></li>
                  <li><Link to="/contact" className="text-gray-300 hover:text-accent-400 transition-colors">Contact</Link></li>
                </ul>
              </div>

              {/* Services */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Services</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/services/invisible-grill-for-balconies" className="text-gray-300 hover:text-accent-400 transition-colors">Invisible Grill for Balconies</Link></li>
                  <li><Link to="/services/invisible-grill-for-windows" className="text-gray-300 hover:text-accent-400 transition-colors">Invisible Grill for Windows</Link></li>
                  <li><Link to="/services/invisible-grill-for-apartments" className="text-gray-300 hover:text-accent-400 transition-colors">Invisible Grill for Apartments</Link></li>
                  <li><Link to="/services/pull-dry-cloth-hangers" className="text-gray-300 hover:text-accent-400 transition-colors">Pull & Dry Cloth Hangers</Link></li>
                  <li><Link to="/services/ceiling-cloth-hangers" className="text-gray-300 hover:text-accent-400 transition-colors">Ceiling Cloth Hangers</Link></li>
                  <li><Link to="/services/pull-dry-cloth-hangers-for-balconies" className="text-gray-300 hover:text-accent-400 transition-colors">Pull & Dry Cloth Hangers for Balconies</Link></li>
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Contact Info</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-3">
                  <Phone className="h-4 w-4 text-accent-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 font-semibold">+91 9902730741</p>
                    <p className="text-gray-300 font-semibold">+91 8123288996</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-accent-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">Venkateswara Nagar, Vivekananda Nagar</p>
                    <p className="text-gray-400 text-xs">Hyderabad-500072</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-4 lg:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-400">
                © 2024 Balaji Services. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-accent-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-accent-400 transition-colors">Terms of Service</Link>
              <Link to="/contact" className="hover:text-accent-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
