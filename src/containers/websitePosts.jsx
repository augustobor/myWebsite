import React from 'react'

import style from '@styles/css/websitePost.css'

const websitePosts = () => {

    const texts = [
        `
        As a passionate by technology and innovation 
        I research and bring a brief opinion about 
        the most potencially and interested trends
        `
    ]

    const posts = texts.map((text) => (
        <article className={style.websitePostsDescription}>

            <p>
               {text}
            </p>
            <hr/>

        </article>
        
    ))

    return (
        <section className={style.websitePosts}>
            {posts}
        </section>
    )
}

export default websitePosts