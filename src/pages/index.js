import React from 'react'
import Link from 'gatsby-link'
import Main from '../components/Main'
import Features from '../components/Features'
import About from '../components/About'
import Logos from '../components/Logos'

const logo = require('../assets/img/logos/1.svg')

const IndexPage = () => (
  <div>
    <Main
      tagline="Seu site personalizado em até 3 dias"
      subtagline="Ganhe presença na web com baixo custo e agilidade"
      cta="Adquira o seu"
      action={{
        href: '/request'
      }}
    />
    <Features
      features={[
        {
          icon: 'smartphone',
          title: 'Conquiste seus usuários com um site veloz',
          description: '79% dos usuários de smartphones esperam obter informação imediata quando usam a internet'
        },
        {
          icon: 'search',
          title: 'Seja encontrado no Google',
          description: 'Páginas otimizadas para obter melhor posicionamento nos resultados de busca'
        },
        {
          icon: 'activity',
          title: 'Acompanhe seus resultados',
          description: 'Saiba a quantidade, perfil e comportamento de seus visitantes'
        },
        {
          icon: 'wind',
          title: 'Sem complicações e esforço mínimo',
          description: 'Foque no seu negócio enquanto desenvolvemos a experiência do seu usuário'
        },
      ]}
    />
    <About content={{
      title: 'Sobre o Panthera',
      about: "Uma solução para o **microempreendedor e o profissional liberal obterem presença na web**.\n\nO Panthera possibilita a **inserção e expansão** daqueles que tem visão de crescimento empresarial num **mercado repleto de oportunidades** de negócios como o digital por um **preço muito acessível e de forma prática e rápida**.\n\nConsiste em um **site padrão com itens personalizáveis** que será **entregue em até três dias**. Sua única tarefa será **bater um papo com a gente** e nos contar o que deseja ter em seu site ;)"
    }} />
    <Logos title="Usado por" logos={[{
      src: logo,
      alt: 'adobe after effects',
      href: 'http://adobe.com'
    },{
      src: logo
    },{
      src: logo
    },{
      src: logo
    },{
      src: logo
    },{
      src: logo
    },{
      src: logo
    },{
      src: logo
    },]}/>
  </div>
)

export default IndexPage
