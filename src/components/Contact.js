import React from 'react'
import FeatherIcon from './FeatherIcon'
import SimpleIcon from './SimpleIcon'

const Contact = (props) => (
    <div>
      <h3><strong>{props.title || 'Contato' }</strong></h3>
      {props.mail ? (
        <div className="d-flex align-items-center">
          <FeatherIcon icon="mail" size={16} /> <span className="ml-2">{props.mail}</span>
        </div>
      ) : null}
      {props.phone ? (
        <div className="d-flex align-items-center">
          <FeatherIcon icon="phone" size={16} /> <span className="ml-2">{props.phone}</span>
        </div>
      ) : null}
    </div>
)

export default Contact
