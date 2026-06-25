import React from 'react';
import { motion } from 'framer-motion';

const roles = [
  {
    company: 'Celero Commerce',
    location: 'Rosemont, IL',
    title: 'Security Analyst',
    date: 'Aug 2022 - Present',
    bullets: [
      'Reduced security incidents 40% by engineering detection rules in Splunk and Azure Sentinel, implementing encryption protocols, and tightening access controls.',
      'Achieved full PCI DSS and SOC 2 compliance by leading audit preparation, systematic gap analysis, and policy remediation across control objectives.',
      'Led high-severity incident response investigations, reducing MTTD and MTTR through cross-functional containment and preventive controls.',
      'Cut enterprise attack surface by enforcing least-privilege access and quarterly access reviews.'
    ]
  },
  {
    company: 'FortifyIT',
    location: 'Oak Brook, IL',
    title: 'Cybersecurity Engineer',
    date: 'Dec 2021 - Aug 2022',
    bullets: [
      'Reduced client security incidents 50% across 15+ organizations by deploying MFA, encryption, and NIST-aligned RBAC.',
      'Decreased MTTR by 30% by authoring incident runbooks, automating alert triage, and conducting proactive threat hunting.',
      'Identified and prioritized critical Windows Server vulnerabilities with Nessus, CVSS scoring, and business impact analysis.'
    ]
  },
  {
    company: 'Unisys',
    location: 'Chicago, IL (Remote)',
    title: 'Security Support Specialist',
    date: 'Apr 2021 - Dec 2021',
    bullets: [
      'Maintained 95% customer satisfaction across 100+ security tickets involving authentication, access control, and endpoint protection issues.',
      'Reduced ticket resolution time 25% by building a structured security knowledge base for Tier I/II incident response triage.'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-kicker">Professional record</p>
        <h2 className="section-title">Experience</h2>
        <p className="section-copy">Focused on measurable security outcomes across payment processing, consulting, and support environments.</p>
      </motion.div>

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
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">{r.title}</h3>
                <div className="mt-1 text-sm text-slate-400">{r.company} | {r.location}</div>
              </div>
              <div className="shrink-0 text-sm font-medium text-cyan-200">{r.date}</div>
            </div>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
              {r.bullets.map((b, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" aria-hidden="true" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
