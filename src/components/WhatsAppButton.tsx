import React from 'react';
import { useLocation } from 'react-router-dom';

const WhatsAppButton: React.FC = () => {
  const location = useLocation();
  
  // Don't show button on landing page
  const isLandingPage = location.pathname === '/landing';

  // Don't render anything
  if (isLandingPage) {
    return null;
  }

  return null;
};

export default WhatsAppButton;
