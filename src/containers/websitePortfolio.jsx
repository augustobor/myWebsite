import React from 'react'

import WebsitePortfolioPortfolio from '@components/websitePortfolioPortfolio'

import style from '@styles/css/websitePortfolio.module.css'
import { useNavigate } from 'react-router-dom'


const websitePortfolio = () => {

    const textArticle = [
        'Everytime I try to be updated with news and tools for apply the better resources in my projects',
        'I started as a computer student in 2019 and since 2020 I began taking software developement courses at Platzi  '
    ]
    
    const portfolioArticleList = textArticle.map((text) => 
    <article>
        <p>{text}</p>
    </article>) 


    return (
    <section className={style.websitePortfolio}>
        {portfolioArticleList}

        <a className={style.cvButton} download="Augusto_Borromeo_CV" href="Augusto_Borromeo_CV.pdf">Download Resume</a>
        <WebsitePortfolioPortfolio />
        <p>WOULD YOU LIKE SEE MY PROJECTS?</p>

        <a className={style.websitePortfolioButton} onClick={() => {useNavigate('/portfolio')}}>
            See portfolio
        </a>
    </section>
    )
}

export default websitePortfolio