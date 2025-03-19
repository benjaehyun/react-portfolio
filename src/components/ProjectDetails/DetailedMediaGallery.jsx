import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Maximize2 } from 'lucide-react';

const DetailedMediaGallery = ({ 
  media,
  previewImages = [],
  onOpenModal,
  className = ''
}) => {
  const [currentType, setCurrentType] = useState('screenshots');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [touchStart, setTouchStart] = useState(0);

  const getMediaArray = useCallback(() => {
    if (media?.mobile?.[currentType]?.length) {
      return media.mobile[currentType].map(item => 
        typeof item === 'string' ? { src: item } : item
      );
    }
    return previewImages.map(item => 
      typeof item === 'string' ? { src: item } : item
    );
  }, [media, previewImages, currentType]);

  const mediaArray = getMediaArray();
  const hasMultipleItems = mediaArray.length > 1;
  const hasAnimations = media?.mobile?.animations?.length > 0;
  const currentItem = mediaArray[currentIndex];
  
  const handleTouchStart = (e) => {
    setIsSwiping(false);
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!hasMultipleItems || isSwiping) return;
    
    const touchDelta = touchStart - e.touches[0].clientX;
    if (Math.abs(touchDelta) > 50) {
      setIsSwiping(true);
      if (touchDelta > 0) {
        nextImage(e);
      } else {
        prevImage(e);
      }
    }
  };

  const prevImage = useCallback((e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentIndex((prev) => (prev - 1 + mediaArray.length) % mediaArray.length);
  }, [mediaArray.length]);

  const nextImage = useCallback((e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentIndex((prev) => (prev + 1) % mediaArray.length);
  }, [mediaArray.length]);

  if (!mediaArray.length) return null;

  const currentMedia = typeof currentItem === 'string' 
    ? { src: currentItem, description: '' }
    : currentItem;

  const isAnimation = typeof currentItem === 'string' 
    ? currentItem?.toLowerCase().endsWith('.gif')
    : currentItem?.src?.toLowerCase().endsWith('.gif');
  const hasMobileContent = Boolean(media?.mobile);

  const MediaTypeToggle = () => (
    <div className="flex md:flex-col space-x-2 md:space-x-0 md:space-y-2">
      <button
        onClick={() => {
          setCurrentType('screenshots');
          setCurrentIndex(0);
        }}
        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
          currentType === 'screenshots'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-700 text-gray-300 hover:text-white'
        }`}
      >
        Screenshots
      </button>
      <button
        onClick={() => {
          setCurrentType('animations');
          setCurrentIndex(0);
        }}
        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
          currentType === 'animations'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-700 text-gray-300 hover:text-white'
        }`}
      >
        Animations
      </button>
    </div>
  );

  return (
    <div className={`${className}`}>
      {/* Container for mobile toggle */}
      {hasAnimations && (
        <div className="md:hidden flex justify-center mb-2">
          <MediaTypeToggle />
        </div>
      )}

      {/* desktop container  */}
      <div className="md:flex md:justify-center md:items-start">
        {/* media wrapper */}
        <div className="w-full max-w-sm">
          <div 
            className="relative bg-gray-900 rounded-lg overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            <div className="relative" style={{ aspectRatio: hasMobileContent ? '9/16' : '16/9' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative w-full h-full flex items-center justify-center group">
                    <img
                      src={currentMedia.src}
                      alt="Project preview"
                      className={`${hasMobileContent ? 'h-full w-auto' : 'w-full h-full object-cover'}`}
                    />
                    
                    <button
                      onClick={() => onOpenModal(currentItem)}
                      className="absolute top-4 left-4 p-2 bg-black/50 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label="View fullscreen"
                    >
                      <Maximize2 className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>

              {hasMultipleItems && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            {currentMedia.description && (
              <div className="mt-4 p-4 bg-gray-800 rounded-md">
                <p className="text-gray-200 text-sm md:text-base">{currentMedia.description}</p>
              </div>
            )}
          </div>

          {hasMultipleItems && (
            <div className="mt-4 grid grid-cols-4 md:grid-cols-5 gap-2 md:gap-3">
              {mediaArray.map((item, idx) => {
                const thumbItem = typeof item === 'string' ? { src: item } : item;
                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`relative aspect-[9/16] rounded-lg overflow-hidden ${
                      idx === currentIndex ? 'ring-2 ring-blue-500' : 'hover:ring-2 hover:ring-gray-400'
                    }`}
                  >
                    <img
                      src={thumbItem.src}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Desktop toggle */}
        {hasAnimations && (
          <div className="hidden md:block ml-4">
            <MediaTypeToggle />
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailedMediaGallery;