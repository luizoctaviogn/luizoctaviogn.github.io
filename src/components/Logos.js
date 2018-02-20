import React from 'react'

const Logos = (props) => (
  <section className="py-5 pb-3">
    <div className="container">
      {props.title ? <h2 className="mb-4">{props.title}</h2> : null}
      <ul className="row list-unstyled mb-0">
        {props.logos ? props.logos.map((logo, index) => (
          <li className="col-xs-12 col-sm-6 col-lg-3 mb-3" style={{height: 128}}>
            <a href={logo.href ? logo.href : '#!'} style={!logo.href ? {cursor: 'default'}  : null}>
              <div style={{backgroundImage: `url(${logo.src})`, backgroundSize: 'contain'}} className="bg-cover h-100 d-block mx-auto" /></a>
          </li>
        )
      ) : null}
      </ul>
    </div>
  </section>
)

export default Logos
