import React, { useState } from 'react';
import ProjectTemplate from '../../components/templates/ProjectTemplate';
import DetailedMediaGallery from '../../components/ProjectDetails/DetailedMediaGallery';
import ImageModal from '../../components/ProjectDetails/ImageModal';
import { getProjectById } from '../../data/projects';

export default function PomodoroProjectPage() {
  const project = getProjectById('pomodoro');
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
          A user interface focusing on responsiveness and touch optimization for a variety of use-cases.
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

  const TimerSystemSection = () => (
    <section className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white"> Timer System</h2>
        <p className="text-gray-300">
          The heart of the application lies in its timer implementation, 
          which maintains millisecond accuracy even during background operations and dynamic adjustments to cycle changes.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-blue-400 font-medium">Core Timer Logic</h3>
          <div className="bg-gray-700/50 p-4 rounded-lg space-y-3">
            <p className="text-gray-300">Key implementation features:</p>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• High-precision RAF-based timer loop</li>
              <li>• Background tab compensation using page visibility API</li>
              <li>• Device sleep state detection and recovery</li>
              <li>• Cross-device state synchronization</li>
            </ul>
            <p className="text-gray-300 text-sm mt-4">
              Achieved sub-16ms accuracy through careful performance optimization and state management.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-blue-400 font-medium">Timer State Management</h3>
          <div className="bg-gray-700/50 p-4 rounded-lg space-y-3">
            <p className="text-gray-300">Complex state handling for:</p>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Multiple timer phases and ordering</li>
              <li>• Automatic phase transitions</li>
              <li>• Progress tracking and statistics</li>
              <li>• User interruptions and resumptions</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );

  const StateManagementSection = () => (
    <section className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Complex State Management</h2>
        <p className="text-gray-300">
          First deep dive into Redux Toolkit and service workers, implementing sophisticated state patterns for handling 
          complex timer states, user preferences, and offline capabilities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-700/50 p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold text-white">Redux Implementation</h3>
          <div className="space-y-3">
            <div className="space-y-2">
              <h4 className="text-blue-400 font-medium">State Structure</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• Normalized timer configurations</li>
                <li>• Session history and statistics</li>
                <li>• User preferences and settings</li>
                <li>• Offline changes queue</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-blue-400 font-medium">Performance Optimizations</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• Memoized selectors for derived data</li>
                <li>• Optimistic UI updates</li>
                <li>• Batched state updates</li>
                <li>• State persistence strategies</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-700/50 p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold text-white">State Persistence</h3>
          <div className="space-y-3">
            <div className="space-y-2">
              <h4 className="text-blue-400 font-medium">Multi-layer Storage</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• IndexedDB for offline data</li>
                <li>• Local storage for preferences</li>
                <li>• Service worker caching</li>
                <li>• State rehydration system</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const PWAFeaturesSection = () => (
    <section className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Progressive Web App Features</h2>
        <p className="text-gray-300">
          First implementation of a full PWA, focusing on offline capabilities 
          and native-like user experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-700/50 p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold text-white">Offline Architecture</h3>
          <div className="space-y-2">
            <h4 className="text-blue-400 font-medium">Core Features</h4>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>• Complete offline functionality</li>
              <li>• Background sync for changes</li>
              <li>• Conflict resolution system</li>
              <li>• Automatic state recovery</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-700/50 p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold text-white">Native Experience</h3>
          <div className="space-y-2">
            <h4 className="text-blue-400 font-medium">UX Features</h4>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>• App-like navigation</li>
              <li>• Browser notifications</li>
              <li>• Home screen installation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );

  const UXFeaturesSection = () => (
    <section className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">User Experience Features</h2>
        <p className="text-gray-300">
          Focused on creating an intuitive and delightful user experience through 
          careful attention to detail and user feedback.
        </p>
      </div>

      <div className="grid grid-cols-1  gap-8">
        <div className="bg-gray-700/50 p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold text-white">Visual Feedback</h3>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li>• Smooth progress animations</li>
            <li>• Phase transition effects</li>
            <li>• Status indicators</li>
            <li>• Interactive theme system</li>
          </ul>
        </div>

        {/* <div className="bg-gray-700/50 p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold text-white">Audio System</h3>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li>• Customizable sound alerts</li>
            <li>• Volume control</li>
            <li>• Background audio support</li>
            <li>• Phase-specific sounds</li>
          </ul>
        </div>

        <div className="bg-gray-700/50 p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold text-white">Accessibility</h3>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li>• Screen reader support</li>
            <li>• Keyboard navigation</li>
            <li>• High contrast mode</li>
            <li>• Focus management</li>
          </ul>
        </div> */}
      </div>
    </section>
  );

  const LearningOutcomesSection = () => (
    <section className="bg-gray-700/50 p-8 rounded-xl space-y-6">
      <h2 className="text-2xl font-bold text-white">Learning Outcomes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-blue-400">Technical Growth</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• Deep understanding of Redux Toolkit patterns</li>
            <li>• PWA architecture and implementation</li>
            <li>• Complex state synchronization strategies</li>
            <li>• Performance optimization techniques</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-blue-400">Project Insights</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• Importance of user-centric design</li>
            <li>• Value of comprehensive testing</li>
            <li>• Benefits of modular architecture</li>
            <li>• Impact of performance optimization</li>
          </ul>
        </div>
      </div>
    </section>
  );

  const ProductivitySection = () => (
    <section className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Time Management & Productivity</h2>
        <p className="text-gray-300">
          Built on a tool I've extensively used, the Pomodoro Technique is proven to enhance focus and productivity 
          through structured work intervals and intentional breaks. The technique's effectiveness 
          comes from its ability to maintain mental freshness and prevent burnout.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-700/50 p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold text-white">Core Experience</h3>
          <div className="space-y-3">
            <div className="space-y-2">
              <h4 className="text-blue-400 font-medium">Default Work Cycles</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• Classic 25/5 minute work-break cycles</li>
                <li>• 52/17 Focus Method for sustained work</li>
                <li>• 90-minute Deep Work sessions</li>
                <li>• Customizable cycle durations and order</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-blue-400 font-medium">Focus Enhancement</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• Clear visual progress indicators</li>
                <li>• Gentle audio transitions</li>
                <li>• Browser notifications for cycle changes</li>
                <li>• Distraction-free interface</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-700/50 p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold text-white">Platform Optimizions</h3>
          <div className="space-y-3">
            <div className="space-y-2">
              <h4 className="text-blue-400 font-medium">Mobile Experience</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• Touch-optimized controls</li>
                <li>• Swipe gestures for navigation</li>
                <li>• Portrait/landscape adaptability</li>
                <li>• One-handed operation support</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-blue-400 font-medium">Desktop Integration</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• Keyboard shortcut support</li>
                <li>• Multi-window management</li>
                <li>• System notifications</li>
                <li>• Background tab optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-900/20 p-6 rounded-xl mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-2">Focus Improvement</h4>
            <p className="text-gray-300 text-sm">Structured work intervals maintain peak mental performance and prevent fatigue</p>
          </div>
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-2">Work-Life Balance</h4>
            <p className="text-gray-300 text-sm">Intentional breaks ensure sustained productivity without burnout</p>
          </div>
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-2">Task Management</h4>
            <p className="text-gray-300 text-sm">Break large projects into manageable, focused work sessions</p>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <ProjectTemplate project={project}>
      <div className="max-w-6xl mx-auto space-y-16">
        <MediaShowcaseSection />
        <ProductivitySection />
        <TimerSystemSection />
        <StateManagementSection />
        <PWAFeaturesSection />
        <UXFeaturesSection />
        <LearningOutcomesSection />
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