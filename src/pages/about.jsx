import React from 'react'

import style from '@style/css/about'

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