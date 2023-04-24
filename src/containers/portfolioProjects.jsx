import React from 'react'

import Project from '@components/project'

import FoxyExchange from '@assets/foxy-exchange.webp';
import RockBeer from '@assets/rock-beer.webp';
import ZCoin from '@assets/z-coin.webp';
import HomeBanking from '@assets/home-banking.webp';
import MentesLibres from '@assets/mentes-libres.webp';
import TODO from '@assets/todo.webp';

import '@styles/css/portfolioProjects.module.css'

const portfolioProjects = () => {

    const portfolioInfo = [
        {
            portfolioLink: 'https://foxy-exchange.vercel.app/',
            imageProject: FoxyExchange,
            alt: 'first-portfolio-project',
            name: 'Foxy Exchange',
            description: 'This is my first website. I ❤ cryptocurrencies and all related with blockchain and web3. I designed a fake exchange which emulate his behavor. Finally I would like update the version in the future with vue js and web3 techs.'
        },
        {
            portfolioLink: 'https://rock-beer.vercel.app/',
            imageProject: RockBeer,
            alt: 'second-portfolio-project',
            name: 'Rock Beer',
            description: 'Rock beer is, in my opinion my favorite website design. It represent a fake bar website which want offer their products and services on internet. It includes DOM manipulation, menu and a landing page designed following the copywriting structure. '
        },
        {
            portfolioLink: 'https://z-coin.vercel.app/',
            imageProject: ZCoin,
            alt: 'zcoin-project',
            name: 'Z Coin',
            description: 'ZCoin is a web project SPA which simulate a defi exchange. It includes a table & responsive design. Made with vue-cli & figma for the design part.'
        },
        {
            portfolioLink: 'https://home-banking.onrender.com/',
            imageProject: HomeBanking,
            alt: 'home-banking-project',
            name: 'Home Banking',
            description: 'Home Banking is a fake home banking website designed to show my skills in php language and sql db management. We have Login sesion, Client interface & Transfer section which is functional using a proof account.'
        },
        {
            portfolioLink: 'https://www.pabellonmenteslibres.com/',
            imageProject: MentesLibres,
            alt: 'mentesLibres-project',
            name: 'Mentes Libres',
            description: 'Mentes libres is a website project created to show histories, poems & other creations of pavillon people. Count with almost 100 works & containes an admin mode to managment the texts DB.'
        },
        {
            portfolioLink: 'https://todo-app-beryl-mu.vercel.app/',
            imageProject: TODO,
            alt: 'todo-react-project',
            name: 'TODO app',
            description: 'In this project you can add your TODO notes & set them as completed. Made with create-react-app to show my react skills & figma por the design.'
        },
    ]
    return (
        <section>
            {portfolioInfo.map((project) => 
                <Project 
                    link={project.portfolioLink}
                    image={project.imageProject}
                    alt={project.alt}
                    name={project.name}
                    description={project.description}
                />)}
        </section>
    )
}

export default portfolioProjects