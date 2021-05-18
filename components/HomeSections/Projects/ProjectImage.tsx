import React from 'react'
import { IProject } from '.'

interface ProjectImageProps {
    project?: IProject
}
export const ProjectImage = (props: ProjectImageProps) => {
    const { project } = props

    const subtitleElement = (
        <div className="projects-project-image-subtitle">
            <h2>{project?.subtitle}</h2>
        </div>
    )
    const projectImage = (
        < div className='projects-project-image' >
            {subtitleElement}
            <img src={project?.imageURL} alt="Project Image" />
        </div >
    )

    return (
        <>
            {projectImage}
            <style jsx global>{`                
                .projects-project-image img {
                    max-width: 65vmin;
                }
                .projects-project-image-subtitle {
                    display: flex;
                    justify-content: center;
                }
            `}</style>
        </>
    )
}
