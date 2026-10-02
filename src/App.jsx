import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import Loader from "./components/Loader";
import ScrollProgress from "./components/ScrollProgress";
import FeaturedProject from "./components/FeaturedProject";
import SectionDivider from "./components/SectionDivider";


function App() {

  return (

    <>

     <ScrollProgress />

      <Loader />

      <Cursor />

      <Navbar />

      <Hero />
      <SectionDivider />

      <About />
      <SectionDivider />

      <Skills />
      <SectionDivider />

      <FeaturedProject />
      <SectionDivider />

      <Projects />
      <SectionDivider />

      <Contact />

      <Footer />

    </>
    

  );

}


export default App;