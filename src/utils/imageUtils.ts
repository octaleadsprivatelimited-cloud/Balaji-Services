// Utility functions for handling images
export const getImagePath = (imageName: string): string => {
  // Remove spaces and replace with hyphens for URL-safe paths
  const safeName = imageName.replace(/\s+/g, '-').replace(/[()]/g, '');
  return `/images/safety-nets/${safeName}`;
};

// Fallback images for different service types
export const getFallbackImage = (serviceType: string): string => {
  const fallbacks: { [key: string]: string } = {
    'balcony': '/images/safety-nets/balcony-safety-nets-1.webp',
    'pigeon': '/images/safety-nets/pigeon-nets.webp',
    'cricket': '/images/safety-nets/cricket-practice-nets.webp',
    'kids': '/images/safety-nets/terrace-top-nets.webp',
    'anti-bird': '/images/safety-nets/bird-spikes.webp',
    'pets': '/images/safety-nets/duct-area-safety-nets.webp',
    'construction': '/images/safety-nets/industrial-safety-nets.webp',
    'gardening': '/images/safety-nets/open-area-safety-nets.webp',
    'industrial': '/images/safety-nets/industrial-safety-nets.webp',
    'sports': '/images/safety-nets/cricket-practice-nets.webp',
    'swimming': '/images/safety-nets/staircase-safety-nets.webp',
    'window': '/images/safety-nets/terrace-top-nets.webp',
    'invisible': '/images/safety-nets/invisible-nets.webp'
  };
  
  return fallbacks[serviceType.toLowerCase()] || '/images/safety-nets/balcony-safety-nets-1.webp';
};

// Check if image exists and return fallback if not
export const getSafeImagePath = (imageName: string, fallbackType?: string): string => {
  try {
    // For now, just return the safe path
    // In a real implementation, you might want to check if the file exists
    return getImagePath(imageName);
  } catch (error) {
    console.warn(`Image not found: ${imageName}, using fallback`);
    return fallbackType ? getFallbackImage(fallbackType) : '/images/safety-nets/balcony-safety-nets-1.webp';
  }
};
