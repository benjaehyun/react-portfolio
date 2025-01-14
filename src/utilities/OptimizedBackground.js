import React, { useState, useEffect } from 'react';

const OptimizedBackground = ({ 
  imagePath,
  className = '',
  children 
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadAppropriateImage = () => {
      const width = window.innerWidth;
      const baseUrl = imagePath.substring(0, imagePath.lastIndexOf('.'));
      console.log('Base URL:', baseUrl);
      
      let size;
      if (width <= 640) {
        size = 'sm';
      } else if (width <= 1024) {
        size = 'md';
      } else {
        size = 'lg';
      }
      
      const webpPath = `${baseUrl}-${size}.webp`;
      console.log('Attempting to load:', webpPath);
      return webpPath;
    };

    const loadImage = () => {
      const img = new Image();
      const src = loadAppropriateImage();
      
      img.onload = () => {
        console.log('Image loaded successfully:', src);
        setCurrentSrc(src);
        setImageLoaded(true);
        setError(null);
      };
      
      img.onerror = (e) => {
        console.error('Failed to load WebP image:', src);
        const fallbackSrc = imagePath;
        console.log('Trying fallback:', fallbackSrc);
        
        const fallbackImg = new Image();
        fallbackImg.onload = () => {
          console.log('Fallback image loaded successfully');
          setCurrentSrc(fallbackSrc);
          setImageLoaded(true);
          setError(null);
        };
        
        fallbackImg.onerror = () => {
          console.error('Both WebP and fallback failed to load');
          setError('Failed to load image');
        };
        
        fallbackImg.src = fallbackSrc;
      };
      
      img.src = src;
    };

    loadImage();

    const handleResize = () => {
      setImageLoaded(false);
      loadImage();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [imagePath]);

  return (
    <div className="relative w-full">
      {/* Background layers container with pointer-events-none */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        {/* Low-res background placeholder */}
        <div 
          className={`absolute inset-0 bg-gray-900 transition-opacity duration-500 ${
            imageLoaded ? 'opacity-0' : 'opacity-100'
          }`} 
        />
        
        {/* Main background image */}
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
      
      {/* Content container */}
      <div className="relative">
        {children}
      </div>
    </div>
  );
};

export default OptimizedBackground;