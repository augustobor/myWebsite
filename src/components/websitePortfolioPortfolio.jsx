import React from 'react'

//profile image
import patitasImage from '@assets/patitas-a-casa.webp'
import todoImage from '@assets/todo.webp'

//tools image
import pgsql from '@assets/bxl-postgresql.svg'
import react from '@assets/bxl-react.svg'

import styles from '@styles/css/websitePortfolioPortfolio.module.css'

const websitePortfolioPortfolio = () => {

    const articleInfo = [
        {
            alt: 'todo profile',
            profileImage: todoImage,
            toolImages: [ react ],
            title: 'TODO-app',
            description: 'A simple and efficient to-do list application to manage your tasks.',
            tags: ['React', 'Web App', 'Frontend'],
            gitHubLink: 'https://github.com/augustobor/todo-app',
            link: 'https://todo-app-beryl-mu.vercel.app/'
        },
        {
            alt: 'patitas profile',
            profileImage: patitasImage,
            toolImages: [ react, pgsql ],
            title: 'Patitas a Casa',
            description: 'A platform to help stray animals find a home.',
            tags: ['React', 'PostgreSQL','Frontend'],
            gitHubLink: 'https://github.com/augustobor/Patitas-a-casa-frontend',
            link: 'https://patitas-a-casa-frontend.vercel.app/'
        },
    ]
    const listPortfolio = articleInfo.map((info) => (
        <article key={info.title}>
            <h2>{info.title}</h2> {/* Move title above the image */}
            <img src={info.profileImage} alt={info.alt} />
            <section className={styles.websitePortfolioHigh}> {/* New description section */}
                <p>{info.description}</p>
            </section>
            <section className={styles.websitePortfolioHigh}>
                <div>
                    {info.toolImages.map((img, index) => <img key={index} src={img} alt="tool" />)}
                </div>
                <h3>{info.subTitle}</h3>
                <div>
                    <a className={styles.websitePortfolioHighPrimaryButton} href={info.gitHubLink} target="_blank">
                            GitHub
                    </a>
                    <a className={styles.websitePortfolioHighSecondaryButton} href={info.link} target="_blank">
                            View
                    </a>
                </div>
            </section>
            <section className={styles.websitePortfolioHigh}> {/* New tags section */}
                <div className={styles.tags}>
                    {info.tags.map((tag, index) => <span key={index} className={styles.tag}>{tag}</span>)}
                </div>
            </section>
        </article>
    ))
    return (
        <section className={styles.portfolioList}>
            {listPortfolio}
        </section>
    )

}

export default websitePortfolioPortfolio