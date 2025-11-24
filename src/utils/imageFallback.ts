// Fallback images for services
export const getImageFallback = (imagePath: string): string => {
  // If the image path is valid, return it
  if (imagePath && imagePath.startsWith('/images/')) {
    return imagePath;
  }
  
  // Return a default fallback image
  return '/images/safety-nets/balcony-safety-nets-1.webp';
};

// Check if image exists and return fallback if not
export const getSafeImagePath = (imagePath: string, fallbackPath: string = '/images/safety-nets/balcony-safety-nets-1.webp'): string => {
  return imagePath || fallbackPath;
};
