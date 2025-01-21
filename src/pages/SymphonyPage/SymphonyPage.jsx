import React, { useState } from 'react';
import ProjectTemplate from '../../components/templates/ProjectTemplate';
import DetailedMediaGallery from '../../components/ProjectDetails/DetailedMediaGallery';
import ImageModal from '../../components/ProjectDetails/ImageModal';
import { getProjectById } from '../../data/projects';

export default function SymphonyPage() {
  const project = getProjectById('symphony');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpenModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const MediaShowcaseSection = () => (
    <section className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Visual Overview</h2>
        <p className="text-gray-300">
          A complete redesign of the user interface focusing on intuitive interaction patterns 
          and fluid transitions across all devices.
        </p>
        
        <div className="relative">
          <div className="max-w-sm mx-auto">
            <DetailedMediaGallery
              media={project.media}
              onOpenModal={handleOpenModal}
            />
          </div>
        </div>
      </div>
    </section>
  );


  const AlgorithmSection = () => (
    <section className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Music Analysis Engine</h2>
        <p className="text-gray-300 leading-relaxed">
          One of the most exciting and challenging aspects of Symphony was developing its sophisticated music analysis calculation, 
          which implements Rentfrow's MUSIC psychological model. This model analyzes musical preferences across five key dimensions:
          Mellow, Unpretentious, Sophisticated, Intense, and Contemporary.
        </p>
      </div>

      <div className="space-y-8">
        {/* MUSIC Model Section */}
        <div className="bg-gray-800/50 p-8 rounded-xl">
          <h3 className="text-xl font-semibold text-white mb-6">MUSIC Model Implementation</h3>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Mellow",
                  desc: "Romantic and relaxing music",
                  features: "acousticness 0.8, energy -0.7, valence 0.3, instrumentalness 0.4, danceability -0.2",
                  genres: "jazz, classical, folk, ambient"
                },
                {
                  name: "Unpretentious",
                  desc: "Sincere and conventional music",
                  features: "danceability 0.7, valence 0.6, acousticness 0.4, energy 0.3",
                  genres: "country, pop, folk, rock"
                },
                {
                  name: "Sophisticated",
                  desc: "Complex and creative music",
                  features: "instrumentalness 0.8, acousticness 0.6, danceability -0.3",
                  genres: "classical, jazz, avant-garde, world"
                },
                {
                  name: "Intense",
                  desc: "Forceful and energetic music",
                  features: "energy 0.9, valence -0.4, acousticness -0.7, danceability 0.3",
                  genres: "rock, metal, punk, electronic"
                },
                {
                  name: "Contemporary",
                  desc: "Rhythmic and popular music",
                  features: "danceability 0.8, energy 0.6, valence 0.5, acousticness -0.3",
                  genres: "pop, rap, electronic, r&b"
                }
              ].map((dim) => (
                <div key={dim.name} className="bg-gray-700/50 p-6 rounded-lg space-y-3">
                  <h4 className="text-blue-400 font-medium">{dim.name}</h4>
                  <p className="text-sm text-gray-300">{dim.desc}</p>
                  <p className="text-sm text-gray-400">Features: {dim.features}</p>
                  <p className="text-xs text-gray-500">Common genres: {dim.genres}</p>
                </div>
              ))}
            </div>
            
            <div className="pt-4 space-y-3">
              <h4 className="text-sm font-medium text-gray-400 uppercase">Related Research</h4>
              <div className="space-y-3">
                <a 
                  href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3138530/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Rentfrow's MUSIC Model Research Paper →
                </a>
                <a 
                  href="https://gosling.psy.utexas.edu/wp-content/uploads/2014/09/JPSP03musicdimensions.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Another paper by Rentfrow that provided guidance on mapping Spotify's song features to the MUSIC model →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Matching Algorithm Section */}
        <div className="bg-gray-800/50 p-8 rounded-xl">
          <h3 className="text-xl font-semibold text-white mb-6">Matching Algorithm</h3>
          <div className="space-y-6">
            <p className="text-gray-300">
              The matching system implements a sophisticated three-component weighted analysis system
              that combines multiple factors to create meaningful compatibility scores.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-700/50 rounded-lg">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-gray-200 font-medium">MUSIC Dimensions</h4>
                  <span className="text-blue-400 font-medium">40%</span>
                </div>
                <p className="text-sm text-gray-400">Cosine similarity calculation between user dimension profiles</p>
              </div>
              
              <div className="p-6 bg-gray-700/50 rounded-lg">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-gray-200 font-medium">Audio Features</h4>
                  <span className="text-blue-400 font-medium">30%</span>
                </div>
                <p className="text-sm text-gray-400">Analysis of key Spotify audio characteristics</p>
              </div>
              
              <div className="p-6 bg-gray-700/50 rounded-lg">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-gray-200 font-medium">Genre Distribution</h4>
                  <span className="text-blue-400 font-medium">30%</span>
                </div>
                <p className="text-sm text-gray-400">Frequency-based genre overlap analysis</p>
              </div>
            </div>

            <div className="bg-gray-700/50 p-6 rounded-lg">
              <h4 className="text-gray-200 font-medium mb-3">Score Interpretation</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <div className="space-y-1">
                  <p className="text-gray-300">0.8-1.0</p>
                  <p className="text-gray-400">Extremely high compatibility</p>
                </div>
                <div className="space-y-1">
                  <p className="text-gray-300">0.6-0.8</p>
                  <p className="text-gray-400">High compatibility</p>
                </div>
                <div className="space-y-1">
                  <p className="text-gray-300">0.4-0.6</p>
                  <p className="text-gray-400">Moderate compatibility</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const TechnicalChallengesSection = () => (
    <section className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Technical Implementation Challenges</h2>
        <p className="text-gray-300">
          Building Symphony presented several complex technical challenges that required innovative solutions
          and careful architectural decisions.
        </p>
      </div>

      <div className="space-y-8">
        <div className="bg-gray-800/50 p-8 rounded-xl">
          <h3 className="text-xl font-semibold text-white mb-6">State Management Architecture</h3>
          <div className="space-y-6 text-gray-300">
            <p>
              One of the most significant challenges was implementing a robust state management system that could handle real-time 
              updates and complex app states. The solution was a redesigned state management system using Redux 
              with normalized state structure and optimistic updates.
            </p>
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-gray-400 uppercase">Key Solutions</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Feature-based slice organization",
                  "Socket middleware for real-time events",
                  "Optimistic UI updates"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 p-8 rounded-xl">
          <h3 className="text-xl font-semibold text-white mb-6">Real-time Communication System</h3>
          <div className="space-y-6 text-gray-300">
            <p>
              Building a reliable real-time communication system presented unique challenges, particularly in maintaining 
              consistent message delivery and status across devices, managing websocket connections and information pipelines, and serving new data accordingly. 
            </p>
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-gray-400 uppercase">Implementation Highlights</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-700/50 rounded-lg">
                  <h5 className="font-medium mb-2">Socket.IO Architecture</h5>
                  <p className="text-sm text-gray-400">Bidirectional communication with room-based routing</p>
                </div>
                <div className="p-4 bg-gray-700/50 rounded-lg">
                  <h5 className="font-medium mb-2">Message Deduplication</h5>
                  <p className="text-sm text-gray-400">ClientId system prevents duplicate messages</p>
                </div>
                <div className="p-4 bg-gray-700/50 rounded-lg">
                  <h5 className="font-medium mb-2">Status Tracking</h5>
                  <p className="text-sm text-gray-400">Real-time delivery and read receipts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const PerformanceSection = () => (
    <section className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Performance Optimizations</h2>
        <p className="text-gray-300">
          Performance was a critical focus throughout development, leading to several key optimizations
          across both frontend and backend systems.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-800/50 p-8 rounded-xl">
          <h3 className="text-xl font-semibold text-white mb-6">Frontend Optimizations</h3>
          <div className="space-y-4">
            {[
              ["Page Load Time", "Sub-100ms initial page load time"],
              ["Caching Strategy", ">90% cache hit rate"],
              ["Bundle Size", "<200KB initial load"],
              ["Lazy Loading", "Route-based chunking and code splitting"]
            ].map(([title, description], index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-2 h-2 mt-2 bg-blue-400 rounded-full flex-shrink-0" />
                <div>
                  <h4 className="text-gray-300 font-medium">{title}</h4>
                  <p className="text-sm text-gray-400">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800/50 p-8 rounded-xl">
          <h3 className="text-xl font-semibold text-white mb-6">Backend Performance</h3>
          <div className="space-y-4">
            {[
              ["Message Delivery", "<50ms average latency"],
              ["Database Queries", "Optimized with compound indexing"],
              ["API Rate Limiting", "Redis-based rate management"],
              ["Connection Pool", "Smart WebSocket management"]
            ].map(([title, description], index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-2 h-2 mt-2 bg-blue-400 rounded-full flex-shrink-0" />
                <div>
                  <h4 className="text-gray-300 font-medium">{title}</h4>
                  <p className="text-sm text-gray-400">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  const ImprovementsSection = () => (
    <section className="space-y-6">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white">Key Improvements from lowKEY</h2>
        <p className="text-gray-300">
          Symphony represents a complete rebuild of the original lowKEY project, with significant architectural improvements 
          and enhanced features. This ground-up reconstruction allowed us to implement more sophisticated systems and 
          better user experiences across several key areas:
        </p>
      </div>

      <div className="bg-gray-800/50 p-8 rounded-xl mt-8">
        <div className="space-y-8">
          {/* Music Analysis */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white border-b border-gray-700 pb-2">
              Enhanced Music Analysis
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-700/30 p-6 rounded-lg">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-2 h-2 bg-red-400/50 rounded-full" />
                  <h4 className="text-red-400 font-medium">Original Approach</h4>
                </div>
                <p className="text-sm text-gray-300 mb-4">
                  Simple euclidean distance formula averaging differences across individual 
                  Spotify audio features, treating each feature with equal weight.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Direct feature comparison</li>
                  <li>• Uniform feature weighting</li>
                </ul>
              </div>
              <div className="bg-gray-700/30 p-6 rounded-lg">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-2 h-2 bg-blue-400/50 rounded-full" />
                  <h4 className="text-blue-400 font-medium">Symphony's Solution</h4>
                </div>
                <p className="text-sm text-gray-300 mb-4">
                  Implemented Rentfrow's MUSIC model for a more informed analysis of musical preferences rooted in psychology,
                  with sophisticated feature weighting and genre analysis.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Multi-dimensional analysis</li>
                  <li>• Weighted feature importance</li>
                  <li>• Genre distribution analysis</li>
                  <li>• Psychological preference mapping</li>
                </ul>
              </div>
            </div>
          </div>

          {/* API and Authentication */}
          <div className="space-y-4 pt-6">
            <h3 className="text-xl font-semibold text-white border-b border-gray-700 pb-2">
              API & Authentication Infrastructure
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-700/30 p-6 rounded-lg">
                <h4 className="text-blue-400 font-medium mb-4">Class-based API Utilities</h4>
                <p className="text-sm text-gray-300 mb-4">
                  Centralized API handling with sophisticated token management and request optimization:
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Automatic token refresh with request queuing</li>
                  <li>• Smart retry strategies </li>
                  <li>• Request interceptors for consistent error handling</li>
                </ul>
              </div>
              <div className="bg-gray-700/30 p-6 rounded-lg">
                <h4 className="text-blue-400 font-medium mb-4">Rate Limiting Strategies</h4>
                <p className="text-sm text-gray-300 mb-4">
                  Redis-based rate limiting system with intelligent request management:
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Sliding window implementation for accurate tracking</li>
                  <li>• Request prioritization based on user activity</li>
                  <li>• Batch processing for analytics operations</li>
                  <li>• Graceful degradation during high load</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Image Processing */}
          <div className="space-y-4 pt-6">
            <h3 className="text-xl font-semibold text-white border-b border-gray-700 pb-2">
              Image Processing Pipeline
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-700/30 p-6 rounded-lg">
                <h4 className="text-blue-400 font-medium mb-4">Client-side Processing</h4>
                <p className="text-sm text-gray-300 mb-4">
                  Sophisticated image handling with client-side optimizations:
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Automatic image compression and resizing</li>
                  <li>• Format optimization based on browser support</li>
                  <li>• EXIF data handling and orientation fixing</li>
                  <li>• Real-time preview generation</li>
                </ul>
              </div>
              <div className="bg-gray-700/30 p-6 rounded-lg">
                <h4 className="text-blue-400 font-medium mb-4">Redux Integration</h4>
                <p className="text-sm text-gray-300 mb-4">
                  Seamless state management throughout the upload process:
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Progress tracking with upload estimates</li>
                  <li>• Optimistic updates for immediate feedback</li>
                  <li>• Automatic retry and failure recovery</li>
                  <li>• Background processing with status updates</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Real-time System */}
          <div className="space-y-4 pt-6">
            <h3 className="text-xl font-semibold text-white border-b border-gray-700 pb-2">
              Redesigned Real-time Implementation
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-700/30 p-6 rounded-lg">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-2 h-2 bg-red-400/50 rounded-full" />
                  <h4 className="text-red-400 font-medium">Original System</h4>
                </div>
                <p className="text-sm text-gray-300 mb-4">
                  Basic Socket.IO implementation with limited scope and functionality:
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Simple room-based chat connections</li>
                  <li>• Active chat connections only</li>
                  <li>• Basic message delivery without status</li>
                </ul>
              </div>
              <div className="bg-gray-700/30 p-6 rounded-lg">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-2 h-2 bg-blue-400/50 rounded-full" />
                  <h4 className="text-blue-400 font-medium">Symphony's Solution</h4>
                </div>
                <p className="text-sm text-gray-300 mb-4">
                  Comprehensive real-time system with application-wide updates:
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• User-specific socket rooms with presence tracking</li>
                  <li>• Background message and notification handling</li>
                  <li>• Automatic match notifications and updates</li>
                  <li>• Efficient socket connection pooling</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <ProjectTemplate project={project}>
      <div className="max-w-6xl mx-auto space-y-16">
        <MediaShowcaseSection />
        <ImprovementsSection /> 
        <AlgorithmSection />
        <TechnicalChallengesSection />
        {/* <PerformanceSection /> */}
        <ImageModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          media={project.media}
          initialImage={selectedImage}
        />
      </div>
    </ProjectTemplate>
  );
}