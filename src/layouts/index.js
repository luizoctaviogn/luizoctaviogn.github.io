import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

import '../assets/styles/main.scss'

const TemplateWrapper = ({ children }) => (
  <div style={{minHeight: '100vh'}} className="d-flex flex-column">
    <Helmet
      title="Luiz Octavio – Desenvolvendo pessoas e negócios"
      meta={[
        { name: 'description', content: 'Psicologia humana,  consultoria comercial,  direcionamento com base em novas tecnologias, técnicas de marketing e liderança são ferramentas que utilizo para que empresas e pessoas elevem seus negócios e qualidade de vida' },
      ]}
    />
    <div style={{flex: 1}}>
      <div>
        {children()}
      </div>
    </div>
    <Footer
      phone="(32) 99149-8161"
      mail="luizoctaviogn@gmail.com"
      socialPages={
       [ {
         icon: 'facebook',
         url: 'https://www.facebook.com/luizoctavio.goncalvesneto',
         color: '#212121'
       },
       {
         icon: 'linkedin',
         url: 'https://www.linkedin.com/in/luiz-octavio-goncalves-neto-0b920462/',
         color: '#212121'
       },
       {
         icon: 'instagram',
         url: 'https://instagram.com/luizoc',
         color: '#212121'
       },
       {
       icon: 'medium',
       url: 'https://medium.com/@luizoctviogonalvesneto',
       color: '#212121'
     }]
     }
    />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
