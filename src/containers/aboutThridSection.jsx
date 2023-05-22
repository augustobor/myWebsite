import React from 'react'

import OtherSkills from '@components/otherSkills'

import style from '@styles/css/aboutThirdSection.module.css'

const aboutThirdSection = () => {

        return (
            <section className={style.thridSection}>
                <article>
                    <p className={style.title}>Other skills</p>
                    <hr/>
                </article>
                <OtherSkills />
            </section>
        )
}

export default aboutThirdSection