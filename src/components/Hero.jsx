// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';

const resumeUrl = `${import.meta.env.BASE_URL}Rujul_Chaudhari_Resume.pdf`;
const profileUrl = `${import.meta.env.BASE_URL}Me.jpg`;

export default function Hero() {
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
      color: { value: ['#22d3ee', '#34d399', '#fbbf24'] },
      links: { color: '#22d3ee', distance: 145, enable: true, opacity: 0.16, width: 1 },
      move: { enable: true, speed: 0.45 },
      number: { value: 34 },
      opacity: { value: 0.28 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  return (
    <section className="relative min-h-[78vh] flex flex-col items-center justify-center text-center overflow-hidden pt-20 pb-8 sm:min-h-[86vh] sm:pt-24 sm:pb-12">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 z-0"
      />

      <motion.div
        className="relative z-10 flex max-w-4xl flex-col items-center px-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="mb-6 h-32 w-32 overflow-hidden rounded-full border border-cyan-300/70 shadow-[0_0_36px_rgba(34,211,238,0.22)] sm:mb-7 sm:h-44 sm:w-44"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <img
            src={profileUrl}
            alt="Rujul Chaudhari"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.h1
          className="text-3xl font-bold tracking-normal text-white sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Rujul Chaudhari
        </motion.h1>

        <motion.h2
          className="mt-4 text-lg font-medium text-cyan-200 sm:text-xl md:text-2xl"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Cybersecurity Analyst focused on detection engineering, compliance, and cloud security
        </motion.h2>

        <motion.p
          className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:mt-6 sm:leading-8 md:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          I secure payment processing and financial services environments with Splunk,
          Azure Sentinel, threat hunting, incident response, PCI DSS, SOC 2, and practical
          automation that reduces noise and improves response.
        </motion.p>

        <motion.div
          className="mt-6 flex w-full flex-col items-center justify-center gap-3 sm:mt-8 sm:w-auto sm:flex-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <a className="btn-primary w-full sm:w-auto" href="#projects">
            <FaGithub aria-hidden="true" />
            View projects
          </a>
          <a className="btn-secondary w-full sm:w-auto" href={resumeUrl} download>
            <FaDownload aria-hidden="true" />
            Download resume
          </a>
          <a
            className="btn-ghost mobile-hidden-link w-full sm:w-auto"
            href="https://www.linkedin.com/in/rujul-chaudhari/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin aria-hidden="true" />
            LinkedIn
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
