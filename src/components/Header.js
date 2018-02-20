import React from 'react'
import Link from 'gatsby-link'
import Logo from './Logo'
import FeatherIcon from '../components/FeatherIcon'
import SocialMedia from '../components/SocialMedia'

const Header = (props) => (
  <div className="my-3 bg-black">
    <div className="container">
      <div className="d-flex align-items-center">
        <div style={{flex: 1}}>
          <Logo name="luizoctavio" />
        </div>
        <div>
          {props.phone ? (
            <div className="d-flex align-items-center">
              <FeatherIcon icon="phone" size={16} /> <span className="ml-2">{props.phone}</span>
            </div>
          ) : null}
        </div>
        <div className="ml-3 d-flex align-items-center">
          <SocialMedia
            size={18}
           pages={
             [ {
               icon: 'facebook',
               url: 'https://www.facebook.com/luizoctavio.goncalvesneto'
             },
             {
               icon: 'linkedin',
               url: 'https://www.linkedin.com/in/luiz-octavio-goncalves-neto-0b920462/'
             },
             {
               icon: 'instagram',
               url: 'https://instagram.com/luizoc'
             },
             {
             icon: 'medium',
             url: 'https://medium.com/@luizoctviogonalvesneto'
           }]
           }/>
        </div>
      </div>
    </div>
  </div>
)

export default Header
