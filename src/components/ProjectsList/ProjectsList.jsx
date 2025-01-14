import React from 'react';
import ProjectPreview from '../ProjectPreview/ProjectPreview';

const ProjectsList = ({ projects }) => {
  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 py-8">
      <div className="space-y-16">
        {projects.map((project) => (
          <ProjectPreview
            key={project.title}
            title={project.title}
            description={project.description}
            technologies={project.technologies || []}
            images={project.images}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
            projectLink={`/projects/${project.linkSuffix}`}
            status={project.status}
            keyFeatures={project.keyFeatures || []}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;