import React, { useState } from 'react'
import { IExperience } from '.'
import { useDateRange } from './useDateRange'

interface ExperiencesMenuProps {
    experiences?: Array<IExperience>
}
const ExperiencesMenu = (props: ExperiencesMenuProps) => {
    const [activeTab, setActiveTab] = useState(0)
    const { experiences } = props

    const options = (options: Array<JSX.Element>) => {
        return (
            <div className='experiences-menu-options'>
                {options}
            </div>
        )
    }

    let optionList: Array<JSX.Element> = []
    const optionContent = (experience: IExperience, index: number) => {
        optionList.push(

            <button
                className={`experiences-menu-option-${index} ${index === activeTab ? 'active' : ''}`}
                onClick={() => { setActiveTab(index) }}
                key={index}
            >
                {experience.company}
            </button>

        )

        const dateRange = useDateRange(experience.startingDate, experience.endingDate)
        return (
            <div
                className='experiences-menu-option-content'
                key={index}
                hidden={activeTab !== index}
            >
                <div className="experiences-menu-content-title">
                    <h3>
                        {experience.title + ' at '}
                        <a href={experience.companyWebsite}>{experience.company}</a>
                    </h3>
                    <h4>{dateRange}</h4>
                </div>
                <p></p>
                <div className='experiences-menu-content-duties'>
                    {experience.duties.map((duty, i) => (<p key={experience.company + "-" + i}>{duty}</p>))}
                </div>
            </div>
        )
    }

    return (
        <div className='experiences-menu'>
            {options(optionList)}
            {experiences?.map((experience, i) => optionContent(experience, i))}
            <style jsx global>{`
                .experiences-menu {
                    display: grid;
                    grid-gap: 1vh;
                }
                .experiences-menu-options {
                    display: flex;
                }
                .experiences-menu-options button{
                    color: black;
                    background: white;
                    border: none;
                }
                .experiences-menu-options button.active{
                    color: white;
                    background: black;
                    border: none;
                }
                .experiences-menu-option-content {
                    display: grid;
                }
                .experiences-menu-content-title a{
                    font-size: 3.3vmin;
                }
            `}</style>
        </div>

    )

}

export default ExperiencesMenu