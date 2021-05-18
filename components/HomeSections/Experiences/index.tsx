import React from 'react'
import ExperiencesMenu from './ExperiencesMenu'
import { useQuery, gql } from '@apollo/client';

export interface IExperience {
    title: string
    company: string
    location: string
    companyWebsite: string
    startingDate: string
    endingDate: string
    duties: Array<string>
}


const EXPERIENCES = gql`
  query { 
    experiences{
        title
        company
        location
        companyWebsite
        startingDate
        endingDate
        duties
    }
  }
`;
const Experiences = () => {
    const experiencesRes = useQuery(EXPERIENCES);

    if (experiencesRes.error) return (<div>Failed to load</div>)
    if (experiencesRes.loading) return (<div>Loading...</div>)

    const { experiences } = experiencesRes.data

    const titleElement = (
        <div className="experiences-title">
            <h2>Experience</h2>
        </div>
    )

    return (
        <div className="experiences">
            {titleElement}
            <ExperiencesMenu experiences={experiences} />
            <style jsx global>{`
                .experiences {
                    display: grid;
                    grid-gap: 1.5vh;
                }
                .experiences-title {
                    display: grid;
                    justify-content: left;
                    align-content: flex-end;
                }
            `}</style>
        </div>
    )
}
export default Experiences