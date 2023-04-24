import React from 'react'


import style from '@style/css/project';
 
const project = ({ link, image, alt, name, description }) => {

    return (
        <>
            <article>
            <a href={link}><img src={image} alt={alt}/>
                <div>
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
            </a>
        </article>
        </>
    )
}

export default project