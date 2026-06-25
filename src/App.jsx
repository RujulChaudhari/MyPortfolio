// src/App.jsx
import React from 'react';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import FloatingSocials from './components/FloatingSocials';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-site font-inter text-light relative">
      <FloatingSocials />

      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <Hero />
        <Highlights />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Footer />
      </div>
    </div>
  );
}
