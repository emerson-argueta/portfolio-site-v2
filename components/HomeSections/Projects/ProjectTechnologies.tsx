import { ITechnology } from "."


interface ProjectTechnologiesProps {
    technologies?: Array<ITechnology>
}
export const ProjectTechnologies = (props: ProjectTechnologiesProps) => {
    const { technologies } = props

    const technologyList = (
        <div className='projects-project-logo-list'>
            {
                technologies?.map(technology => (
                    <div className="projects-project-logo-item">
                        {/* <img src={technology?.technologyIconURL} alt={"Technology Icon"} /> */}
                        <p>{technology.technology}</p>
                    </div>
                ))
            }
        </div>
    )

    return (
        <div className='projects-project-technologies'>
            {technologyList}
            <style jsx global>{`
                .projects-project-technologies {
                    display: grid;
                    justify-content: center;
                }
                .projects-project-logo-list {
                    display: flex;
                    justify-content: space-evenly;
                    flex-flow: row;
                }
                .projects-project-logo-item {
                    display: flex;
                    height: 5vh;
                    margin:5px;
                }
                .projects-project-logo-item img {
                    height: 50%;
                }
            `}</style>
        </div>
    )
}
