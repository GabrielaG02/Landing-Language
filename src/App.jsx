import Navbar from "./components/Plantillas/Navbar"
import Hero from "./components/Plantillas/Hero"
import WhyChoose  from "./components/Plantillas/WhyChoose.jsx"
import GetToKnow from "./components/Plantillas/GetToKnow.jsx"
import Impacts from "./components/Plantillas/Impacts.jsx"
import WhatOurClientsSay from "./components/Plantillas/WhatOurClientsSay.jsx"
import OurServices from "./components/Plantillas/OurServices.jsx"
import Courses from "./components/Plantillas/Courses.jsx"
import Types from "./components/Plantillas/Types.jsx"
import TypesCap from "./components/Plantillas/TypesCap.jsx"
import Contact from "./components/Plantillas/Contact.jsx"
import Footer from "./components/Plantillas/Footer.jsx"
import Calendar from "./components/Plantillas/Calendar.jsx"
import Banner from "./components/Atoms/Banner.jsx"



function App() {

  return (
    <>
    
    <Navbar/>
    <Hero/>
    <WhyChoose/>
    <GetToKnow/>
    <OurServices/>

    <WhatOurClientsSay/>

    <Contact/>
    <Footer/>
    <Banner />
   </>
  )
}

export default App
