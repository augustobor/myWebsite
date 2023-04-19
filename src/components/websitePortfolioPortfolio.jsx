import React from 'react'

//profile image
import foxyExchangeImage from '@assets/foxy-exchange.webp'
import rockBeerImage from '@assets/rock-beer.webp'
import mentesLibresImage from '@assets/mentes-libres.webp'
import todoImage from '@assets/todo.webp'

//tools image
import html from '@assets/bxl-html5.svg'
import css from '@assets/bxl-css3.svg'
import js from '@assets/bxl-javascript.svg'
import php from '@assets/bxl-php.svg'
import pgsql from '@assets/bxl-postgresql.svg'
import react from '@assets/bxl-react.svg'

import styles from '@styles/css/websitePortfolioPortfolio.css'

const websitePortfolioPortfolio = () => {

    const articleInfo = [
        {
            alt: 'foxy exchange profile',
            profileImage: foxyExchangeImage,
            toolImages: [ html, css, js ],
            title: 'Foxy Exchange',
            subTitle: 'Exchange',
            gitHubLink: 'https://github.com/augustobor/Foxy-Exchange',
            link: 'https://foxy-exchange.vercel.app/'
        },
        {
            alt: 'rock beer profile',
            profileImage: rockBeerImage,
            toolImages: [ html, css, js ],
            title: 'Rock Beer',
            subTitle: 'web bar',
            gitHubLink: 'https://github.com/augustobor/RockBeer',
            link: 'https://rock-beer.vercel.app/'
        },
        {
            alt: "mentes libres profile",
            profileImage: mentesLibresImage,
            toolImages: [ html, css, js, php, pgsql ],
            title: 'Mentes Libres',
            subTitle: 'Book Repo',
            gitHubLink: 'https://github.com/augustobor/menteslibres',
            link: 'https://www.pabellonmenteslibres.com/'
        },
        {
            alt: 'todo profile',
            profileImage: todoImage,
            toolImages: [ react ],
            title: 'TODO-app',
            subTitle: 'todo',
            gitHubLink: 'https://github.com/augustobor/todo-app',
            link: 'https://todo-app-beryl-mu.vercel.app/'
        }
    ]
    const listPortfolio = articleInfo.map((info) => (
        <article>
            <img src={info.profileImage} alt={info.alt} />
            <section className={styles.websitePortfolioHigh}>
                <div>
                    {info.toolImages.map((img) => <img src={img}/>)}
                </div>
                <h2>{info.title}</h2>
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
        </article>
    ))
    return (
        <>
            {listPortfolio}
        </>
    )

}

export default websitePortfolioPortfolio