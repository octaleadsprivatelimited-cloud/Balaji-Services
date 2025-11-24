import React, { useState, useEffect } from 'react';
import SafeImage from '../components/SafeImage';

const ImageTest: React.FC = () => {
  const [testResults, setTestResults] = useState<{ [key: string]: 'loading' | 'success' | 'error' }>({});
  
  const testImages = [
    { name: 'Balcony Safety Nets', path: '/images/safety-nets/balcony-safety-nets-1.webp' },
    { name: 'Pigeon Nets', path: '/images/safety-nets/pigeon-nets.webp' },
    { name: 'Cricket Practice Nets', path: '/images/safety-nets/cricket-practice-nets.webp' },
    { name: 'Terrace Top Nets', path: '/images/safety-nets/terrace-top-nets.webp' },
    { name: 'Sports Nets Installation', path: '/images/safety-nets/sports-nets-installation.avif' },
    { name: 'Industrial Safety Nets', path: '/images/safety-nets/industrial-safety-nets.webp' },
    { name: 'Invisible Nets', path: '/images/safety-nets/invisible-nets.webp' },
    { name: 'Kids Safety Nets', path: '/images/safety-nets/kids-safety-nets.jpg' }
  ];

  useEffect(() => {
    testImages.forEach(({ name, path }) => {
      setTestResults(prev => ({ ...prev, [name]: 'loading' }));
      
      const img = new Image();
      img.onload = () => {
        setTestResults(prev => ({ ...prev, [name]: 'success' }));
      };
      img.onerror = () => {
        setTestResults(prev => ({ ...prev, [name]: 'error' }));
      };
      img.src = path;
    });
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'text-green-600';
      case 'error': return 'text-red-600';
      case 'loading': return 'text-yellow-600';
      default: return 'text-gray-600';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success': return '✅';
      case 'error': return '❌';
      case 'loading': return '⏳';
      default: return '❓';
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Image Loading Test</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testImages.map(({ name, path }) => (
            <div key={name} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">{name}</h3>
              
              <div className="mb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <span className={getStatusColor(testResults[name] || 'loading')}>
                    {getStatusIcon(testResults[name] || 'loading')}
                  </span>
                  <span className="text-sm font-mono text-gray-600">{path}</span>
                </div>
                <div className={`text-sm ${getStatusColor(testResults[name] || 'loading')}`}>
                  {testResults[name] === 'success' && 'Image loaded successfully'}
                  {testResults[name] === 'error' && 'Failed to load image'}
                  {testResults[name] === 'loading' && 'Testing image...'}
                </div>
              </div>
              
              <div className="h-32 bg-gray-100 rounded-lg overflow-hidden">
                <SafeImage
                  src={path}
                  alt={name}
                  className="w-full h-full object-cover"
                  fallback="/images/safety-nets/balcony-safety-nets-1.webp"
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Test Results Summary</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-green-600">
                {Object.values(testResults).filter(status => status === 'success').length}
              </div>
              <div className="text-sm text-gray-600">Success</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-red-600">
                {Object.values(testResults).filter(status => status === 'error').length}
              </div>
              <div className="text-sm text-gray-600">Failed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-600">
                {Object.values(testResults).filter(status => status === 'loading').length}
              </div>
              <div className="text-sm text-gray-600">Loading</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageTest;
