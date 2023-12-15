import React from 'react'
import ProjectsCard from '../ProjectsCard/ProjectsCard'

export default function ProjectsList({ projects }) {
  return (
    // <div className='container mx-auto px-4 md:px-8 lg:px-16 py-8 font-mono'>
    //     <div className='grid grid-cols-1 gap-8'>
    //         {projects.map(project => (
    //             <ProjectsCard 
    //                 key={project.title}
    //                 title={project.title}
    //                 description={project.description}
    //                 images={project.images}
    //                 link={`/projects/${project.linkSuffix}`} 
    //             />
    //         ))}
    //      </div>
    // </div>

    <div className='container mx-auto px-4 md:px-8 lg:px-16 py-8 font-mono mt-[40vh] md:mt-[35vh] lg:mt-[40vh]'>
    <div className='grid grid-cols-1 gap-12 md:gap-16 lg:gap-20'>
        {projects.map(project => (
            <ProjectsCard 
                key={project.title}
                title={project.title}
                description={project.description}
                images={project.images}
                link={`/projects/${project.linkSuffix}`} 
            />
        ))}
     </div>
</div>

  )
}
