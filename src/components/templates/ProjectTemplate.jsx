import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const ProjectTemplate = ({
  project,
  children
}) => {
  const {
    title,
    description,
    // previewImages = [],
    images = [],
    technologies,
    githubUrl,
    liveUrl,
    status,
    challenges,
    findings
  } = project;


  // remove this with a better image display 
  const previewImages = []; 

  const hasImages = previewImages && previewImages.length > 0;
  const hasSidebar = (challenges && challenges.length > 0) || (findings && findings.length > 0);

  return (
    <article className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`relative ${hasImages ? 'h-[50vh] md:h-[60vh] lg:h-[70vh]' : 'py-24 md:py-32'} overflow-hidden`}
      >
        {hasImages ? (
          <div className="absolute inset-0">
            <img
              src={`/${previewImages[0]}`}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          </div>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900" />
        )}

        <div className="relative z-10 h-full container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-12">
          <div className={`max-w-4xl ${!hasImages ? 'mx-auto pt-10' : ''}`}>
            <div className={`flex items-center space-x-4 mb-4 ${!hasImages ? 'justify-center' : ''}`}>
              <h1 className="text-3xl md:text-5xl font-bold text-white">
                {title}
              </h1>
              {status === 'ongoing' && (
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                  Ongoing
                </span>
              )}
            </div>

            <p className={`text-lg md:text-xl text-gray-200 mb-6 ${!hasImages ? 'text-center' : ''}`}>
              {description}
            </p>

            <div className={`flex flex-wrap gap-3 ${!hasImages ? 'justify-center' : ''}`}>
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-800/80 text-gray-200 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {(githubUrl || liveUrl) && (
              <div className={`flex items-center space-x-4 mt-6 ${!hasImages ? 'justify-center' : ''}`}>
                {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-800/80 text-gray-200 rounded-lg hover:bg-gray-700/80 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>View Code</span>
                  </a>
                )}
                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500/30 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </motion.section>

      {/* Project Content */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className={`${hasSidebar ? 'lg:grid lg:grid-cols-[2fr,1fr] lg:gap-12' : ''}`}>
          {/* Main Content */}
          <main className="space-y-16">
            {children}
          </main>

          {/* Sidebar - Only render if has content */}
          {hasSidebar && (
            <aside className="mt-16 lg:mt-0 space-y-8">
              {challenges && challenges.length > 0 && (
                <div className="bg-gray-800/50 rounded-xl p-6">
                  <h2 className="text-xl font-semibold text-white mb-4">
                    Technical Challenges
                  </h2>
                  <ul className="space-y-3">
                    {challenges.map((challenge, index) => (
                      <li key={index} className="text-gray-300">
                        • {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {findings && findings.length > 0 && (
                <div className="bg-gray-800/50 rounded-xl p-6">
                  <h2 className="text-xl font-semibold text-white mb-4">
                    Key Findings
                  </h2>
                  <ul className="space-y-3">
                    {findings.map((finding, index) => (
                      <li key={index} className="text-gray-300">
                        • {finding}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectTemplate;