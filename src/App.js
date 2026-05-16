import Navbar from "./components/Navbar";
import Hero from "./components/hero/Hero";
import Profession from "./components/profession/Profession";
import Stack from "./components/stack/Stack";
import Experience from "./components/experience/Experience";
import Education from "./components/education/Education";
import Contact from "./components/contact/Contact";
import Footer from "./components/utilComponents/Footer";
import Projects from "./components/projects/Projects";
import Certifications from "./components/certifications/Certifications";

function App() {
  return (
    <div className="md:min-h-screen md:py-5 md:px-28 bg-graySide overflow-x-hidden text-textPrimary">
      <div className="md:p-5 md:rounded-xl md:shadow-xl py-2 bg-background">
        <Navbar />
        <Hero />
        <Profession />
        <Stack />
        <Certifications />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
