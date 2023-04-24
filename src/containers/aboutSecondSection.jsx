import React from 'react'


import Python from '@assets/bxl-python.svg'
import GIT from '@assets/bxl-git.svg'
import HTML from '@assets/bxl-html5.svg'
import CSS from '@assets/bxl-css3.svg'
import JS from '@assets/bxl-javascript.svg'
import ReactImage from '@assets/bxl-react.svg'
import Vue from '@assets/bxl-vuejs.svg'

import style from '@styles/css/aboutSecondSection.css'

const aboutSecondSection = () => {

    const listSkills = [
        {
            alt: "Python-logo",
            image: Python,
            title: "Python"
        },
        {
            alt: "GitHub-logo",
            image: GIT,
            title: "GIT"
        },
        {
            alt: "HTML-logo",
            image: HTML,
            title: "HTML"
        },
        {
            alt: "CSS-logo",
            image: CSS,
            title: "CSS"
        },
        {
            alt: "JS-logo",
            image: JS,
            title: "JS"
        },
        {
            alt: "React-logo",
            image: ReactImage,
            title: "React.js"
        },
        {
            alt: "Vue-logo",
            image: Vue,
            title: "Vue.js"
        },
    ]

    const skills = listSkills.map((skill) => (
        <li>
            <img src={skill.image} alt={skill.alt} />
            <p>{skill.title}</p>
        </li>
    ))
    return (
        <section className={style.secondSection} class="second-section">
            <ul>
                {skills}
            </ul>
        </section>
    )
}

export default aboutSecondSection