import React from 'react'
import './header.scss'
import CTA from './CTA'
import Me from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Olá, eu sou</h5>
        <h1>José Marinho</h1>
        <h5 className="text-ligth">Arquiteto e Urbanista / Programador</h5>
        
        {/* Importando complemento - CTA  */}
        <CTA />

        <HeaderSocials />

        <div className="me">
          <img src={Me} alt="Eu"/>
        </div>

        <a href="#contact" className='scroll__down'>Entre em contato</a>
      </div>
    </header>
  )
}

export default Header