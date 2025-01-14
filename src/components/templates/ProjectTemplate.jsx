import React from 'react';
import { motion } from 'framer-motion';

const ProjectTemplate = ({ 
  project,
  children  // Allow custom sections per project
}) => {
  const { title, description, images, technologies, findings, challenges } = project;
  
  return (
    <article className="min-h-screen pt-24 bg-gray-900">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[50vh] md:h-[60vh] overflow-hidden"
      >
        <div className="absolute inset-0">
          <OptimizedImage 
            src={images[0]}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 h-full container mx-auto px-4 flex flex-col justify-end pb-8">
          <motion.h1 
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            {title}
          </motion.h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
            {description}
          </p>
        </div>
      </motion.section>

      {/* Project Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-[2fr,1fr] gap-8">
          {/* Main Content */}
          <div className="space-y-12">
            {children}  {/* Custom sections per project */}
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <ProjectMetadata 
              technologies={technologies}
              findings={findings}
              challenges={challenges}
            />
          </aside>
        </div>
      </div>
    </article>
  );
};

export default ProjectTemplate;