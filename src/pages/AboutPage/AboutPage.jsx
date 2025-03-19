import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import OptimizedBackground from '../../utilities/OptimizedBackground';
import { 
  SiJavascript,
  SiPython,
  SiReact,
  SiExpress,
  SiHtml5,
  SiCss3,
  // SiBootstrap,
  SiTailwindcss,
  SiDjango,
  SiMongodb,
  SiPostgresql,
  // SiGithub,
  SiNodedotjs,
  SiAmazonaws,
  SiRedux,
  SiFramer,
  SiSocketdotio,
  SiFirebase
} from 'react-icons/si';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Core",
      skills: [
        { icon: SiJavascript, name: 'JavaScript' },
        { icon: SiPython, name: 'Python' },
        { icon: SiHtml5, name: 'HTML' },
        { icon: SiCss3, name: 'CSS' },
      ]
    },
    {
      title: "Frontend",
      skills: [
        { icon: SiReact, name: 'React' },
        { icon: SiRedux, name: 'Redux' },
        { icon: SiFramer, name: 'Framer Motion' },
        { icon: SiTailwindcss, name: 'Tailwind' },
      ]
    },
    {
      title: "Backend",
      skills: [
        { icon: SiNodedotjs, name: 'Node.js' },
        { icon: SiExpress, name: 'Express' },
        { icon: SiDjango, name: 'Django' },
        { icon: SiSocketdotio, name: 'Socket.IO' },
      ]
    },
    {
      title: "Database & Cloud",
      skills: [
        { icon: SiMongodb, name: 'MongoDB' },
        { icon: SiPostgresql, name: 'PostgreSQL' },
        { icon: SiFirebase, name: 'Firebase' },
        { icon: SiAmazonaws, name: 'AWS' },
      ]
    }
  ];

  return (
    <section className="w-full px-4 py-20 bg-gray-800/50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="space-y-4">
              <h3 className="text-xl font-medium text-white mb-4">{category.title}</h3>
              <div className="grid grid-cols-2 gap-2">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: (categoryIndex * 4 + index) * 0.05 }}
                    className="flex flex-col items-center gap-2 p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700/70 transition-colors"
                  >
                    <skill.icon className="w-8 h-8 text-gray-300" />
                    <span className="text-sm text-gray-300 text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Skills */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 p-6 bg-gray-700/30 rounded-xl"
        >
          <h3 className="text-white text-center mb-4">Additional Technologies</h3>
          <p className="text-gray-300 text-center">
            REST APIs • OAuth • JWT • Service Workers • PWA • Bootstrap • Chart.js • WebSockets
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

