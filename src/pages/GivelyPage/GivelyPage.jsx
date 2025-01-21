import React from 'react';
import ProjectTemplate from '../../components/templates/ProjectTemplate';
import { getProjectById } from '../../data/projects';

export default function GivelyProjectPage() {
  const project = getProjectById('gively');

  const FeedSystemSection = () => (
    <section className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Advanced Feed System</h2>
        <p className="text-gray-300">
          One of the core technical achievements was implementing a sophisticated dual-feed system
          optimized for performance and user engagement.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gray-700/50 p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold text-white">Performance Optimizations</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Initial Load Time</span>
              <span className="text-blue-400 font-medium">60% Reduction</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Database Reads</span>
              <span className="text-blue-400 font-medium">40% Reduction</span>
            </div>
            {/* <div className="flex items-center justify-between">
              <span className="text-gray-300">Cache Hit Ratio</span>
              <span className="text-blue-400 font-medium">80%+</span>
            </div> */}
          </div>
        </div>

        <div className="bg-gray-700/50 p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold text-white">Technical Features</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              Caching system with 30-minute duration
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              Memory-efficient list rendering with optimized FlatList
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              Cursor-based pagination for optimal performance
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              Real-time updates with optimized refresh patterns
            </li>
          </ul>
        </div>
      </div>
    </section>
  );

  const NotificationSystemSection = () => (
    <section className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Intelligent Notification System</h2>
        <p className="text-gray-300">
          Built using Firebase Cloud Functions v2, our notification system efficiently handles
          millions of daily notifications while maintaining cost effectiveness.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-700/50 p-6 rounded-xl">
          <h3 className="text-lg font-semibold text-white mb-4">Smart Grouping</h3>
          <div className="space-y-2 text-gray-300">
            <p>Time-window based aggregation</p>
            <p className="text-sm text-gray-400">Optimized for user experience</p>
          </div>
        </div>

        <div className="bg-gray-700/50 p-6 rounded-xl">
          <h3 className="text-lg font-semibold text-white mb-4">Delivery</h3>
          <div className="space-y-2 text-gray-300">
            <p>Expo Push Notifications</p>
            <p className="text-sm text-gray-400">With robust token management</p>
          </div>
        </div>
      </div>
    </section>
  );

  const RecommendationEngineSection = () => (
    <section className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Friend Recommendation Engine</h2>
        <p className="text-gray-300">
          A sophisticated multi-factor scoring system that improves user connection rates
          through intelligent analysis of various social factors.
        </p>
      </div>

      <div className="bg-gray-700/50 p-6 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Scoring Factors</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">01</span>
                Shared charitable interests analysis
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">02</span>
                Network proximity evaluation
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">03</span>
                Mutual connection assessment
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">04</span>
                User interaction patterns
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Technical Achievement</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Real-time recommendation updates
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Sophisticated caching strategies
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Smart invalidation patterns
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );

  const PostCreationSection = () => (
    <section className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Post Creation & Link Integration</h2>
        <p className="text-gray-300">
          Developed a sophisticated post creation system that seamlessly integrates with various
          charitable platforms while maintaining high performance and user experience.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gray-700/50 p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold text-white">Link Preview System</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              Real-time metadata extraction with fallback strategies
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              Intelligent caching of preview data to reduce API calls
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              Custom preview renderers for different platforms (GoFundMe, Change.org)
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              Progressive loading with placeholder states
            </li>
          </ul>
        </div>

        <div className="bg-gray-700/50 p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold text-white">Platform Integration</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              Automated campaign validation for GoFundMe links
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              Petition status tracking for Change.org campaigns
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              Rich media embedding with accessibility support
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              Cross-platform share functionality
            </li>
          </ul>
        </div>
      </div>
    </section>
  );

  const AuthAndContextSection = () => (
    <section className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Authentication & State Management</h2>
        <p className="text-gray-300">
          Implemented a robust authentication system integrated with React Native and Expo,
          utilizing React Context for efficient state management across the application.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gray-700/50 p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold text-white">Authentication Flow</h3>
          <div className="space-y-3">
            <p className="text-gray-300">
              Designed a seamless authentication system that handles:
            </p>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Multi-provider authentication (Email, Google, Apple)</li>
              <li>• Secure token management with automatic refresh</li>
              <li>• Deep linking support for authentication callbacks</li>
              <li>• Offline session persistence</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-700/50 p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold text-white">Context Architecture</h3>
          <div className="space-y-3">
            <p className="text-gray-300">
              Implemented a sophisticated context system with:
            </p>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Hierarchical context providers for optimal re-rendering</li>
              <li>• Custom hooks for common authentication operations</li>
              <li>• Automatic state synchronization with AsyncStorage</li>
              <li>• Error boundary integration for graceful failure handling</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );

  const InterestMappingSection = () => (
    <section className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Interest & Charity Mapping</h2>
        <p className="text-gray-300">
          Created a sophisticated system for matching user interests with relevant charitable
          causes using multiple API integrations and intelligent categorization.
        </p>
      </div>

      <div className="bg-gray-700/50 p-6 rounded-xl space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Interest Tracking</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Dynamic interest categorization system</li>
              <li>• Weighted interest scoring based on user activity</li>
              <li>• Real-time interest updates from user interactions</li>
              <li>• Potential for machine learning-based interest suggestions</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">API Integration</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• MasterCard Charity API for verified organization data</li>
              <li>• Charity Navigator API for detailed cause information</li>
              <li>• Custom category mapping algorithms</li>
              <li>• Efficient data caching and updates</li>
            </ul>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-600">
          <h3 className="text-lg font-semibold text-white mb-4">Matching Algorithm</h3>
          <p className="text-gray-300 mb-4">
            Implemented a sophisticated matching system that combines multiple data points:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h4 className="text-blue-400 font-medium mb-2">User Interests</h4>
              <p className="text-sm text-gray-400">Weighted scoring based on explicit and implicit signals</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h4 className="text-blue-400 font-medium mb-2">Charity Categories</h4>
              <p className="text-sm text-gray-400">Multi-level categorization with fuzzy matching</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h4 className="text-blue-400 font-medium mb-2">Impact Areas</h4>
              <p className="text-sm text-gray-400">Geographical and cause-based alignment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const FeedImplementationSection = () => (
    <section className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Feed Implementation Details</h2>
        <p className="text-gray-300">
          Engineered a high-performance feed system with sophisticated caching and query
          optimization strategies.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gray-700/50 p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold text-white">Query Optimization</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              Implemented cursor-based pagination with dynamic batch sizes
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              Compound queries for efficient filtering and sorting
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              Strategic denormalization for performance
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              Intelligent index design for common query patterns
            </li>
          </ul>
        </div>

        <div className="bg-gray-700/50 p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold text-white">Memoization Strategy</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              Component-level memoization with React.memo
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              Callback optimization with useCallback
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              Computed value caching with useMemo
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              Virtual list rendering for large datasets
            </li>
          </ul>
        </div>
      </div>
    </section>
  );

  const PersonalJourneySection = () => (
    <section className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Technical Growth & Learning</h2>
        <p className="text-gray-300">
          This project represented a significant learning journey, involving multiple new
          technologies and development paradigms.
        </p>
      </div>

      <div className="bg-gray-700/50 p-6 rounded-xl space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Learning React Native & Expo</h3>
            <p className="text-gray-300 text-sm">
              Transitioning from web development to mobile brought unique challenges and learning opportunities.
              Understanding mobile-specific patterns, navigation systems, and platform-specific behaviors
              required significant adaptation and learning.
            </p>
            <div className="space-y-2">
              <h4 className="text-blue-400 font-medium">Key Learnings:</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• Mobile-specific UI/UX patterns</li>
                <li>• Platform-specific APIs and behaviors</li>
                <li>• Expo development workflow</li>
                <li>• Native module integration</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Firebase Ecosystem</h3>
            <p className="text-gray-300 text-sm">
              Diving into Firebase's ecosystem opened up new possibilities while requiring deep
              understanding of its various services and best practices.
            </p>
            <div className="space-y-2">
              <h4 className="text-blue-400 font-medium">Core Services Mastered:</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• Firestore data modeling and querying</li>
                <li>• Cloud Functions development and deployment</li>
                <li>• Firebase Storage for media handling</li>
                <li>• Firebase Cloud Messaging for notifications</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-600">
          <h3 className="text-lg font-semibold text-white mb-4">Overcoming Challenges</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h4 className="text-blue-400 font-medium mb-2">Initial Hurdles</h4>
              <p className="text-sm text-gray-400">
                Navigating the complexities of mobile development architecture and state management
                required significant research and experimentation.
              </p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h4 className="text-blue-400 font-medium mb-2">Growth Areas</h4>
              <p className="text-sm text-gray-400">
                Developed expertise in performance optimization, offline support, and
                cross-platform development practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // const PerformanceMetricsSection = () => (
  //   <section className="space-y-8">
  //     <div className="space-y-4">
  //       <h2 className="text-2xl font-bold text-white">Performance Metrics</h2>
  //       <p className="text-gray-300">
  //         Achieved significant performance improvements across key metrics through
  //         sophisticated optimization strategies.
  //       </p>
  //     </div>

  //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  //       {[
  //         ["Feed Load Time", "60%", "Reduction in initial load"],
  //         ["Database Efficiency", "40%", "Reduction in reads"],
  //         ["User Connections", "40%", "Improvement in rates"],
  //         ["Cache Performance", "80%", "Hit ratio achieved"]
  //       ].map(([title, value, description], index) => (
  //         <div key={index} className="bg-gray-700/50 p-6 rounded-xl">
  //           <h3 className="text-sm text-gray-400 uppercase">{title}</h3>
  //           <div className="mt-2 mb-1">
  //             <span className="text-2xl font-bold text-blue-400">{value}</span>
  //           </div>
  //           <p className="text-sm text-gray-500">{description}</p>
  //         </div>
  //       ))}
  //     </div>
  //   </section>
  // );

  return (
    <ProjectTemplate project={project}>
      <div className="max-w-6xl mx-auto space-y-16">
        <PersonalJourneySection />
        <PostCreationSection />
        <FeedImplementationSection />
        <AuthAndContextSection />
        <FeedSystemSection />
        <NotificationSystemSection />
        <RecommendationEngineSection />
        <InterestMappingSection />
        {/* <PerformanceMetricsSection /> */}
      </div>
    </ProjectTemplate>
  );
}

