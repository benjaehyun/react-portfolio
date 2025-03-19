import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ChevronRight, ChevronLeft } from 'lucide-react';

const ProjectPreview = ({ 
  title, 
  description,
  shortDescription, 
  technologies, 
  previewImages = [],
  media,
  githubUrl,
  liveUrl,
  projectLink,
  status,
  keyFeatures = []
}) => {
  const [currentMediaType, setCurrentMediaType] = useState('screenshots');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [touchStart, setTouchStart] = useState(0);

  const getMediaArray = useCallback(() => {
    if (media?.mobile) {
      const selectedMedia = media.mobile[currentMediaType];
      return selectedMedia?.length ? selectedMedia.map(item => 
        typeof item === 'string' ? item : item.src
      ) : [];
    }
    return previewImages?.length ? previewImages : [];
  }, [media, previewImages, currentMediaType]);

  const mediaArray = getMediaArray();
  const hasMultipleItems = mediaArray.length > 1;
  const hasAnimations = media?.mobile?.animations?.length > 0;
  const hasAnyMedia = mediaArray.length > 0;
  
  const handleTouchStart = (e) => {
    setIsSwiping(false);
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!hasMultipleItems) return;
    
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

  const handleImageClick = useCallback((e) => {
    if (isSwiping) {
      e.preventDefault();
      return;
    }
  }, [isSwiping]);

  const currentItem = mediaArray[currentIndex];
  const isAnimation = currentItem?.toLowerCase().endsWith('.gif');
  const hasMobileContent = media?.mobile;

  return (
    <div className="group h-full">
      <Link to={`/projects/${projectLink}`} className="h-full block">
        <motion.div
          className="relative w-full h-full bg-gray-800/50 rounded-xl overflow-hidden hover:bg-gray-800/70 transition-colors flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 p-6 flex-grow">
            {/* Project Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <h3 className="text-2xl font-bold text-white">{title}</h3>
                {status === 'ongoing' && (
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                    Ongoing
                  </span>
                )}
              </div>

              <p className="text-gray-300 md:hidden">{shortDescription}</p>
              <p className="text-gray-300 hidden md:block">{description}</p>

              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {keyFeatures?.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-white">Key Features</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {keyFeatures.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-start text-gray-300 text-sm">
                        <ChevronRight className="w-4 h-4 mt-0.5 mr-1 text-blue-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Links */}
              <div className="flex items-center space-x-4 pt-2">
                {(githubUrl || liveUrl) && (
                  <div className="flex space-x-2">
                    {githubUrl && (
                      <button
                        className="p-3 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(githubUrl, '_blank', 'noopener,noreferrer');
                        }}
                      >
                        <Github className="w-5 h-5" />
                      </button>
                    )}
                    {liveUrl && (
                      <button
                        className="p-3 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(liveUrl, '_blank', 'noopener,noreferrer');
                        }}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Media Preview */}
            <div className="order-first md:order-last relative">
              {/* Media type toggle */}
              {hasAnimations && (
                <div className="absolute top-2 right-2 z-10 flex space-x-2 bg-black/50 rounded-lg p-1">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setCurrentMediaType('screenshots');
                      setCurrentIndex(0);
                    }}
                    className={`px-3 py-1 rounded-md text-sm transition-colors ${
                      currentMediaType === 'screenshots' 
                        ? 'bg-blue-500 text-white' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    Screenshots
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setCurrentMediaType('animations');
                      setCurrentIndex(0);
                    }}
                    className={`px-3 py-1 rounded-md text-sm transition-colors ${
                      currentMediaType === 'animations' 
                        ? 'bg-blue-500 text-white' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    Animations
                  </button>
                </div>
              )}

              {/* Media Content */}
              {hasAnyMedia ? (
                <div 
                  className="relative h-64 sm:h-72 md:h-80 rounded-lg overflow-hidden bg-gray-900"
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                >
                  <AnimatePresence initial={false} mode="wait">
                    <motion.div
                      key={currentIndex}
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                    >
                      {hasMobileContent ? (
                        <div className="relative h-full w-auto max-w-full flex items-center justify-center">
                          <img
                            src={currentItem}
                            alt={`${title} preview ${currentIndex + 1}`}
                            className="h-full w-auto object-contain"
                            onClick={handleImageClick}
                          />
                        </div>
                      ) : (
                        <img
                          src={currentItem}
                          alt={`${title} preview ${currentIndex + 1}`}
                          className="w-full h-full object-cover"
                          onClick={handleImageClick}
                        />
                      )}
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation arrows - always visible on mobile */}
                  {hasMultipleItems && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full md:opacity-0 md:group-hover:opacity-100 transition-opacity"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full md:opacity-0 md:group-hover:opacity-100 transition-opacity"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </>
                  )}

                  {/* Dot indicators */}
                  {hasMultipleItems && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-black/50 rounded-full px-3 py-1.5">
                      {mediaArray.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setCurrentIndex(idx);
                          }}
                          className={`w-2.5 h-2.5 rounded-full transition-colors ${
                            idx === currentIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
                          }`}
                          aria-label={`Go to image ${idx + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="relative h-64 sm:h-72 md:h-80 rounded-lg overflow-hidden bg-gray-800 flex items-center justify-center">
                  <div className="text-gray-400 text-lg">No preview available</div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </Link>
    </div>
  );
};

export default ProjectPreview;