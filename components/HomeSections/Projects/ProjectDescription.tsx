import React from 'react'
import { IProject } from '.'

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
