import React, { Fragment } from 'react'
import { Project } from './Project'
import { useQuery, gql } from '@apollo/client';

export interface IProject {
    title?: string
    subtitle?: string
    imageURL?: string
    githubLink?: string
    externalLink?: string
    description?: string
    technologies?: Array<ITechnology>
}
export interface ITechnology {
    technology?: string
    technologyIconURL?: string
}

const PROJECTS = gql`
  query { 
    projects {
        title
        subtitle
        imageURL
        githubLink
        externalLink
        description
        technologies {
            technology
            technologyIconURL
        }
    }
  }
`;

const Projects = () => {
    const projectsRes = useQuery(PROJECTS);

    if (projectsRes.error) return (<div>Failed to load</div>)
    if (projectsRes.loading) return (<div>Loading...</div>)

    const { projects } = projectsRes.data

    const projectList = (projects: Array<IProject>) => {
        return (
            <Fragment>
                {projects.map(project => <Project project={project} />)}
            </Fragment>
        )
    }

    return (
        <div className="projects" >
            {projectList(projects || [])}
            <style jsx global>{`
                .projects {
                    display: grid;
                    grid-gap: 3vh;
                    margin-top: 10vh;
                }
            `}</style>
        </div>
    )
}
export default Projects