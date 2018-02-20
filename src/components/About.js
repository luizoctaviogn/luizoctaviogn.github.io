import React from 'react'
import Markdown from 'react-markdown'

const About = (props) => (
  <section style={{position: 'relative', overflow: 'hidden'}} className="bg-secondary text-white">
      <div className="container">
        <div className="row py-5">
          <div className="col-12 col-md-6">
            <h1>{props.content.title}</h1>
            <Markdown>
              {props.content.about}
            </Markdown>
          </div>
        </div>
      </div>
      <div className="row justify-content-end no-gutters position-md-absolute" style={{width: '100%', height: '100%', minHeight: '480px', top: 0}}>
        <div className="col-12 col-md-6 pl-md-5">
          <div className="bg-cover"
            style={{
              backgroundImage: `url('${require('../assets/img/about-bg.jpg')}')`,
              width: '100%',
              height: '100%',
            }}
            ></div>
          </div>
        </div>
    </section>
  )

  export default About
