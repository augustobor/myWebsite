import React from 'react'

import style from '@styles/css/websiteProfileArticle.module.css'

const websiteProfileArticle = ({ text }) => {

    return (
        
        <article className={style.websiteProfileArticle}>
            <p>
                {text}
            </p>
        </article>
    )
}

export default websiteProfileArticle