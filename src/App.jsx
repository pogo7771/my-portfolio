import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';

import Education from './components/Education';
import Certifications from './components/Certifications';
import Background from './components/Background';

function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-emerald-500 selection:text-white cursor-none relative overscroll-none">
      <Background />
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Certifications />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
