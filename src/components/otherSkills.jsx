import React from 'react'

import sql from '@assets/bxs-data.svg'
import figma from '@assets/bxl-figma.svg'
import typescript from '@assets/bxl-typescript.svg'
import nodejs from '@assets/bxl-nodejs.svg'

import style from '@styles/css/otherSkills.module.css'

const otherSkills = () => {

    const skillsInfo = [
        {
            image: sql,
            alt: "DataBase-Logo",
            name: "SQL"
        },
        {
            image: figma,
            alt: "Figma-Logo",
            name: "Figma"
        },
        {
            image: typescript,
            alt: "Ts-Logo",
            name: "Typescript"
        },
        {
            image: nodejs,
            alt: "Node-Logo",
            name: "Node.js"
        }
    ]

    const skills = skillsInfo.map((info) => (
        <div>
            <img src={info.image} alt={info.alt} />
            <p>{info.name}</p>
        </div>
    ))

    return (
        <div className={style.thirdSectionOtherSkills}>
            {skills}
        </div>
    )
}

export default otherSkills