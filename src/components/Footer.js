import React from 'react'
import Logo from './Logo'
import Contact from './Contact'
import SocialMedia from './SocialMedia'

const Footer = (props) => (
  <div className="bg-greyLight py-5">
    <div className="container">
      <div className="row">
        <div className="col-6">
          <Contact
            phone={props.phone}
            mail={props.mail}
          />
        </div>
        <div className="col-6">
          <Logo name="luizoctavio.com" />
          {props.socialPages ? <div className="mt-2"><SocialMedia pages={props.socialPages} size={16} /></div>
           : null}
        </div>
      </div>
    </div>
  </div>
)

export default Footer
