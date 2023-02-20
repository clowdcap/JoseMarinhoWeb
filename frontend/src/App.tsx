import './App.scss'

import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portifolio from './components/portifolio/Portifolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portifolio />
        {/*
        <Testimonials />
        */}
      <Contact />
      <Footer />
    </>
  )
}

export default App
