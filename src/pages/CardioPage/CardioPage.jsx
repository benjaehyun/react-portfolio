import React, { useState } from 'react';
import ProjectTemplate from '../../components/templates/ProjectTemplate';
import DetailedMediaGallery from '../../components/ProjectDetails/DetailedMediaGallery';
import ImageModal from '../../components/ProjectDetails/ImageModal';
import { getProjectById } from '../../data/projects';

export default function CardioProjectPage() {
  const project = getProjectById('cardio');
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
              media={project.previewImages}
              onOpenModal={handleOpenModal}
            />
          </div>
        </div>
      </div>
    </section>
  );

  const CoreFeaturesSection = () => (
    <section className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Core Features & Experience</h2>
        <p className="text-gray-300">
          Through an intuitive interface, users can create and manage their own flashcard decks,
          explore community-created content, and engage in discussions through integrated comment 
          sections and message boards at both deck and card levels.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-700/50 p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold text-white">Study Experience</h3>
          <div className="space-y-3">
            <div className="space-y-2">
              <h4 className="text-blue-400 font-medium">Deck Management</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• Inspired by Anki and Quizlet's proven learning methods</li>
                <li>• Custom deck creation and organization</li>
                <li>• Sequential card progression within decks</li>
                <li>• High-yield spaced repetition implementation</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-blue-400 font-medium">Study Tools</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• Interactive card flipping interface</li>
                <li>• Session progress indicators</li>
                <li>• Personal study notes</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-700/50 p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold text-white">Community Features</h3>
          <div className="space-y-3">
            <div className="space-y-2">
              <h4 className="text-blue-400 font-medium">Social Integration</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• Browse all community-created decks</li>
                <li>• View user-specific deck collections</li>
                <li>• Integrated discussions on decks</li>
                <li>• Card-level comment sections</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-blue-400 font-medium">Collaboration Tools</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• Shared study resources</li>
                <li>• Community feedback system</li>
                <li>• Deck rating and reviews</li>
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
          As my second bootcamp project, CardIO represented a significant step in my development journey,
          introducing me to new technologies and architectural patterns while reinforcing fundamental concepts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-700/50 p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold text-white">Technical Challenges</h3>
          <div className="space-y-3">
            <div className="space-y-2">
              <h4 className="text-blue-400 font-medium">Frontend Architecture</h4>
              <p className="text-gray-300 text-sm">
                Working with EJS templates and vanilla JavaScript presented unique challenges in creating
                dynamic interfaces. The card flipping mechanism required careful DOM manipulation and
                state management without the conveniences of modern frameworks.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-blue-400 font-medium">Authentication Flow</h4>
              <p className="text-gray-300 text-sm">
                Implementing Google OAuth through Passport.js was a significant hurdle in the learning experience,
                requiring understanding of authentication flows and session management in a
                traditional server-rendered application.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-700/50 p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold text-white">Learning Experience</h3>
          <div className="space-y-3">
            <div className="space-y-2">
              <h4 className="text-blue-400 font-medium">New Technologies</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• First implementation of OAuth authentication</li>
                <li>• Deep dive into MongoDB schema design</li>
                <li>• Experience with EJS templating</li>
                <li>• RESTful routing practices</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-blue-400 font-medium">Key Learnings</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• MVC architecture principles</li>
                <li>• Session-based authentication</li>
                <li>• Complex data relationships</li>
                <li>• User experience optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const ArchitecturalDecisionsSection = () => (
    <section className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Architectural Decisions</h2>
        <p className="text-gray-300">
          The project's architecture evolved through careful consideration of technical constraints
          and learning objectives, leading to several key design decisions.
        </p>
      </div>

      <div className="bg-gray-700/50 p-6 rounded-xl space-y-6">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-white">View Structure</h3>
          <div className="font-mono text-sm bg-gray-800/50 p-4 rounded-lg text-blue-300">
            views/
            ├── cards/
            ├── decks/
            ├── partials/
            │   ├── cards/
            │   ├── decks/
            │   └── profiles/
            └── profiles/
          </div>
          <p className="text-gray-300 text-sm">
            The view structure was organized to maintain clear separation of concerns and maximize
            code reusability through strategic use of partials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h4 className="text-blue-400 font-medium">Data Flow</h4>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <p className="text-gray-300 text-sm">Request → Route → Controller → Model → View</p>
            </div>
            <p className="text-gray-300 text-sm">
              Implemented a clear, unidirectional data flow pattern to maintain predictable state
              management and simplify debugging.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-blue-400 font-medium">Security Implementation</h4>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Protected routes with middleware</li>
                <li>• Session-based authentication</li>
                <li>• Data validation</li>
                <li>• CSRF protection</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <ProjectTemplate project={project}>
      <div className="max-w-6xl mx-auto space-y-16">
        {/* <MediaShowcaseSection /> */}
        <TechnicalChallengesSection />
        <CoreFeaturesSection />
        <ArchitecturalDecisionsSection />
        {/* <ImageModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          media={project.previewImages}
          initialImage={selectedImage}
        /> */}
      </div>
    </ProjectTemplate>
  );
}