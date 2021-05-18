import React from 'react'
import { IProject } from '.'
import { ProjectLinks } from './ProjectLinks'

interface ProjectDescriptionProps {
    project?: IProject
}
export const ProjectDescription = (props: ProjectDescriptionProps) => {
    const { project } = props

    return (
        <>
            {project?.description?.split("\n").map(line => (<><p>{line}</p></>))}
        </>
    )
}
