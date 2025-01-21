import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProjectPreview from '../../components/ProjectPreview/ProjectPreview';
import OptimizedBackground from '../../utilities/OptimizedBackground';
import { getFeaturedProjects, getOngoingProjects, getProjectPreviewData } from '../../data/projects';

export default function HomePage() {

  const featuredProjects = getFeaturedProjects().map(getProjectPreviewData);
  const ongoingProjects = getOngoingProjects().map(getProjectPreviewData);

  const CurrentWorkSection = () => {
    return (
      <div>
        <div className="flex items-center mb-8">
          <h2 className="text-3xl font-bold text-white">What I'm Working On</h2>
        </div>
        <div className="grid md:grid-cols-1 gap-8">
          {ongoingProjects.map(project => (
            <ProjectPreview
              key={project.title}
              {...project}
            />
          ))}
        </div>
    </div>
    );
  };

  return (
    <div className="min-h-screen pt-24">
      {/* optimized background image */}
      <OptimizedBackground 
        imagePath="hobby/chicago-street.jpg"
        className="h-[90vh] md:h-[80vh] lg:h-[90vh] bg-cover bg-center absolute w-full z-[-1] blur-sm top-0 left-0"
        asBackground={true}
      />
      
      {/* Hero  */}
      <div className="flex flex-col md:flex-row justify-center items-center h-[80vh] px-4">
        <img 
          src="me/griffith-portrait.jpg" 
          alt="Ben Lee" 
          className="w-32 md:w-[20vw] rounded-full border-2 border-white"
          loading="eager"
        />
        <div className="w-4/5 md:w-[30vw] mt-4 md:mt-0 md:ml-16 p-4">
          <h1 className="text-white text-2xl md:text-4xl lg:text-5xl">Hi there 👋, I'm Ben!</h1>
          <p className="text-white text-lg md:text-xl lg:text-2xl mt-4">
            I'm a full-stack developer with a STEM background and entrepreneurial experience.<br />
            I'm currently located in Seattle, WA.
          </p>
        </div>
      </div>

      <div className="bg-gray-900">
        {/* stuff ur currently working on */}
        <section className="container mx-auto px-4 py-20">
          <CurrentWorkSection />
        </section>

        {/* featured projects  */}
        <section className="container mx-auto px-4 py-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
            <Link 
              to="/projects"
              className="flex items-center space-x-2 px-4 py-2 text-blue-400 hover:text-blue-300 transition-colors rounded-lg hover:bg-gray-800/50"
            >
              <span className="text-lg">View all projects</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="space-y-16">
            {featuredProjects.map(project => (
              <ProjectPreview
                key={project.title}
                {...project}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}