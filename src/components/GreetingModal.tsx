import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, Phone, MessageCircle } from 'lucide-react';

const GreetingModal: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if greeting has been shown before
    const greetingShown = localStorage.getItem('greetingShown');
    
    if (!greetingShown) {
      // Show greeting after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Mark as shown in localStorage
    localStorage.setItem('greetingShown', 'true');
    setHasShown(true);
  };

  const handleWhatsApp = () => {
    handleClose();
  };

  const handleCall = () => {
    handleClose();
  };

  if (hasShown) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100"></div>
            
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>

            <div className="relative p-8">
              {/* Header */}
              <div className="text-center mb-6">
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex justify-center mb-4"
                >
                  <div className="bg-accent-600 p-4 rounded-full">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                </motion.div>
                
                <motion.h2
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl font-bold text-gray-900 mb-2"
                >
                  Welcome to Taj Safety Nets! 🎉
                </motion.h2>
                
                <motion.p
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-600"
                >
                  Your trusted partner for professional safety nets installation in Hyderabad
                </motion.p>
              </div>

              {/* Features */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="space-y-3 mb-6"
              >
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span>Premium quality safety nets</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span>Expert installation team</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span>15+ years of experience</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span>Serving 60+ areas in Hyderabad</span>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="space-y-3"
              >
                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Chat on WhatsApp
                </button>
                
                <button
                  onClick={handleCall}
                  className="w-full bg-accent-600 hover:bg-accent-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now: +91-9902730741 / +91-8123288996
                </button>
              </motion.div>

              {/* Footer */}
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-center text-xs text-gray-500 mt-4"
              >
                Get a free quote for your safety nets installation
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GreetingModal;
