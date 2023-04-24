import React from 'react'

import OtherSkills from '@components/otherSkills'

import style from '@style/css/aboutThirdSection'

const aboutThirdSection = () => {

        return (
            <section className={style.thridSection}>
                <article>
                    <p>Other skills</p>
                    <hr/>
                </article>
                <OtherSkills />
            </section>
        )
}

export default aboutThirdSection