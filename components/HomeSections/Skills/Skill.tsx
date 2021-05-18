import { ISkill } from "."

interface SkillProps {
    skill: ISkill
}
const Skill = (props: SkillProps) => {
    const { skill } = props

    const skillIcon = (<img src={skill.iconURL} alt="Skill Icon" />)

    return (
        <div className='skills-skill' key={skill.name}>
            <span>
                {skillIcon}
                <p>{skill.name}</p>
            </span>
            <style jsx global>{`
                .skills-skill {
                    display: flex;
                }
                .skills-skill img{
                    height: 2.5vmin;
                }
            `}</style>
        </div>
    )
}

export default Skill