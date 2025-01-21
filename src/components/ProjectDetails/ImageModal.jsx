import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const ImageModal = ({ 
  isOpen, 
  onClose, 
  media,
  previewImages = [],
  initialImage = null
}) => {
  // Get all media items
  const allMedia = [
    ...(media?.mobile?.screenshots?.map(item => 
      typeof item === 'string' ? { src: item } : item
    ) || []),
    ...(media?.mobile?.animations?.map(item => 
      typeof item === 'string' ? { src: item } : item
    ) || []),
    ...(previewImages.map(item => 
      typeof item === 'string' ? { src: item } : item
    ))
  ];

  // find initial indexfrom initialImage
  const initialIndex = initialImage 
    ? allMedia.findIndex(item => item.src === initialImage)
    : 0;

  const [currentIndex, setCurrentIndex] = useState(initialIndex >= 0 ? initialIndex : 0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          setCurrentIndex((prev) => 
            (prev - 1 + allMedia.length) % allMedia.length
          );
          break;
        case 'ArrowRight':
          setCurrentIndex((prev) => 
            (prev + 1) % allMedia.length
          );
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, allMedia.length, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || allMedia.length === 0) return null;

  const currentItem = allMedia[currentIndex];
  const isAnimation = currentItem.src?.toLowerCase().endsWith('.gif');
  const hasMobileContent = Boolean(media?.mobile);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* background */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Content */}
      <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white bg-black/50 rounded-full transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* main  container */}
        <div className="relative max-w-7xl w-full h-full flex flex-col items-center justify-center">
          {/* Nav */}
          {allMedia.length > 1 && (
            <>
              <button
                onClick={() => setCurrentIndex((prev) => 
                  (prev - 1 + allMedia.length) % allMedia.length
                )}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 text-gray-400 hover:text-white bg-black/50 rounded-full transition-colors z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => setCurrentIndex((prev) => 
                  (prev + 1) % allMedia.length
                )}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 text-gray-400 hover:text-white bg-black/50 rounded-full transition-colors z-10"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Image container */}
          <div className="relative max-h-[80vh] w-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="relative flex items-center justify-center"
              >
                <img
                  src={currentItem.src}
                  alt="Full screen preview"
                  className={`max-h-[75vh] ${hasMobileContent ? 'w-auto' : 'max-w-full'} object-contain`}
                  onClick={(e) => e.stopPropagation()}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* description and counter */}
          <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center space-y-4">
            {currentItem.description && (
              <div className="px-6 py-3 bg-black/75 text-white rounded-lg max-w-2xl text-center">
                {currentItem.description}
              </div>
            )}
            {allMedia.length > 1 && (
              <div className="px-3 py-1.5 bg-black/50 text-white rounded-full text-sm">
                {currentIndex + 1} / {allMedia.length}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;