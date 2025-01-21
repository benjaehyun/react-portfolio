import React from 'react';
import ProjectTemplate from '../../components/templates/ProjectTemplate';
import { getProjectById } from '../../data/projects';

export default function TheDraftProjectPage() {
  const project = getProjectById('thedraft');

  const ProjectContextSection = () => (
    <section className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Project Context</h2>
        <p className="text-gray-300">
          The Draft was developed as an ambitious collaboration between team members Ben Lee, Nadew Demissew, and Jonathan Do. 
          The project represented a significant challenge: implementing a full-featured platform within a condensed one-week sprint in a new team-based approach.
        </p>
        <p className="text-gray-300">
          Despite the time constraint and the challenge of learning multiple new technologies simultaneously, 
          our three-member team successfully delivered a comprehensive platform that effectively serves the needs of job seekers
          in the tech industry.
        </p>
      </div>
    </section>
  );

  const CoreFeaturesSection = () => (
    <section className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Core Features & Experience</h2>
        <p className="text-gray-300">
          The Draft combines social discussion features with practical job application tracking tools,
          creating a unique platform that addresses both the community and organizational aspects of job hunting.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-700/50 p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold text-white">Dual Forum System</h3>
          <div className="space-y-3">
            <div className="space-y-2">
              <h4 className="text-blue-400 font-medium">General Forums</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• Open discussion space for broad job-seeking topics</li>
                <li>• Like system with real-time updates</li>
                <li>• Pin functionality for important discussions</li>
                <li>• Rich media support with AWS S3 integration</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-blue-400 font-medium">Company Forums</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• Company-specific discussion spaces</li>
                <li>• Organized by industry and location</li>
                <li>• Interview experience sharing</li>
                <li>• Application process insights</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-700/50 p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold text-white">Application Tracker</h3>
          <div className="space-y-3">
            <div className="space-y-2">
              <h4 className="text-blue-400 font-medium">Document Management</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• PDF viewer for resumes and cover letters</li>
                <li>• Version tracking and comparison</li>
                <li>• Secure cloud storage integration</li>
                <li>• Dynamic file organization</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-blue-400 font-medium">Progress Tracking</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• Status updates for each stage</li>
                <li>• Interview stage management</li>
                <li>• Timeline visualization</li>
                <li>• Note-taking functionality</li>
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
        <h2 className="text-2xl font-bold text-white">Technical Challenges & Learning</h2>
        <p className="text-gray-300">
          Developing The Draft presented unique technical challenges that pushed our team to explore and master new technologies and methodologies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-700/50 p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold text-white">File Management System</h3>
          <p className="text-gray-300">
            One of our biggest challenges was implementing a robust file management system that could handle both images and PDFs efficiently. This led us to:
          </p>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>• Develop a sophisticated AWS S3 integration for secure storage</li>
            <li>• Create a unified file handling system with type-specific viewers</li>
            <li>• Implement UUID-based naming for conflict prevention</li>
            <li>• Build custom PDF viewer integration using PDF.js</li>
          </ul>
        </div>

        <div className="bg-gray-700/50 p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold text-white">Real-time Interactions</h3>
          <p className="text-gray-300">
            Implementing real-time features required learning new approaches to frontend-backend communication:
          </p>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>• AJAX integration for dynamic updates</li>
            <li>• State management across multiple components</li>
            <li>• Optimistic UI updates for better UX</li>
            <li>• Custom event handling and propagation</li>
          </ul>
        </div>
      </div>
    </section>
  );

  const LearningExperienceSection = () => (
    <section className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Learning Experience & Growth</h2>
        <p className="text-gray-300">
          This project served as a significant learning opportunity, introducing us to new technologies and development practices.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="bg-gray-700/50 p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold text-white">Technology Adoption</h3>
          <div className="space-y-4 text-gray-300">
            <p>
              Working with Django for the first time presented a steep learning curve, but its robust features and security mechanisms proved invaluable. We learned to:
            </p>
            <ul className="space-y-2 text-sm">
              <li>• Navigate Django's MVT architecture effectively</li>
              <li>• Implement complex model relationships</li>
              <li>• Utilize Django's built-in security features</li>
              <li>• Work with Django's template system</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-700/50 p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold text-white">Development Practices</h3>
          <div className="space-y-4 text-gray-300">
            <p>
              The project helped establish strong development practices that we continue to use:
            </p>
            <ul className="space-y-2 text-sm">
              <li>• Version control workflows in a team setting</li>
              <li>• Code review processes and standards</li>
              <li>• Testing and debugging strategies</li>
              <li>• Documentation and code organization</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );

      return (
    <ProjectTemplate project={project}>
      <div className="max-w-6xl mx-auto space-y-16">
        <ProjectContextSection />
        <CoreFeaturesSection />
        <TechnicalChallengesSection />
        <LearningExperienceSection />
      </div>
    </ProjectTemplate>
  );
}