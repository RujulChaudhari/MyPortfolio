// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function Hero() {
  // Configure particles
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesOptions = {
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'repulse' },
        resize: true,
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    particles: {
      color: { value: '#00ffff' },
      links: { color: '#00ffff', distance: 150, enable: true, opacity: 0.3, width: 1 },
      move: { enable: true, speed: 1 },
      number: { value: 60 },
      opacity: { value: 0.5 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 z-0"
      />

      {/* Hero Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Profile Picture */}
        <motion.div
          className="w-64 h-64 rounded-full overflow-hidden mb-6 border-4 border-cyan-400"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="/Me.jpg"
            alt="Rujul Chaudhari"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Rujul Chaudhari
        </motion.h1>

        {/* Title */}
        <motion.h2
          className="text-xl md:text-2xl text-cyan-400 mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Cybersecurity Analyst | Cloud & Compliance Specialist
        </motion.h2>

        {/* Bio */}
        <motion.p
          className="text-gray-300 text-base md:text-lg mb-8 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Cybersecurity Analyst with 4+ years protecting enterprise systems, specializing in PCI DSS, SOC 2, and cloud security. Passionate about automation, threat intelligence, and building resilient, audit-ready systems.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="#projects"
          className="inline-block px-8 py-3 border border-cyan-400 text-cyan-400 font-medium rounded-md hover:bg-cyan-400 hover:text-gray-900 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Projects
        </motion.a>
      </motion.div>
    </section>
  );
}
