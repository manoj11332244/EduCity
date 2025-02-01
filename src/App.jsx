import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonial from './components/Testimonial/Testimonial'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Title subtitle='OUR PROGRAM' title='What We Offer'/>
      <div className='container'>
      <Programs />
      <About />
      <Title subtitle='Gallery' title='Campus Photos'/>
      <Campus />
      <Title subtitle='TESTIMONIALS' title='What Student Says'/>
      <Testimonial />
      <Title subtitle='Contact Us' title='Get in Touch'/>
      <Contact />
      <Footer />
      </div>
    </div>
  )
}

export default App