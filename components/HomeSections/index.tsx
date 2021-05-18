import React from 'react'
import About from './About'
import { Contact } from './Contact'
import Experiences from './Experiences'
import Hero from './Hero'
import Projects from './Projects'
import Skills from './Skills'

const HomeSections = () => {
    return (
        <div className="sections">
            <div className="fullscreen" id="hero">
                <Hero />
            </div>
            <div className="fullscreen" id="about">
                <About />
                <Experiences />
                <Skills />
            </div>
            <div className="fullscreen-projects" id="projects">
                <Projects />
            </div>
            <div className="fullscreen" id="contact">
                <Contact />
            </div>

            <style jsx global>{`
                .sections {
                    display: grid;
                    grid-gap: 3vmin;
                }
                .fullscreen {
                    display:grid;
                    justify-content: center;
                    align-content: center;
                    height: 100vh;
                    grid-gap: 3vmin;
                }
                .fullscreen-projects {
                    display:grid;
                    grid-gap: 3vh;
                }
                h1 {
                    font-size: 5.5vmin;
                    font-weight: bold;
                }
                h2 {
                    font-size: 3.5vmin;
                    font-weight: bold;
                }
                h3 {
                    font-size: 3.3vmin;
                }
                h4 {
                    font-size: 3vmin;
                }
                p {
                    font-size: 2.5vmin;
                    margin: 1vh 0;
                    line-height: 4vh;
                }
                a,button{
                    font-size: 2.5vmin;
                }
                
            `}</style>
        </div>
    )
}

export default HomeSections