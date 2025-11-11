// src/App.jsx
import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import FloatingSocials from './components/FloatingSocials';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-tech font-inter text-light relative">
      {/* Floating social icons */}
      <FloatingSocials />

      <div className="max-w-6xl mx-auto px-6">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Footer />
      </div>
    </div>
  );
}
