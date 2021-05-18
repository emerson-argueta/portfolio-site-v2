import React, { Fragment } from "react"

interface AboutContentProps {
    title?: string
    description?: string
}
const AboutContent = (props: AboutContentProps) => {
    const { description, title } = props

    const descriptionElement = (
        <div className="about-content-description">
            {
                description?.
                    split('<br/>').
                    filter((s) => s.trim() !== "").
                    map((s, i) => (<Fragment key={i}><p>{s.trim()}</p></Fragment>))
                || "No Description"
            }
        </div>

    )
    const titleElement = (
        <div className="about-content-title">
            <h1>{title || "No Title"}</h1>
        </div>
    )

    return (
        <div className='about-content'>
            {titleElement}
            {descriptionElement}
            <style jsx global>{`
                .about-content {
                    display: grid;
                    grid-gap: 1.5vmin;
                }
                .about-content-title {
                    display: grid;
                    justify-content: left;
                    align-content: flex-end;
                }
                .about-content-description {
                    display: flex;
                    justify-content: left;
                    flex-flow: column;
                }
            `}</style>
        </div>

    )
}
export default AboutContent