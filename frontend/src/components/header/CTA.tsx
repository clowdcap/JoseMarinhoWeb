import React from 'react'
import CV from '../../assets/CV_Jose_Marinho.pdf'


const CTA = () => {
  return (
    <div className="cta">
        <a className="btn" href={CV} download>Download CV</a>
        <a className="btn btn-primary" href="#contact">Vamos Conversar</a>
    </div>
  )
}

export default CTA