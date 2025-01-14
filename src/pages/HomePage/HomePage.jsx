import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import ProjectPreview from '../../components/ProjectPreview/ProjectPreview';
import OptimizedBackground from '../../utilities/OptimizedBackground';

export default function HomePage() {

  const featuredProjects = [
    {
      title: "LunchBreak",
      description: "LunchBreak is a comprehensive web application designed to simplify corporate dining experiences. By seamlessly connecting employees and companies with a wide array of restaurant options, the platform facilitates meal ordering, budget management, and menu customization.",
      technologies: ["React", "Django", "PostgreSQL", "Django REST Framework", "JWT", "Tailwind CSS"],
      images: ["lunchbreak/lunchbreak-1.png", "lunchbreak/lunchbreak-2.png"],
      githubUrl: null,
      liveUrl: null,
      projectLink: "lunchbreak",
      status: "ongoing",
      keyFeatures: [
        "Dynamic Restaurant Menus",
        "Budget and Expense Tracking",
        "Advanced Menu Customization",
        "Responsive Design"
      ]
    },
    {
      title: "lowKEY",
      description: "A MERN-Stack dating app where users can connect their Spotify account to view other users who have similar tastes in music. With the Spotify API, song metrics are used to sort users based on similarity.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Spotify API", "AWS S3"],
      images: ["lowkey/lowkey-mac-1.png", "lowkey/lowkey-mac-2.png"],
      githubUrl: "https://github.com/benjaehyun/lowKEY",
      liveUrl: "https://lowkey-08ba0f67b0aa.herokuapp.com/",
      projectLink: "lowkey",
      status: "completed",
      keyFeatures: [
        "Spotify Integration",
        "Real-time Chat",
        "Music Taste Matching Algorithm",
        "Interactive User Profiles"
      ]
    },
    {
      title: "The Draft",
      description: "A Django forum app created in collaboration with developers Nadew Demissew and Jon Do. The Draft is a discussion forum inspired by websites such as 'CollegeConfidential', with its focus shifted toward navigating the complex and challenging world of job hunting.",
      technologies: ["Django", "Python", "PostgreSQL", "AWS S3", "Bootstrap", "PDF.js"],
      images: ["thedraft/thedraft-mac-1.png", "thedraft/thedraft-mac-2.png"],
      githubUrl: "https://github.com/benjaehyun/thedraft",
      liveUrl: "https://thedraft-theebuggers-823b566ea1e8.herokuapp.com/",
      projectLink: "thedraft",
      status: "completed",
      keyFeatures: [
        "Job Application Tracker",
        "Discussion Forums",
        "PDF Resume Viewer",
        "Company-specific Subforums"
      ]
    }
  ];

  const ongoingProjects = [
    {
      title: "LunchBreak",
      description: "LunchBreak is a comprehensive web application designed to simplify corporate dining experiences. By seamlessly connecting employees and companies with a wide array of restaurant options, the platform facilitates meal ordering, budget management, and menu customization.",
      technologies: ["React", "Django", "PostgreSQL", "Django REST Framework", "JWT", "Tailwind CSS"],
      images: ["lunchbreak/lunchbreak-1.png", "lunchbreak/lunchbreak-2.png"],
      githubUrl: "https://github.com/your-username/lunchbreak", // Add when available
      liveUrl: null, // Add when available
      projectLink: "lunchbreak",
      status: "ongoing",
      keyFeatures: [
        "Dynamic Restaurant Menus",
        "Budget and Expense Tracking",
        "Advanced Menu Customization",
        "Responsive Design"
      ]
    },
    {
      title: "Brewista",
      description: "Brewista is designed to be a comprehensive digital companion for coffee enthusiasts. Its primary goal is to enhance the coffee brewing experience by allowing users to track, create, and share their coffee brewing recipes.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      images: ["brewista/brewista-1.png", "brewista/brewista-2.png"],
      githubUrl: "https://github.com/your-username/brewista", // Add when available
      liveUrl: null, // Add when available
      projectLink: "brewista",
      status: "ongoing",
      keyFeatures: [
        "Recipe Creation and Sharing",
        "Brewing Method Guides",
        "Coffee Bean Database",
        "Community Features"
      ]
    }
  ];

  const CurrentWorkSection = () => {
    const currentProject = ongoingProjects[0];
    const nextProject = ongoingProjects[1];

    return (
      <div>
        <div className="flex items-center mb-8">
          <h2 className="text-3xl font-bold text-white">What I'm Working On</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Current Project Card */}
          <div className="bg-gray-800/50 rounded-xl p-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-white">Current Project</h3>
              <div className="flex space-x-2">
                {currentProject.githubUrl && (
                  <a
                    href={currentProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <Github className="w-5 h-5 text-gray-300" />
                  </a>
                )}
                {currentProject.liveUrl && (
                  <a
                    href={currentProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 text-gray-300" />
                  </a>
                )}
              </div>
            </div>
            <Link to={`/projects/${currentProject.linkSuffix}`} className="block group">
              <h4 className="text-lg font-medium text-white mb-2 group-hover:text-blue-400 transition-colors">
                {currentProject.title}
              </h4>
              <p className="text-gray-300 mb-4 line-clamp-3">{currentProject.description}</p>
              <div className="flex flex-wrap gap-2">
                {currentProject.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </Link>
          </div>

          {/* Up Next Card */}
          <div className="bg-gray-800/50 rounded-xl p-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-white">Up Next</h3>
              <div className="flex space-x-2">
                {nextProject.githubUrl && (
                  <a
                    href={nextProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <Github className="w-5 h-5 text-gray-300" />
                  </a>
                )}
              </div>
            </div>
            <Link to={`/projects/${nextProject.linkSuffix}`} className="block group">
              <h4 className="text-lg font-medium text-white mb-2 group-hover:text-blue-400 transition-colors">
                {nextProject.title}
              </h4>
              <p className="text-gray-300 mb-4 line-clamp-3">{nextProject.description}</p>
              <div className="flex flex-wrap gap-2">
                {nextProject.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Background Image */}
      <OptimizedBackground 
        imagePath="hobby/chicago-street.jpg"
        className="h-[90vh] md:h-[80vh] lg:h-[90vh] bg-cover bg-center absolute w-full z-[-1] blur-sm top-0 left-0"
        asBackground={true}
      />
      
      {/* Hero Section */}
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

      {/* Content Sections */}
      <div className="bg-gray-900">
        {/* Current Work Section */}
        <section className="container mx-auto px-4 py-20">
          <CurrentWorkSection />
        </section>

        {/* Featured Projects Section */}
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