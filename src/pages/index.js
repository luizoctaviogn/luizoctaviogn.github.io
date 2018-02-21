import React from 'react'
import Link from 'gatsby-link'
import Main from '../components/Main'
import Features from '../components/Features'
import About from '../components/About'
import Logos from '../components/Logos'

const logoRedBull = require('../assets/img/logos/red-bull.png')
const logoNlp = require('../assets/img/logos/nlp.png')
const logoSebrae = require('../assets/img/logos/sebrae.png')
const logoCorinthians = require('../assets/img/logos/corinthians.png')

const IndexPage = () => (
  <div>
    <Main
      tagline="Impactar e causar transformação em pessoas, projetos e empresas através de desenvolvimento e inovação é meu foco"
      cta="Vamos conversar!"
      action={{
        href: 'mailto:luizoctaviogn@gmail.com'
      }}
    />
    <Features
      features={[
        {
          icon: 'navigation',
          title: 'Liderança',
        },
        {
          icon: 'target',
          title: 'Marketing',
        },
        {
          icon: 'maximize',
          title: 'Desenvolvimento humano e empresarial',
        },
        {
          title: 'Planejamento comercial',
          icon: 'file-text'
        },
        {
          title: 'Economia comportamental',
          icon: 'users'
        },
        {
          title: 'Inovação e novas tecnologias',
          icon: 'zap'
        }
      ]}
    />
    <About content={{
      title: 'Quem sou eu',
      about: "Inconformado, frenético e completamente **apaixonado** pelo **ser humano** e suas criações.\n\n**Meu objetivo principal** é auxiliar pessoas e **desenvolver conexões internas e externas**, que possibilitem **saltos** na capacidade de **realização** e no **consciente coletivo**.\n\nAcredito que melhor forma de **solucionar os problemas sociais** e criar um futuro desejável é agregando **conhecimento**, colaboração, **empatia** e amor **à vida** e aos **negócios das pessoas**.\n\nEmpenho-me em **criar e auxiliar** projetos e empresas que geram **real impacto** na qualidade de vida e elevam o nível de expectativa das **pessoas** em relação aos **negócios**."
    }} />
    <Logos
      title="Quem confia em mim"
      logos={[{
      src: logoRedBull,
      alt: 'Red Bull',
      href: 'https://www.redbull.com/br-pt/'
    },
    {
      src: logoNlp,
      alt: 'Society of Neuro-Linguistic Programming',
      href: 'https://www.purenlp.com/'
    },
    {
      src: logoSebrae,
      alt: 'Sebrae',
      href: 'http://www.sebrae.com.br/sites/PortalSebrae'
    },
    {
      src: logoCorinthians,
      alt: 'Corinthians-Guarulhos',
      href: 'http://www.corinthiansguarulhos.com'
    }
  ]}/>
  </div>
)

export default IndexPage
