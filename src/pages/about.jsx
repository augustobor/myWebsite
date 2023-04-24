import React from 'react'

import style from '@styles/css/about.css'

import AboutFristSection from '@containers/aboutFirstSection'
import AboutSecondSection from '@containers/aboutSecondSection'
import AboutThirdSection from '@containers/aboutThridSection'
import AboutFourthSection from '@containers/aboutFourthSection'

const About = () => {
    return (
        <>
            <AboutFristSection />
            <AboutSecondSection />
            <AboutThirdSection />
            <AboutFourthSection />
        </>
    )
}

export default About