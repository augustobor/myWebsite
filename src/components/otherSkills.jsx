import React from 'react'

import style from '@style/css/otherSkills'

const otherSkills = () => {

    const skillsInfo = [
        {
            image: "/assets/bxs-data.svg",
            alt: "DataBase-Logo",
            name: "SQL"
        },
        {
            image: "/assets/bxl-figma.svg",
            alt: "Figma-Logo",
            name: "Figma"
        },
        {
            image: "/assets/bxs-data.svg",
            alt: "Ts-Logo",
            name: "Typescript"
        },
        {
            image: "/assets/bxl-nodejs.svg",
            alt: "Node-Logo",
            name: "Node.js"
        }
    ]

    const skills = skillsInfo.map((info) => (
        <div>
            <img src={info.image} alt={info.alt} />
            <p>info.name</p>
        </div>
    ))

    return (
        <div className={style.thirdSectionOtherSkills}>
            {skills}
        </div>
    )
}

export default otherSkills