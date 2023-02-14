
import './services.scss'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>Todos os meus</h5>
      <h2>Serviços</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Arquiteto e Urbanista</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Desenvolvimento e/ou Auxilio de projetos residenciais e comerciais</p>  
            </li>

            <li>
              <BiCheck className="service__list-icon"/>
              <p>Consultoria e elaboração em projetos para aprovação de Prefeitura</p>  
            </li>
            
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Utilização de ferramentas do sistema BIM em meus projetos</p>  
            </li>

            <li>
              <BiCheck className="service__list-icon"/>
              <p>Desenvolvimento de Maquetes Eletrînicas</p>  
            </li>

            
          </ul>

        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Desenvolvimento de landing pages, portifolios, blogs e sistemas em geral</p>  
            </li>

            <li>
              <BiCheck className="service__list-icon"/>
              <p>Soluções tecnologicas e com constante atualizações na área</p>  
            </li>

            <li>
              <BiCheck className="service__list-icon"/>
              <p>Utilização do ecossistema JavaScript como tecnologia primária</p>  
            </li>
            
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Manutenção e consultoria em Desenvolvimento Web</p>  
            </li>
          </ul>

        </article>


        <article className="service">
          <div className="service__head">
            <h3>Designer</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Criação e elaboração de projeots Design</p>  
            </li>

            <li>
              <BiCheck className="service__list-icon"/>
              <p>Manipulação e criação de imagens com Photoshop</p>  
            </li>

            <li>
              <BiCheck className="service__list-icon"/>
              <p>Elaboração de Templates e Layouts para projetos</p>  
            </li>
            
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Utilizo as ferramentas Figma, Canva, Illustrator, XD e InDesign</p>  
            </li>
          </ul>

        </article>



      </div>

    </section>
  )
}

export default Services