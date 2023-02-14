import './experience.scss'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience" className='baixar'>
      
      
      <h5>Essas são as minhas</h5>
      <h2>Habilidades</h2>

      <div className="container experience__container">

        <div className="experience__box">
          <h3>Arquiteto e Urbanista</h3>
          <div className="experience__content">
            
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/> 
              <div>
                <h4>Projetos Anteprojeto / Executivo</h4>
                <small className='text-ligth'>Consultorias e Auxilio ao Arquiteto/Engenheiro</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/> 
              <div>
                <h4>Projetos Arquitetônico e Urbano</h4>
                <small className='text-ligth'>Consultorias, Levantamento e Desenvolvimento</small>
              </div>

            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/> 
                <div>
                  <h4>Fotorealismo e Modelagem 3D</h4>
                  <small className='text-ligth'>Realização de Maquetes eletronica</small>
                </div>
            </article>


            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/> 
                <div>
                  <h4>Ferramentas BIM</h4>
                  <small className='text-ligth'>Dominio com Revit e AutoCAD</small>
                </div>
            </article>


          </div>
        </div>

        <div className="experience__box">
        <h3>Desenvolvimento Web</h3>
          <div className="experience__content">
            
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/> 
              <div>
                <h4>Linguagens trabalhadas</h4>
                <small className='text-ligth'>JavaScript e TypeScript</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/> 
              <div>
                <h4>Front End</h4>
                <small className='text-ligth' >React Js, Sass, Axios, React-Router-Dom</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/> 
              <div>
                <h4>Bancos de Dados</h4>
                <small className='text-ligth' >SQLite, MySQL e MongoDB</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/> 
              <div>
                <h4>Back End</h4>
                <small className='text-ligth'>Node Js, Prisma, Fastify e Zod</small>
              </div>
            </article>

          </div>
        </div>

      </div>

    </section>
  )
}

export default Experience