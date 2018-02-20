import React from 'react'
import Header from '../components/Header'

const Main = (props) => (
  <section
    className="d-flex flex-column pt-3 pb-5 main-section bg-cover"
    style={{height: '100vh', backgroundImage: `url('${require('../assets/img/main-bg.jpg')}')`}}
    >
      <div style={{zIndex: 100, position: 'relative'}} className="w-100"><Header /></div>
    <div className="container d-flex align-items-center" style={{height: '100%'}}>
      <div className="row">
        <div className="col-12 col-md-6">
          <h1 className="text-white">{props.tagline}</h1>
          <p className="h4 font-weight-light text-white mb-0">{props.subtagline}</p>
            {props.cta ? (
              <a href={props.action ? props.action.href ? props.action.href : '#!' : '#!'}>
                <button className="btn btn-primary mt-3 text-white" onClick={props.action ? props.action.func ? props.action.func : null : null}>
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
