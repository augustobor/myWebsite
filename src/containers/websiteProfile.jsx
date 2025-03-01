import React from 'react'

import profile from '@assets/profile-about.webp'

import CV from '@assets/Augusto_Borromeo_CV.pdf'

import styles from '@styles/css/websiteProfile.module.css'

const websiteProfile = () => {

    return (
        <section className={styles.websiteProfile}>
            <img className={styles.websiteProfileImage} src={profile} alt="profile"/>
            <div>
                <h2>Hey! I'm Augusto Borromeo 👋</h2><br />
                <h3>DevOps Engineer</h3><br />
                <p>
                    I'm Augusto Borromeo, a passionate developer and technology enthusiast. I began learning programming fundamentals in 2015. In 2019, I enrolled in a computer science program and continue my studies. During the pandemic, I enhanced my skills in areas like Git and web development, becoming a team-ready developer.
                </p>
                <a className={styles.cvButton} download="Augusto_Borromeo_CV" href={CV}>CV</a>
            </div>
        </section>
    )
}

export default websiteProfile