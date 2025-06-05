import { MatrixRain } from "./components/matrixRain/MatrixRain";
import { Navbar } from "./components/navbar/Navbar";
import { Hero } from "./components/hero/Hero";
import { Projects } from "./components/projects/Projects";
import { AboutMe } from "./components/aboutMe/AboutMe";
import { Technologies } from "./components/technologies/Technologies";
import { Education } from "./components/education/Education";
import { Contact } from "./components/contact/Contact";

function App() {
  return (
    <>
      <MatrixRain />
      <Navbar />
      <Hero />
      <Projects />
      <AboutMe />
      <Technologies />
      <Education />
      <Contact />
    </>
  );
}

export default App;
