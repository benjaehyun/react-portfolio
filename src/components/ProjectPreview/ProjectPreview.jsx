import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ChevronRight, ChevronLeft } from 'lucide-react';

const ProjectPreview = ({ 
  title, 
  description, 
  technologies, 
  images,
  githubUrl,
  liveUrl,
  projectLink,
  status,
  keyFeatures = []
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = useCallback((e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback((e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goToImage = useCallback((index, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentImageIndex(index);
  }, []);

  return (
    <div className="group">
      <Link to={`projects/${projectLink}`}>
        <motion.div
          className="relative w-full bg-gray-800/50 rounded-xl overflow-hidden hover:bg-gray-800/70 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 p-6">
            {/* Project Info Section */}
            <div className="space-y-4 order-2 md:order-1">
              <div className="flex items-center space-x-3">
                <h3 className="text-2xl font-bold text-white">{title}</h3>
                {status === 'ongoing' && (
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                    Ongoing
                  </span>
                )}
              </div>

              <p className="text-gray-300">{description}</p>

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

              {keyFeatures.length > 0 && (
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

              {/* External Links */}
              <div className="flex items-center space-x-4 pt-2">
                {(githubUrl || liveUrl) && (
                  <div className="flex space-x-2">
                    {githubUrl && (
                      <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {liveUrl && (
                      <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Project Preview Section */}
            <div className="relative h-64 sm:h-72 md:h-80 rounded-lg overflow-hidden order-1 md:order-2">
              {/* Images */}
              <div className="relative h-full bg-gray-900">
                <AnimatePresence initial={false} mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={images[currentImageIndex]}
                    alt={`${title} preview ${currentImageIndex + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  />
                </AnimatePresence>
              </div>

              {/* Navigation Controls - Always visible on mobile, hover on desktop */}
              {images.length > 1 && (
                <>
                  <div className="absolute inset-y-0 left-0 flex items-center md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={prevImage}
                      className="p-3 m-2 bg-black/50 rounded-full text-white hover:bg-black/75 transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={nextImage}
                      className="p-3 m-2 bg-black/50 rounded-full text-white hover:bg-black/75 transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>

                  {/* Image Navigation Dots */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-black/50 rounded-full px-3 py-1.5">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={(e) => goToImage(index, e)}
                        className={`w-2.5 h-2.5 rounded-full transition-colors ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </motion.div>
      </Link>
    </div>
  );
};

export default ProjectPreview;