import React from 'react'
import HeroGreeting from './HeroGreeting'
import { useQuery, gql } from '@apollo/client';

const HERO = gql`
  query { 
    hero{
      title 
      description
      imageURL
    }
  }
`;
const Hero = () => {
  const heroRes = useQuery(HERO);

  if (heroRes.error) return (<div>Failed to load</div>)
  if (heroRes.loading) return (<div>Loading...</div>)

  const { title, description, imageURL } = heroRes.data.hero

  const heroImage = (
    <div className="hero-image">
      <img src={imageURL || ""} alt="Hero Image" />
    </div>
  )

  return (
    <div className="hero">
      <HeroGreeting title={title} description={description} />
      {heroImage}
      <style jsx global>{`
        .hero {
          display: grid;
          grid-auto-flow: column;
          justify-content: center;
          grid-gap: 3vmin;
        }
        .hero-image {
          display: grid;
          align-content: center;
          justify-content: center;
          max-height: 50vmin;
        }
        .hero-image img {
          max-width: 60vmin;
        }
      `}</style>
    </div>
  )
}
export default Hero