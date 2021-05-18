import React from 'react'
import { IProject } from '.'


interface ProjectLinksProps {
    project?: IProject
}
export const ProjectLinks = (props: ProjectLinksProps) => {
    const { project } = props

    const externalLink = (
        <a href={project?.externalLink}>
            <img src="externallink.svg" alt="external link" />
        </a>
    )
    const githubLink = (
        <a href={project?.githubLink}>
            <img src="github.svg" alt="github link" />
        </a>
    )


    return (
        <div className='projects-project-links'>
            {externalLink}
            {githubLink}
            <style jsx global>{`
                .projects-project-links {
                    display: flex;
                    justify-content: left;
                    height: 5vh;
                }
                .projects-project-links img{
                    margin: 5px;
                    height:50%;
                    width:50%;
                }
            `}</style>
        </div>
    )
}
