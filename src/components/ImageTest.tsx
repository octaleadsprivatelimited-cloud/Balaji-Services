import React, { useState, useEffect } from 'react';

const ImageTest: React.FC = () => {
  const [testResults, setTestResults] = useState<{ [key: string]: boolean }>({});
  
  const testImages = [
    '/images/safety-nets/balcony-safety-nets-1.webp',
    '/images/safety-nets/pigeon-nets.webp',
    '/images/safety-nets/cricket-practice-nets.webp',
    '/images/safety-nets/terrace-top-nets.webp',
    '/images/safety-nets/industrial-safety-nets.webp',
    '/images/safety-nets/sports-nets-installation.avif'
  ];

  useEffect(() => {
    testImages.forEach(imagePath => {
      const img = new Image();
      img.onload = () => {
        setTestResults(prev => ({ ...prev, [imagePath]: true }));
      };
      img.onerror = () => {
        setTestResults(prev => ({ ...prev, [imagePath]: false }));
      };
      img.src = imagePath;
    });
  }, []);

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Image Loading Test</h3>
      <div className="space-y-2">
        {testImages.map(imagePath => (
          <div key={imagePath} className="flex items-center space-x-2">
            <span className="w-4 h-4 rounded-full" style={{
              backgroundColor: testResults[imagePath] === true ? '#10B981' : 
                              testResults[imagePath] === false ? '#EF4444' : '#6B7280'
            }}></span>
            <span className="text-sm font-mono">{imagePath}</span>
            <span className="text-xs text-gray-500">
              {testResults[imagePath] === true ? '✓ Loaded' : 
               testResults[imagePath] === false ? '✗ Failed' : '⏳ Testing...'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageTest;
