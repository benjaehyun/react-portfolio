import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import ProjectPreview from '../../components/ProjectPreview/ProjectPreview';
import OptimizedBackground from '../../utilities/OptimizedBackground';
import { getOngoingProjects, getCompletedProjects, getProjectPreviewData } from '../../data/projects';

const ProjectsPage = () => {
    const ongoingRef = useRef(null);
    const completedRef = useRef(null);

  
    const ongoingProjects = getOngoingProjects().map(getProjectPreviewData);
    const completedProjects = getCompletedProjects().map(getProjectPreviewData);
  
    const scrollToSection = (ref) => {
      ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
  
    return (
      <div className="min-h-screen">
        {/* Hero with optimized background */}
        <section className="relative h-[90vh] md:h-[80vh] lg:h-[90vh] flex items-center justify-center">
          <OptimizedBackground
            imagePath="hobby/ny.jpg"
            className="h-full bg-cover bg-center absolute w-full z-[-1] blur-sm"
            asBackground={true}
          />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                My Projects
              </h1>
              <p className="text-xl md:text-2xl text-gray-200">
                A collection of my work showing my journey in software development.
                With their own technical challenges, each project represents
                unique learning experiences and solutions.
              </p>
            </motion.div>
          </div>
        </section>
  
        <div className="bg-gray-900">
        {/* stuff ur currently working on */}
            {ongoingProjects.length > 0 && (
                <section ref={ongoingRef} className="container mx-auto px-4 py-20">
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    >
                        <div className="mb-12 md:max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Currently Working On
                            </h2>
                            <p className="text-gray-400 md:text-lg md:leading-relaxed">
                                These are my active projects where I'm currently investing my time
                                and exploring new technologies.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-1 gap-8">
                            {ongoingProjects.map(project => (
                                <ProjectPreview
                                    key={project.title}
                                    {...project}
                                />
                            ))}
                        </div>
                    </motion.div>
                </section>
            )}
  
            {/*completed projects */}
            <section ref={completedRef} className="container mx-auto px-4 py-20">
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                >
                    <div className="mb-12 md:max-w-3xl mx-auto text-center"> 
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Completed Projects
                        </h2>
                        <p className="text-gray-400 md:text-lg md:leading-relaxed">
                            My finished projects, each representing different
                            challenges and learning experiences.
                        </p>
                    </div>
                <div className="space-y-8">
                    {completedProjects.map(project => (
                    <ProjectPreview
                        key={project.title}
                        {...project}
                    />
                    ))}
                </div>
                </motion.div>
            </section>
        </div>
  
        {/* quick navigation between ongoing and completed proj */}
        <nav className="fixed right-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center space-y-4"
          >
            {ongoingProjects.length > 0 && (
              <button
                onClick={() => scrollToSection(ongoingRef)}
                className="group relative"
                aria-label="Navigate to ongoing projects"
              >
                <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform" />
                <span className="absolute left-0 transform -translate-x-full -translate-y-1/2 top-1/2 mr-2 px-2 py-1 bg-gray-800 rounded text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Ongoing Projects
                </span>
              </button>
            )}
            <button
              onClick={() => scrollToSection(completedRef)}
              className="group relative"
              aria-label="Navigate to completed projects"
            >
              <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform" />
              <span className="absolute left-0 transform -translate-x-full -translate-y-1/2 top-1/2 mr-2 px-2 py-1 bg-gray-800 rounded text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Completed Projects
              </span>
            </button>
          </motion.div>
        </nav>
      </div>
    );
};
  
  export default ProjectsPage;