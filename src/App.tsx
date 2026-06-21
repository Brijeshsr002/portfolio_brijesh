import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import InteractiveCursor from './components/InteractiveCursor';

function App() {
  return (
    <div className="relative min-h-screen bg-[#0B1120] text-white selection:bg-accent/30 selection:text-white">
      {/* Premium Custom Mouse Cursor Trail */}
      <InteractiveCursor />

      {/* Floating Header */}
      <Navbar />

      {/* Layout content blocks */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Timeline />
        <Projects />
        <Achievements />
        <Certifications />
        <Contact />
      </main>

      {/* Footer & Back to top button */}
      <Footer />
    </div>
  );
}

export default App;
