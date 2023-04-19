import React from 'react'
import WebsiteProfileArticle from '../components/websiteProfileArticle'

import profile from '@assets/profile.webp'

import styles from '@styles/css/websiteProfile.css'

const websiteProfile = () => {
    const profileText = [
        "I'm Augusto, Full-Stack Dev. I work in frontend projects",
        'I want to grow up as a professional in the software developement industry. From that, I specialized on web developement',

    ]

    const profileArticles = profileText.map((text) => <WebsiteProfileArticle text={text}/>) 
    return (
        <section className={styles.websiteProfile}>
            <img className={styles.websiteProfileImage} src={profile} alt="profile"/>
            <div>
                <p>{profileArticles}</p>
            </div>
        </section>
    )
}

export default websiteProfile