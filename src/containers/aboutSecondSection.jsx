import React from 'react'


import style from '@style/css/aboutSecondSection'

const aboutSecondSection = () => {

    const listSkills = [
        {
        alt: "Python-logo",
        image: "/assets/bxl-python.svg",
        title: "Python"
        },
        {
            alt: "GitHub-logo",
            image: "/assets/bxl-git.svg",
            title: "GIT"
        },
        {
            alt: "HTML-logo",
            image: "/assets/bxl-html5.svg",
            title: "HTML"
        },
        {
            alt: "CSS-logo",
            image: "/assets/bxl-css3.svg",
            title: "CSS"
        },
        {
            alt: "JS-logo",
            image: "/assets/bxl-javascript.svg",
            title: "JS"
        },
        {
            alt: "React-logo",
            image: "/assets/bxl-react.svg",
            title: "React.js"
        },
        {
            alt: "Vue-logo",
            image: "/assets/bxl-vuejs.svg",
            title: "Vue.js"
        },
    ]

    render(
        <section className={style.secondSection} class="second-section">
            <ul>

            </ul>
        </section>
    )
}

export default aboutSecondSection