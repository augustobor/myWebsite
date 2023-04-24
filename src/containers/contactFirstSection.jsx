import React from 'react'

import style from '@styles/css/contactFirstSection.css'

const contactFirstSection = () => {

    const texts = [
        'I have availability to realize remote work in anywhere',
        'You could contact me using the next contact form or send me an email to augus_borromeo@hotmail.com',
        'Also you could find me at LinkedIn, Twitter, Instagram or GitHub'
    ]

    const contactText = texts.map((text) => (
        <p>{text}</p>
    ))

    return (
        <section className={style.firstSection}>
            {contactText}
        </section>
    )
}


export default contactFirstSection