const AboutPage = () => {
  // const skills = [
  //   { icon: SiJavascript, name: 'JavaScript' },
  //   { icon: SiPython, name: 'Python' },
  //   { icon: SiReact, name: 'React' },
  //   { icon: SiExpress, name: 'Express' },
  //   { icon: SiHtml5, name: 'HTML' },
  //   { icon: SiCss3, name: 'CSS' },
  //   { icon: SiBootstrap, name: 'Bootstrap' },
  //   { icon: SiTailwindcss, name: 'Tailwind' },
  //   { icon: SiDjango, name: 'Django' },
  //   { icon: SiMongodb, name: 'MongoDB' },
  //   { icon: SiPostgresql, name: 'PostgreSQL' },
  //   { icon: SiGithub, name: 'Github' },
  //   { icon: SiNodedotjs, name: 'Node.js' },
  //   { icon: SiAmazonaws, name: 'AWS S3' }
  // ];

  return (
    <div className="min-h-screen">
      <section className="relative h-[90vh] flex items-center">
        <OptimizedBackground
          imagePath="hobby/millpark.jpg"
          className="absolute inset-0 bg-cover bg-center blur-sm brightness-75"
          asBackground={true}
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src="me/wedding-photo.png"
              alt="Ben Lee"
              className="w-32 md:w-48 lg:w-64 rounded-full border-2 border-white shadow-2xl"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center md:text-left md:max-w-xl p-6  "
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                Pre-med Student Turned Engineer
              </h1>
              <p className="text-xl text-gray-100 drop-shadow-lg">
                A new Seattleite with a passion for elegant solutions and graduate of 
                General Assembly's Software Engineering Immersive Program!
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    
      <div className="bg-gray-900">
        <section className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto space-y-6 text-gray-300"
          >
            <h2 className="text-3xl font-bold text-white mb-8">
              Hi 👋, Glad you were able to find me!
            </h2>
            <p className="text-lg leading-relaxed">
              I'm Ben, and I am currently based in Seattle, WA. I'm a software
              developer who loves tackling niche challenges for unique user experiences.
            </p>
            <p className="text-lg leading-relaxed">
              Before embarking on my journey of becoming a developer, I was fully immersed in my pre-med studies in university, MCAT taken and all. Then the covid-19 pandemic pumped the brakes on school, 
              volunteer work, and anything else that I could've been doing in preparation for medical school. For the first time, I was able to take a break and take a step back. In that time, 
              I discovered a profound interest in the limitless possibilities in tech, more specifically: software development.
            </p>
            <p className="text-lg leading-relaxed">
              I took an admittedly risky step to transition into a SWE career and enrolled in an intensive bootcamp. Through countless lines 
              of code, rigorous problem-solving, and the invaluable support of my mentors and peers, I graduated and fell deeper into what's nothing short of an infatuation with coding. I think
              that my pivot from medicine to tech has equipped me with a unique blend of skills including: attention to detail, a strong analytical mindset, and the ability to approach challenges with 
              resilience and a fresh perspective.
            </p>
            <p className="text-lg leading-relaxed">
              I'm constantly looking for that next step to push the boundaries of my abilities and contribute meaningfully to the dynamic landscape of technology.
            </p>
          </motion.div>
        </section>

        {/* Skills */}
        {/* <section className="container mx-auto px-4 py-20 bg-gray-800/50 mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center gap-2 p-4 bg-gray-700/50 rounded-lg"
                >
                  <skill.icon className="w-8 h-8 text-gray-300" />
                  <span className="text-sm text-gray-300">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section> */}

        <SkillsSection /> 

        
        <section className="relative h-[80vh] flex items-center">
            <OptimizedBackground
                imagePath="hobby/seattle.jpg"
                className="absolute inset-0 bg-cover bg-center blur-sm opacity-40"
                asBackground={true}
            />
          <div className="relative z-10 container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8"
            >
                <img
                    src="me/hobby-2.png"
                    alt="Ben Lee Hobby"
                    className="w-32 md:w-48 lg:w-64 rounded-full border-2 border-white"
                />
                <div className="bg-gray-900/90 p-8 md:p-10 rounded-xl shadow-2xl max-w-2xl">
                    <h2 className="text-2xl font-bold text-white mb-4">A little more about me:</h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        I'm a 2nd gen Korean-American born and raised in Oklahoma. Some of my favorite hobbies include: 
                        golf, photography (all of the photos on this site are photos I've taken!), cooking for friends, 
                        and reading when I have down time. 
                        I'm currently reading "yolk" by Mary HK Choi.
                    </p>
                </div>
            </motion.div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto bg-gray-800/50 rounded-xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Let's Connect</h2>
            <p className="text-gray-300 text-lg mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities.
            </p>
            <div className="flex flex-col md:flex-row justify-center md:space-x-8 space-y-6 md:space-y-0">
              <a
                href="https://github.com/benjaehyun"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center text-gray-300 hover:text-white transition-colors"
              >
                <div className="p-4 bg-gray-700/50 rounded-xl mb-3 group-hover:bg-gray-700 transition-colors">
                  <Github className="w-8 h-8" />
                </div>
                <span className="text-sm">Check out my code</span>
              </a>
              <a
                href="https://www.linkedin.com/in/benjaehyun/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center text-gray-300 hover:text-white transition-colors"
              >
                <div className="p-4 bg-gray-700/50 rounded-xl mb-3 group-hover:bg-gray-700 transition-colors">
                  <Linkedin className="w-8 h-8" />
                </div>
                <span className="text-sm">Connect on LinkedIn</span>
              </a>
              <a
                href="mailto:benjaminjaelee@gmail.com"
                className="group flex flex-col items-center text-gray-300 hover:text-white transition-colors"
              >
                <div className="p-4 bg-gray-700/50 rounded-xl mb-3 group-hover:bg-gray-700 transition-colors">
                  <Mail className="w-8 h-8" />
                </div>
                <span className="text-sm">Send me an email</span>
              </a>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;