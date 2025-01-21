import React from 'react';
import ProjectTemplate from '../../components/templates/ProjectTemplate';
import { getProjectById } from '../../data/projects';

export default function LowkeyPage() {
  const project = getProjectById('lowkey');

  const CoreFeaturesSection = () => (
    <section className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Core Features & Experience</h2>
        <p className="text-gray-300">
          LowKEY creates meaningful connections through shared musical tastes, leveraging Spotify's 
          sophisticated audio features API to match users based on their musical preferences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-700/50 p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold text-white">Music Analysis Engine</h3>
          <div className="space-y-3">
            <div className="space-y-2">
              <h4 className="text-blue-400 font-medium">Audio Feature Analysis</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• Complex similarity calculations</li>
                <li>• Multiple musical attribute comparison</li>
                <li>• Euclidean distance scoring</li>
                <li>• Normalized feature weighting</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-blue-400 font-medium">Spotify Integration</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• Top tracks analysis</li>
                <li>• Playlist-based matching</li>
                <li>• OAuth authentication flow</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-700/50 p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold text-white">Social Features</h3>
          <div className="space-y-3">
            <div className="space-y-2">
              <h4 className="text-blue-400 font-medium">Matching System</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• Mutual matching requirement</li>
                <li>• Match visualization</li>
                <li>• Shared music insights</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-blue-400 font-medium">Real-time Chat</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• Socket.IO implementation</li>
                <li>• Persistent message history</li>
                <li>• Real-time typing indicators</li>
                <li>• Message read receipts</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const TechnicalChallengesSection = () => (
    <section className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Technical Implementation & Learning Journey</h2>
        <p className="text-gray-300">
          As my final bootcamp project, LowKEY represented a significant technical challenge and learning opportunity,
          pushing the boundaries of my knowledge while exploring new technologies and concepts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-700/50 p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold text-white">Authentication Challenges</h3>
          <p className="text-gray-300 text-sm">
            One of the most complex aspects was implementing Spotify's Authorization Flow with PKCE
            while maintaining our own JWT-based authentication system. This required careful 
            coordination between different authentication flows and token management strategies.
          </p>
          <div className="mt-4 space-y-2">
            <h4 className="text-blue-400 font-medium">Key Learnings</h4>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>• Spotify's OAuth 2.0 with PKCE implementation patterns</li>
              <li>• Token refresh mechanisms</li>
              <li>• Security best practices</li>
              <li>• State management for auth flows</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-700/50 p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold text-white">Algorithm Development</h3>
          <p className="text-gray-300 text-sm">
            Developing the matching algorithm required deep understanding of musical attributes
            and similarity metrics. After extensive research, we implemented a euclidean distance
            formula that effectively captured musical taste compatibility.
          </p>
          <div className="mt-4 space-y-2">
            <h4 className="text-blue-400 font-medium">Technical Growth</h4>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>• Data normalization techniques</li>
              <li>• Vector-based calculations</li>
              <li>• Performance optimization</li>
              <li>• Algorithm refinement methods</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-700/50 p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold text-white">Real-time Features</h3>
          <p className="text-gray-300 text-sm">
            Implementing real-time chat functionality using Socket.IO was a significant learning
            experience, requiring careful consideration of state management and data persistence.
          </p>
          <div className="mt-4 space-y-2">
            <h4 className="text-blue-400 font-medium">Implementation Insights</h4>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>• WebSocket architecture</li>
              <li>• Real-time state sync</li>
              <li>• MongoDB integration</li>
              <li>• Event-driven programming</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-700/50 p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold text-white">File Management</h3>
          <p className="text-gray-300 text-sm">
            Integrating AWS S3 for profile photo management required learning about cloud storage,
            security considerations, and efficient file handling practices.
          </p>
          <div className="mt-4 space-y-2">
            <h4 className="text-blue-400 font-medium">Key Takeaways</h4>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>• Cloud storage integration</li>
              <li>• File validation methods</li>
              <li>• Upload optimization</li>
              <li>• Security considerations</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );

  const ReflectionSection = () => (
    <section className="bg-gray-700/50 p-8 rounded-xl space-y-6">
      <h2 className="text-2xl font-bold text-white">Project Reflection</h2>
      <div className="space-y-4">
        <p className="text-gray-300">
          As my final bootcamp project, LowKEY represented more than just a technical challenge—it was 
          a culmination of my journey into software development. The project pushed me to integrate multiple 
          new technologies and concepts, from OAuth flows to real-time communication, while maintaining a 
          focus on creating an engaging user experience.
        </p>
        <p className="text-gray-300">
          The challenge of implementing complex features like the matching algorithm and real-time chat 
          provided invaluable learning experiences in both technical implementation and problem-solving 
          strategies. These challenges helped bridge the gap between bootcamp learning and real-world 
          application development.
        </p>
        <p className="text-gray-300">
          Perhaps most importantly, this project taught me the value of thorough research and 
          documentation when working with new technologies, and the importance of building scalable, 
          maintainable solutions rather than just functional ones.
        </p>
      </div>
    </section>
  );

  return (
    <ProjectTemplate project={project}>
      <div className="max-w-6xl mx-auto space-y-16">
        <ReflectionSection />
        <CoreFeaturesSection />
        <TechnicalChallengesSection />
      </div>
    </ProjectTemplate>
  );
}