import React from 'react'

import style from '@styles/css/aboutSecondSection.module.css'

const aboutSecondSection = () => {

    const listSkills = [
        {
            alt: "Python-logo",
            image: "https://ziadoua.github.io/m3-Markdown-Badges/badges/Python/python3.svg",
        },
        {
            alt: "React-logo",
            image: "https://ziadoua.github.io/m3-Markdown-Badges/badges/React/react2.svg",
        },
        {
            alt: "AWS-logo",
            image: "https://ziadoua.github.io/m3-Markdown-Badges/badges/AWS/aws2.svg",
        },
        {
            alt: "Docker-logo",
            image: "https://ziadoua.github.io/m3-Markdown-Badges/badges/Docker/docker3.svg",
        }
    ]

    const skills = listSkills.map((skill) => (
        <li>
            <img src={skill.image} alt={skill.alt} />
            <p>{skill.title}</p>
        </li>
    ))
    return (
        <section className={style.secondSection}>
            <ul>
                {skills}
            </ul>
        </section>
    )
}

export default aboutSecondSection