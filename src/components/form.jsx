import React from 'react'

import style from '@styles/css/form.module.css'

const form = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        const newForm = new FormData(this)
        mailButton.setAttribute('href', `mailto:augusborromeo@gmail.com?subject=${newForm.get('matter')}&body=${newForm.get('message')}`)
        mailButton.click()
    }

    return (
        <section className={style.form}>
            <p>¿Would you like talk?</p>
            <form action="" id="form">
                <input name="name" type="text" placeholder="Name" required/>
                <input name="email" type="email" placeholder="Email" required/>
                <input name="matter" type="text" placeholder="Matter" required/>
                <textarea name="message" rows="10" cols="30" placeholder="Message" required></textarea>
                <button className={style.buttonForm} type="submit" form="form">Send message</button>
            </form>
            <a id="mail-button" onClick={() => {handleSubmit()}}></a>
        </section>
    )
}

export default form