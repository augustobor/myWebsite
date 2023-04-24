import React from 'react'

import ProfileAbout from '@assets/profile-about.webp'

import style from '@styles/css/aboutFirstSection.module.css'

const aboutFirstSection = () => {
    
    const texts = [
        "My name is Augusto Borromeo, informatic and developer passionated of technology. In 2015 I started learning the foundamentals of programation."
        , "I signed up at 2019 in the computation career where right now I continue my studies. At the beggining of the pandemic I decided to improve my studies learning different skills. Beetwen them git, web developement, Becoming in a developer ready to work in team."
    ]
    const aboutArticles = texts.map((text) => (
        <article>
            <p>
                {text}
            </p>
        </article>
    ))

    return (
        <section className={style.firstSection}>
            <img src={ProfileAbout} alt="second-profile-photo"/>
            <div>
                {aboutArticles}
            </div>
        </section>
    )
}

export default aboutFirstSection