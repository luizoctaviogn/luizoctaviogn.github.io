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
      title="Gatsby Panthera"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div style={{flex: 1}}>
      <Header />
      <div>
        {children()}
      </div>
    </div>
    <Footer
      phone="(47) 99718-2093"
      mail="mateus@dalbinaco.com"
      socialPages={
        [{
        icon: 'twitter',
        url: 'https://twitter.com/dlbnco'
      }, {
        icon: 'github',
        url: 'https://github.com/dalbinaco'
      }, {
        icon: 'instagram',
        url: 'https://instagram.com/dlbnco'
      }]
    }
    />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
