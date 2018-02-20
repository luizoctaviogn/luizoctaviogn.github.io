import React from 'react'

const Main = (props) => (
  <section
    className="d-flex py-5 align-items-center main-section bg-cover"
    style={{backgroundImage: `url('${require('../assets/img/main-bg.jpg')}')`}}
    >
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <h1 className="text-white"><strong>{props.tagline}</strong></h1>
          <p className="h4 font-weight-light text-white mb-0">{props.subtagline}</p>
            {props.cta ? (
              <a href={props.action ? props.action.href ? props.action.href : '#!' : '#!'}>
                <button className="btn btn-primary mt-3" onClick={props.action ? props.action.func ? props.action.func : null : null}>
                {props.cta}
              </button>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  </section>
)

export default Main
