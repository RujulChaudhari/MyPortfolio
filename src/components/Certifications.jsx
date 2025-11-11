import React from 'react';
import { motion } from 'framer-motion';

const certs = [
  'Splunk Certification – Ongoing',
  'CompTIA Security+ - Sept 2025',
  'SOC Fundamentals – April 2025',
  'Essentials in Cybersecurity – LinkedIn – Sep 2024',
  'Essentials in System Administration – LinkedIn – Sep 2024',
  'Palo Alto Networks Cybersecurity Certificate – Coursera – Mar 2024',
  'SOC1 Certificate – TryHackMe – Jun 2024',
  'DevSec Ops Certificate – TryHackMe – Jun 2024',
  'Google Cybersecurity Professional Certificate – Coursera – Oct 2023',
  'Quantum Security Certificate – Cyber Now – Jan 2025'
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-16">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold"
      >
        Certifications
      </motion.h2>

      <motion.div
        className="mt-6 flex flex-wrap gap-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } }
        }}
      >
        {certs.map((c) => (
          <motion.div
            key={c}
            className="px-4 py-2 rounded-md bg-[#071018] border border-slate-800 text-slate-200 cursor-pointer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 10px #00ffff' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {c}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
