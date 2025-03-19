import React from 'react';
import ProjectTemplate from '../../components/templates/ProjectTemplate';
import { getProjectById } from '../../data/projects';

export default function LunchbreakProjectPage() {
  const project = getProjectById('lunchbreak');

  const CoreFeaturesSection = () => (
    <section className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Core Features & Architecture</h2>
        <p className="text-gray-300">
          LunchBreak revolutionizes corporate dining by providing a seamless platform connecting businesses, 
          employees, and restaurants through an intuitive interface built with modern technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-700/50 p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold text-white">User Management & Authentication</h3>
          <div className="space-y-3">
            <div className="space-y-2">
              <h4 className="text-blue-400 font-medium">Authentication System</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• JWT-based authentication with refresh tokens</li>
                <li>• HTTP-only cookie implementation</li>
                <li>• Role-based access control</li>
                <li>• CSRF protection</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-blue-400 font-medium">User Roles & Permissions</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• Company employee access</li>
                <li>• Restaurant admin capabilities</li>
                <li>• Company administrator controls</li>
                <li>• Dynamic permission management</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-700/50 p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold text-white">Restaurant Management</h3>
          <div className="space-y-3">
            <div className="space-y-2">
              <h4 className="text-blue-400 font-medium">Menu System</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• Dynamic menu management</li>
                <li>• Category-based organization</li>
                <li>• Complex item customization options</li>
                <li>• Real-time menu updates</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-blue-400 font-medium">Availability Control</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• Day-of-week scheduling</li>
                <li>• Special date handling</li>
                <li>• Capacity management</li>
                <li>• Service hour configuration</li>
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
        <h2 className="text-2xl font-bold text-white">Technical Challenges & Learning Journey</h2>
        <p className="text-gray-300">
          Building LunchBreak presented unique challenges that pushed our team to explore and master new technologies 
          while developing innovative solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-700/50 p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold text-white">Authentication Implementation</h3>
          <p className="text-gray-300">
            One of our most significant challenges was implementing a secure, scalable authentication system that could 
            handle multiple user roles while maintaining a seamless user experience. Learning to work with Django REST Framework's 
            authentication system alongside JWT tokens required deep diving into both technologies.
          </p>
          <div className="space-y-2 mt-4">
            <h4 className="text-blue-400 font-medium">Key Learnings</h4>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>• Token refresh mechanisms and security implications</li>
              <li>• HTTP-only cookie implementation for enhanced security</li>
              <li>• Role-based access control patterns</li>
              <li>• Integration of Django REST Framework with frontend auth flow</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-700/50 p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold text-white">State Management Evolution</h3>
          <p className="text-gray-300">
            As the application grew in complexity, managing state across components became increasingly challenging. 
            This led us to explore and implement sophisticated state management patterns using React Context API 
            and custom hooks.
          </p>
          <div className="space-y-2 mt-4">
            <h4 className="text-blue-400 font-medium">Solutions Developed</h4>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>• Custom hook patterns for shared functionality</li>
              <li>• Context providers for global state</li>
              <li>• Optimized re-rendering strategies</li>
              <li>• Efficient data fetching patterns</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );

  const DevelopmentJourneySection = () => (
    <section className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Development Journey & Growth</h2>
        <p className="text-gray-300">
          Although inactive, the development of LunchBreak represented a significant learning opportunity, pushing our small team to expand our 
          technical capabilities while maintaining high standards for code quality and user experience tailored to a client's needs.
        </p>
      </div>

      <div className="bg-gray-700/50 p-6 rounded-xl space-y-6">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-white">Learning New Technologies</h3>
          <p className="text-gray-300">
            For many team members, this project marked their first experience with Django REST Framework and complex JWT 
            authentication systems. The learning curve was steep but rewarding, teaching valuable lessons about API 
            design and security implementations.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-white">Overcoming Challenges</h3>
          <p className="text-gray-300">
            One of the most significant challenges was designing and implementing the menu system with its complex 
            relationships and real-time updates. This required careful consideration of database design and API 
            structure to ensure optimal performance and maintainability.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-white">Team Collaboration</h3>
          <p className="text-gray-300">
            Working in a team environment provided invaluable experience in sprint planning, git workflows, code review processes, 
            and technical documentation. We established strong communication patterns and learned to effectively 
            divide complex tasks among team members.
          </p>
        </div>
      </div>
    </section>
  );

  return (
    <ProjectTemplate project={project}>
      <div className="max-w-6xl mx-auto space-y-16">
        <DevelopmentJourneySection />
        <CoreFeaturesSection />
        <TechnicalChallengesSection />
      </div>
    </ProjectTemplate>
  );
}