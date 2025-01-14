import React, { useState, useEffect } from 'react';

const OptimizedBackground = ({ 
  imagePath,
  className = '',
  children,
  asBackground = false
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadAppropriateImage = () => {
      const width = window.innerWidth;
      
      // Extract the base path and filename
      const lastSlashIndex = imagePath.lastIndexOf('/');
      const basePath = imagePath.substring(0, lastSlashIndex);
      const filename = imagePath.substring(lastSlashIndex + 1, imagePath.lastIndexOf('.'));
      
      // Determine size suffix
      let size;
      if (width <= 640) {
        size = 'sm';
      } else if (width <= 1024) {
        size = 'md';
      } else {
        size = 'lg';
      }
      
      // Construct the path to the processed image
      const webpPath = `${basePath}/processed/${filename}-${size}.webp`;
      console.log('Attempting to load optimized image:', webpPath);
      return webpPath;
    };

    const loadImage = () => {
      const img = new Image();
      const optimizedSrc = loadAppropriateImage();
      
      img.onload = () => {
        console.log('Successfully loaded optimized image:', optimizedSrc);
        setCurrentSrc(optimizedSrc);
        setImageLoaded(true);
        setError(null);
      };
      
      img.onerror = (e) => {
        console.warn('Failed to load optimized image, falling back to original:', imagePath);
        const fallbackImg = new Image();
        
        fallbackImg.onload = () => {
          console.log('Successfully loaded fallback image');
          setCurrentSrc(imagePath);
          setImageLoaded(true);
          setError(null);
        };
        
        fallbackImg.onerror = () => {
          console.error('Both optimized and fallback images failed to load');
          setError('Failed to load image');
        };
        
        fallbackImg.src = imagePath;
      };
      
      img.src = optimizedSrc;
    };

    loadImage();

    const handleResize = () => {
      setImageLoaded(false);
      loadImage();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [imagePath]);

  // If used as a background element
  if (asBackground) {
    return (
      <div 
        style={{ backgroundImage: currentSrc ? `url("${currentSrc}")` : undefined }}
        className={`transition-opacity duration-500 ${className} ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Background placeholder */}
        <div 
          className={`absolute inset-0 bg-gray-900 transition-opacity duration-500 ${
            imageLoaded ? 'opacity-0' : 'opacity-100'
          }`} 
        />
        
        {error && (
          <div className="absolute inset-0 flex items-center justify-center text-red-500">
            {error}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative w-full">
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        <div 
          className={`absolute inset-0 bg-gray-900 transition-opacity duration-500 ${
            imageLoaded ? 'opacity-0' : 'opacity-100'
          }`} 
        />
        
        {currentSrc && (
          <div
            style={{ backgroundImage: `url("${currentSrc}")` }}
            className={`absolute inset-0 transition-opacity duration-500 ${className} ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}
        
        {error && (
          <div className="absolute inset-0 flex items-center justify-center text-red-500">
            {error}
          </div>
        )}
      </div>
      
      <div className="relative">
        {children}
      </div>
    </div>
  );
};

export default OptimizedBackground;