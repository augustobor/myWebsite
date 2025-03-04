import React from 'react'

import github from '@assets/bxl-github.svg'
import linkedin from '@assets/bxl-linkedin-square.svg'

import style from '@styles/css/footer.module.css'

const Footer = () => {
    return (
    <footer className={style.websiteContact}>
        
        <p>Find me at:</p>
        <hr style={{ border: '1px solid black', opacity: 0.1 }} /> {/* Added subtle black horizontal line */}
        <div className={style.websiteContactLogos}>

            <article>
                <a target="_blank" href="mailto:augusborromeo@gmail.com" rel="noopener">
                    <img className={style.socialIcon} src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/gmail/default.svg" alt="gmail-image"/> 
                </a>
            </article>
            <article className={style.githubIcon}>
                <a target="_blank" href="https://github.com/augustobor" rel="noopener">
                    <img className={style.socialIcon} src={github} alt="github-image"/> 
                </a>
            </article>
            <article>
                <a target="_blank" href="https://www.linkedin.com/in/augusto-borromeo-b75255218/" rel="noopener">
                    <img className={style.socialIcon} src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/linkedin/default.svg" alt="linkedin-image"/> 
                </a>
            </article>
            <article>
                <a target="_blank" href="https://medium.com/@augusborromeo" rel="noopener">
                    <img className={style.socialIcon} src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/medium/default.svg" alt="twitter-image"/>
                </a>
            </article>
        </div>
    </footer>
    )
}

export default Footer