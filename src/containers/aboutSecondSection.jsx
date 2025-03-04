import React from 'react'

import style from '@styles/css/aboutSecondSection.module.css'

const aboutSecondSection = () => {

    const listSkills = [
        {
            alt: "Python-logo",
            image: "https://ziadoua.github.io/m3-Markdown-Badges/badges/Python/python3.svg",
        },
        {
            alt: "React-logo",
            image: "https://ziadoua.github.io/m3-Markdown-Badges/badges/React/react2.svg",
        },
        {
            alt: "Linux-logo",
            image: "https://ziadoua.github.io/m3-Markdown-Badges/badges/Linux/linux2.svg",
        },
        {
            alt: "Docker-logo",
            image: "https://ziadoua.github.io/m3-Markdown-Badges/badges/Docker/docker3.svg",
        }
    ]

    const specializedSkills = [
        {
            alt: "Kubernetes-logo",
            image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-original.svg",
            title: "Kubernetes"
        },
        {
            alt: "ArgoCD-logo",
            image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/argocd/argocd-original.svg",
            title: "ArgoCD"
        },
        {
            alt: "Helm-logo",
            image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/helm/helm-original.svg",
            title: "Helm"
        },
        {
            alt: "Terraform-logo",
            image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/terraform/terraform-original.svg",
            title: "Terraform"
        },
        {
            alt: "AWS-logo",
            image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
            title: "AWS"
        }
    ]

    const skills = listSkills.map((skill, index) => (
        <li key={index}>
            <img src={skill.image} alt={skill.alt} />
            <p>{skill.title}</p>
        </li>
    ))

    const specialized = specializedSkills.map((skill, index) => (
        <li key={index}>
            <img src={skill.image} alt={skill.alt} />
            <p>{skill.title}</p>
        </li>
    ))

    return (
        <section className={style.secondSection}>
            <h2>Skills</h2>
            <ul>
                {skills}
            </ul>
            <h2>Specialized in</h2>
            <ul className={style.specializedSection} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
                {specialized}
            </ul>
        </section>
    )
}

export default aboutSecondSection