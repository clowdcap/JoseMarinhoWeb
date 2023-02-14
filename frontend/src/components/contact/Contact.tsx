// import React from 'react'
import './contact.scss'
import {MdOutlineEmail} from 'react-icons/md'
import {AiFillLinkedin, AiFillGithub, AiFillInstagram} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
// import emailjs from 'emailjs-com';

const Contact = () => {
  // const form = useRef()

  // const sendEmail = (e) => {
  //   e.preventDefault()

  //   emailjs.sendForm('service_qa1ipil', 'template_e9fhvgr', form.current, 'wBAaLpARj0sahDE4l')
  //     .then((result) => {
  //         console.log(result.text)
  //     }, (error) => {
  //         console.log(error.text)
  //   })
  //   e.target.reset()
  // }

  return (
    <section id="contact">
      <h5>Entre em</h5>
      <h2>Contato</h2>

      <div className="container contact__container">
        <div className="contact__options">


          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+55 41 9 9272-5388</h5>
            <a href="https://api.whatsapp.com/send?phone=+5541992725388&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os." target="_blank">Enviar uma mensagem</a>
          </article>

          <article className="contact__option">
            <AiFillLinkedin className="contact__option-icon" />
            <h4>Linkedin</h4>
            <h5>José Marinho Dev</h5>
            <a href="https://www.linkedin.com/in/jose-marinho-dev/" target="_blank">Ver meu Perfil</a>
          </article>

          <article className="contact__option">
            <AiFillGithub className="contact__option-icon" />
            <h4>Github</h4>
            <h5>Clowdcap</h5>
            <a href="https://github.com/clowdcap" target="_blank">Ver Repositório</a>
          </article>

          <article className="contact__option">
            <AiFillInstagram className="contact__option-icon" />
            <h4>Instagram</h4>
            <h5>Arquiteto Marinho</h5>
            <a href="https://www.instagram.com/arquitetomarinho/" target="_blank">Ver meu Perfil</a>
          </article>

          
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            
            <h5>jose@josemarinho.com.br</h5>
          </article>

        </div>

        {/* <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" id="name" placeholder='Seu nome completo ...' required/>
          <input type="email" name="email" id="email" placeholder='Seu email ...' required/>
          <textarea name="message" id="message" rows="7" placeholder='Sua Mensagem' required></textarea>
          <button type="submit" className='btn btn-primary'>Enviar mensagem</button>
        </form> */}
      </div>
    </section>
  )
}

export default Contact