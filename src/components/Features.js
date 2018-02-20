import React from 'react'
import Markdown from 'react-markdown'
import FeatherIcon from '../components/FeatherIcon'

const Features = (props) => (
  <section className="pt-5 pb-2">
    <div className="container">
      <div className="row">
        {props.features.map((feature, index) => (
          <div className="col-12 col-md-4 mb-5" key={index}>
            <div className="card">
              <div className="card-body p-4"><div className="mb-3">
              <FeatherIcon size={24} icon={feature.icon} />
            </div>
            <h4 className="mb-0">{feature.title}</h4>
            <span className="mb-0 font-weight-light"><Markdown>{feature.description}</Markdown></span></div>
          </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Features
