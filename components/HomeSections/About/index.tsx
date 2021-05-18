import React from 'react'
import AboutContent from './AboutContent'
import { AboutImage } from './AboutImage'
import { useQuery, gql } from '@apollo/client';

const ABOUT = gql`
  query { 
    about{
      title 
      description
      imageURL
    }
  }
`;
const About = () => {
  const aboutRes = useQuery(ABOUT);

  if (aboutRes.error) return (<div>Failed to load</div>)
  if (aboutRes.loading) return (<div>Loading...</div>)

  const { title, description, imageURL } = aboutRes.data.about

  return (
    <div className="about">
      <AboutContent title={title} description={description} />
      <AboutImage imageURL={imageURL} />
      <style jsx global>{`
        .about {
          display: grid;
          grid-auto-flow: column;
          justify-content: center;
          grid-gap: 3vmin;
        }     
      `}</style>
    </div>

  )
}
export default About
