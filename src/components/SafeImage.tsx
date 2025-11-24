import React, { useState, useEffect } from 'react';
import { loadImage, getImagePath } from '../utils/imageLoader';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  fallback?: string;
  onError?: () => void;
}

const SafeImage: React.FC<SafeImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  style = {},
  fallback = '/images/safety-nets/balcony-safety-nets-1.webp',
  onError
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setCurrentSrc(src);
    setHasError(false);
    setIsLoading(true);
    
    // Try to load the image with our loader
    loadImage(src)
      .then((loadedSrc) => {
        setCurrentSrc(loadedSrc);
        setIsLoading(false);
      })
      .catch(() => {
        setHasError(true);
        setCurrentSrc(fallback);
        setIsLoading(false);
        onError?.();
      });
  }, [src, fallback, onError]);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setCurrentSrc(fallback);
      setIsLoading(false);
      onError?.();
    }
  };

  if (isLoading) {
    return (
      <div 
        className={`${className} bg-gray-200 animate-pulse flex items-center justify-center`}
        style={style}
      >
        <div className="text-gray-400 text-sm">Loading...</div>
      </div>
    );
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      style={style}
      onError={handleError}
      loading="lazy"
      onLoad={() => {
        setHasError(false);
        setIsLoading(false);
      }}
    />
  );
};

export default SafeImage;
