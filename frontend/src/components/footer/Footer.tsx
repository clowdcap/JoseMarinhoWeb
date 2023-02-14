import React from 'react'
import './footer.scss'
import {AiFillGithub, AiFillLinkedin, AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>José Marinho</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">Sobre mim</a></li>
        <li><a href="#experience">Habilidades</a></li>
        <li><a href="#services">Serviços</a></li>
        {/* <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contato</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/clowdcap" target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
        <a href="https://www.linkedin.com/in/jose-marinho-dev/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
        <a href="https://www.instagram.com/arquitetomarinho/" target="_blank" rel="noopener noreferrer"><AiFillInstagram /></a>
      </div>

      <div className="footer__copyright">
        <small>José Marinho. Todos os direitos reservados.</small>
      </div>
    </footer>
  )
}

export default Footer