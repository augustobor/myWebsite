import React from 'react'

import WebsitePortfolioPortfolio from '@components/websitePortfolioPortfolio'

import style from '@styles/css/websitePortfolio.module.css'

const websitePortfolio = () => {


    return (
    <section className={style.websitePortfolio}>

        <h1>Projects</h1>
        <WebsitePortfolioPortfolio />
    </section>
    )
}

export default websitePortfolio