import React from 'react';
import { motion } from 'framer-motion';

const roles = [
  { company: 'Celero Commerce', title: 'Security Analyst', date: 'Aug 2022 - Present', bullets: ['Managed and monitored security events','Led incident response and compliance'] },
  { company: 'FortifyIT', title: 'Cybersecurity Engineer', date: 'Dec 2021 - Aug 2022', bullets: ['Maintained SIEM integrations','Reduced incidents with MFA and encryption'] },
  { company: 'Unisys', title: 'Security Support Specialist', date: 'Apr 2021 - Dec 2021', bullets: ['Provided remote security support','Documented security incidents'] }
];

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-semibold"
      >
        Experience
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.25 } }
        }}
        className="mt-6 space-y-4"
      >
        {roles.map((r) => (
          <motion.div
            key={r.company}
            className="section-card"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03, boxShadow: '0 0 15px #00ffff' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-white">{r.title}</h3>
                <div className="text-slate-400 text-sm">{r.company}</div>
              </div>
              <div className="text-slate-400 text-sm">{r.date}</div>
            </div>
            <ul className="mt-3 text-slate-300 text-sm list-disc list-inside">
              {r.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
