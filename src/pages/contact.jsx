import React from 'react'

import ContactFirstSection from '@containers/contactFirstSection'
import Form from '@components/form'

import animation from '@styles/css/animations.module.css'

import style from '@styles/css/contact.module.css'

const Contact = () => {
        

    return (
        <section className={style.contact}>
            <ContactFirstSection />
            <Form />
        </section>
    )
}

export default Contact