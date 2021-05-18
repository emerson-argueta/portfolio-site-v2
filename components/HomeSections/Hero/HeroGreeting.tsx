
interface HeroGreetingProps {
    title?: string
    description?: string
}

const HeroGreeting = (props: HeroGreetingProps) => {
    const { title, description } = props

    const titleElement = (
        <div className="hero-greeting-title">
            <h1> {title || "No Title"} </h1>
        </div>
    )
    const descriptionElement = (
        <div className="hero-greeting-description">
            <h3> {description || "No Description"} </h3>
        </div>
    )

    return (
        <div className="hero-greeting">
            {titleElement}
            {descriptionElement}
            <style jsx global>{`
            .hero-greeting {
                display: grid;
            }
            .hero-greeting-title {
                display: flex;
                align-items: flex-end;
            }
            .hero-greeting-description {
                display: flex;
                align-items: flex-start;
            }

            `}</style>
        </div>
    )
}
export default HeroGreeting