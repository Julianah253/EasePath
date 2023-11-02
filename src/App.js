import React from 'react'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Form from './components/form/Form'
import Faq from './components/FAQ/Faq'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <About/>
      <Form/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default App