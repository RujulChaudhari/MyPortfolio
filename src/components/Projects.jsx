import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { title: 'Azure Sentinel Attack Map', description: 'Deployed Azure Sentinel in a virtual lab and built KQL dashboards.', url: 'https://github.com/RujulChaudhari' },
  { title: 'Nessus Vulnerability Lab', description: 'Conducted internal vulnerability scans and remediation testing.', url: 'https://github.com/RujulChaudhari' },
  { title: 'Wazuh SIEM Lab', description: 'Configured Wazuh on Linux with custom rules and alerts.', url: 'https://github.com/RujulChaudhari' },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold"
      >
        Projects
      </motion.h2>
      <p className="text-slate-400 mt-2 max-w-2xl">Selected labs and hands-on projects from my security work.</p>

      <motion.div
        className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } }
        }}
      >
        {projects.map((p) => (
          <motion.article
            key={p.title}
            className="section-card"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03, boxShadow: '0 0 15px #00ffff' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-white">{p.title}</h3>
            <p className="mt-2 text-slate-300 text-sm">{p.description}</p>
            <a
              className="mt-3 inline-block text-cyan-400 text-sm"
              href={p.url}
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub
            </a>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
