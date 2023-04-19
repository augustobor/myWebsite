import React from 'react'

import { Link } from 'react-router-dom'

import twitter from '@assets/bxl-twitter.svg'
import github from '@assets/bxl-github.svg'
import linkedin from '@assets/bxl-linkedin-square.svg'

import style from '@styles/css/footer.css'

const Footer = () => {
    return (
    <footer className={style.websiteContact}>
        
        <p>Are you interested to know more?</p>
        <Link to="/contact">
            <a className={style.websiteContactButton}>
                CONTACT ME
            </a>
        </Link>
        <div className={style.websiteContactLogos}>

            <article>
                <a target="_blank" href="https://twitter.com/augusdeveloper" rel="noopener">
                    <img class="twitter-image" src={twitter} alt="twitter-image"/> 
                </a>
            </article>
            <article>
                <a target="_blank" href="https://github.com/augustobor" rel="noopener">
                    <img class="github-image" src={github} alt="github-image"/> 
                </a>
            </article>
            <article>
                <a target="_blank" href="https://www.linkedin.com/in/augusto-borromeo-b75255218/" rel="noopener">
                    <img class="linkedin-image" src={linkedin} alt="linkedin-image"/> 
                </a>
            </article>
        </div>

    </footer>
    )
}

export default Footer