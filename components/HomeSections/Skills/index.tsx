import React from 'react'
import Skill from './Skill'
import { useQuery, gql } from '@apollo/client';

export interface ISkill {
    name?: string
    iconURL?: string
}

const SKILLS = gql`
  query { 
    skills{
        title
        skills{
            name
            iconURL
        }
    }
  }
`;

const Skills = () => {
    const skillsRes = useQuery(SKILLS);

    if (skillsRes.error) return (<div>Failed to load</div>)
    if (skillsRes.loading) return (<div>Loading...</div>)

    const { title, skills } = skillsRes.data.skills

    const titleElement = (
        <div className="skills-title">
            <h2>{title || "No Title"}</h2>
        </div>
    )
    const skillsList = (skills: Array<ISkill>) => {
        return (
            <div className="skills-list">
                {skills.map(skill => <Skill skill={skill} />)}
            </div>
        )
    }

    return (
        <div className="skills">
            {titleElement}
            {skillsList(skills || [])}
            <style jsx global>{`
                .skills {
                    display: grid;
                    grid-gap: 1.5vmin;
                }
                .skills-title {
                    display: grid;
                    justify-content: center;
                    align-content: flex-end;
                }
                .skills-list {
                    display:flex;
                    flex-direction:row;
                    text-align: center;
                    justify-content: space-evenly;
                }
            `}</style>
        </div>
    )
}
export default Skills