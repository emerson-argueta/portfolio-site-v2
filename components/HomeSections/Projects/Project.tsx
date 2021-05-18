import React from "react"
import { useState } from "react"
import { IProject } from "."
import { ProjectDescription } from "./ProjectDescription"
import { ProjectImage } from "./ProjectImage"
import { ProjectLinks } from "./ProjectLinks"
import { ProjectTechnologies } from "./ProjectTechnologies"

interface ProjectProps {
    project: IProject
}
export const Project = (props: ProjectProps) => {
    const [imageOrDescriptionToggle, setImageOrDescriptionToggle] = useState(true)
    const { project } = props

    const toggleImageOrDescription = () => {
        setImageOrDescriptionToggle(!imageOrDescriptionToggle)
    }

    const titleElement = (
        <div className="projects-project-title">
            <h1>{project.title}</h1>

        </div>
    )
    const imageOrDescription = (
        <>
            {
                !imageOrDescriptionToggle && <ProjectDescription project={project} />
            }
            {
                imageOrDescriptionToggle && <ProjectImage project={project} />
            }
        </>
    )

    return (
        <div className='projects-project' key={project.title}>
            {titleElement}
            <ProjectTechnologies technologies={project.technologies} />


            <div
                className="projects-project-image-or-description"
                onClick={() => { toggleImageOrDescription() }}
            >
                {imageOrDescription}
            </div>
            <ProjectLinks project={project} />
            <style jsx global>{`
                .projects-project {
                    display: grid;
                    height: 80vh;
                }
                .projects-project-image-or-description {
                    display: grid;
                    grid-auto-flow: row;
                    justify-content: center;
                    align-content: center;
                    height: 75vh;f
                }
                .projects-project-title {
                    display: flex;
                    justify-content: center;
                }
            `}</style>
        </div>
    )

}
