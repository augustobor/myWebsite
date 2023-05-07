import React from 'react'

import style from '@styles/css/portfolio.module.css'

import PortfolioProjects from '@containers/portfolioProjects'

const Portfolio = () => {
    return (
        <>
            <h1 className={style.portfolioTitle}>¡Welcome to my portfolio! </h1>

            <article className={style.portfolioDescription}>
                <p>
                    These are some web projects which I developed 
                </p>
                <hr/>
            </article>
            <PortfolioProjects />
        </>
    )
}

export default Portfolio