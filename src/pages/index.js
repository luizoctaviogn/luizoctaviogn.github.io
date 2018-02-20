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
      tagline="Impactar e causar transformação em pessoas, projetos e empresas através do desenvolvimento e inovação"
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
      about: "Inconformado, agitado e completamente apaixonado pelo ser humano e suas criações, tem como principal objetivo o desenvolvimento de conexões internas e externas, que possibilitem saltos na capacidade de realização e no consciente coletivo da sociedade. \n\n Acredito que melhor forma de solucionar todos os problemas sociais e criar futuros desejáveis é agregando conhecimento, capacidade de colaboração, empatia e amor á vida e aos negócios das pessoas.\n\nBusco criar e auxiliar em projetos e empresas que geram impacto real na qualidade de vida e elevam o nível de expectativa das pessoas em relação ao negócios."
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
