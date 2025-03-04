import React from 'react'

import styles from '@styles/css/certificateSection.module.css'

const certificateSection = () => {

    const certificates = [
        {
            title: "AWS Certified Solutions Architect Associate",
            image: "https://www.cloudcamp.la/img/aws_saa_badge.png",
            link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/PNT4P271VM4EQKWF"
        },
        {
            title: "EF SET B2 Certificate",
            image: "https://a.storyblok.com/f/79503/250x250/8402d11651/group-3.png",
            link: "https://cert.efset.org/YafJEY"
        },
    ]

    const listCertificates = certificates.map((cert, index) => (
        <article key={index}>
            <h2>{cert.title}</h2>
            <img src={cert.image} alt={cert.title} />
            <section className={styles.certificateDescription}>
                <a className={styles.certificateButton} href={cert.link} target="_blank" rel="noopener noreferrer">View Certificate</a>
            </section>
        </article>
    ))

    return (
        <section className={styles.certificateSection}>
            <h1>Certificates</h1>
            <div className={styles.certificateList}>
                {listCertificates}
            </div>
        </section>
    )
}

export default certificateSection
