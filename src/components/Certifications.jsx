import React from 'react';
import { motion } from 'framer-motion';

const certs = [
  { name: 'ISACA CISM', detail: 'In progress, expected 2026' },
  { name: 'CompTIA CySA+', detail: 'November 2025' },
  { name: 'CompTIA Security+', detail: 'September 2025' },
  { name: 'SOC Fundamentals', detail: 'April 2025' }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-kicker">Credentials</p>
        <h2 className="section-title">Certifications</h2>
        <p className="section-copy">Kept intentionally focused on the strongest credentials reflected in the current resume.</p>
      </motion.div>

      <motion.div
        className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
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
            key={c.name}
            className="section-card"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-white">{c.name}</h3>
            <p className="mt-2 text-sm text-slate-400">{c.detail}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
