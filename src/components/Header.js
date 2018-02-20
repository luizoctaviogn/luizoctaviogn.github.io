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
             icon: 'M2.846 6.36c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403H7.26l5.378 11.795 4.728-11.795H24v.403l-1.917 1.837c-.165.126-.247.333-.213.538v13.5c-.034.204.048.41.213.537l1.87 1.837v.403h-9.41v-.403l1.937-1.882c.19-.19.19-.246.19-.538V7.794l-5.39 13.688h-.727L4.278 7.794v9.174c-.052.386.076.774.347 1.053l2.52 3.06v.402H0v-.403l2.52-3.06c.27-.278.39-.67.326-1.052V6.36z',
             url: 'https://medium.com/@luizoctviogonalvesneto'
           }]
           }/>
        </div>
      </div>
    </div>
  </div>
)

export default Header
