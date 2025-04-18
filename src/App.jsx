import Navbar from "./components/Plantillas/Navbar"
import Hero from "./components/Plantillas/Hero"
import Objectives  from "./components/Plantillas/Objectives.jsx"
import Benefits from "./components/Plantillas/Benefits.jsx"
import Impacts from "./components/Plantillas/Impacts.jsx"
import Modalities from "./components/Plantillas/Modalities.jsx"
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
    <Objectives/>
    <Benefits/>
    <Impacts/>
    <Modalities/>
    <Courses/>
    <TypesCap/>
    <Types/>

    <Calendar/>
    <Contact/>
    <Footer/>
    <Banner />
   </>
  )
}

export default App
