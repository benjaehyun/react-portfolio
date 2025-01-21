import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';

const Footer = () => {
  const { isDarkBackground } = useNavigation();

  return (
    <footer className={`w-full ${isDarkBackground ? 'bg-gray-900/80' : 'bg-gray-900'} backdrop-blur-md`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-lg font-bold text-white">
              Ben Lee
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/projects" className="text-gray-300 hover:text-white transition-colors">
                Projects
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                About
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/benjaehyun"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-300 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/benjaehyun/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-300 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:benjaminjaelee@gmail.com"
              className="p-2 text-gray-300 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;