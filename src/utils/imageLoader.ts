// Image loader utility for production deployment
export const loadImage = (src: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(src);
    img.onerror = () => {
      // Try alternative paths
      const alternatives = [
        src.replace('/images/', '/static/images/'),
        src.replace('/images/', '/assets/images/'),
        src.replace('/images/', '/public/images/'),
        // Fallback to a working image
        '/images/safety-nets/balcony-safety-nets-1.webp'
      ];
      
      let currentIndex = 0;
      const tryNext = () => {
        if (currentIndex >= alternatives.length) {
          reject(new Error('All image paths failed'));
          return;
        }
        
        const altImg = new Image();
        altImg.onload = () => resolve(alternatives[currentIndex]);
        altImg.onerror = () => {
          currentIndex++;
          tryNext();
        };
        altImg.src = alternatives[currentIndex];
      };
      
      tryNext();
    };
    img.src = src;
  });
};

// Get the correct image path for the current environment
export const getImagePath = (imageName: string): string => {
  // In production, sometimes the path needs to be different
  if (process.env.NODE_ENV === 'production') {
    // Try different path formats that work in production
    return `/images/safety-nets/${imageName}`;
  }
  return `/images/safety-nets/${imageName}`;
};

// Preload critical images
export const preloadImages = async (imagePaths: string[]): Promise<void> => {
  const promises = imagePaths.map(path => loadImage(path));
  await Promise.allSettled(promises);
};
