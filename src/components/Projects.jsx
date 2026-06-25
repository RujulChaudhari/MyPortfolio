import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Azure Sentinel Attack Map',
    focus: 'Detection engineering',
    description: 'Wrote 15+ custom KQL detection rules, integrated threat intelligence feeds, and built dashboards mapping attack patterns across global threat actors.',
    stack: ['Azure Sentinel', 'KQL', 'Threat Intelligence', 'Dashboards'],
    url: 'https://github.com/RujulChaudhari/Azure-Sentinel_AttackMap'
  },
  {
    title: 'Nessus Vulnerability Management Lab',
    focus: 'Vulnerability prioritization',
    description: 'Assessed Windows Server instances, identified 30+ vulnerabilities across severity levels, prioritized by CVSS score, and validated patch effectiveness.',
    stack: ['Nessus', 'Windows Server', 'CVSS', 'Remediation'],
    url: 'https://github.com/RujulChaudhari/Vulnerability-Management-Home-Lab'
  },
  {
    title: 'Wazuh SIEM Lab',
    focus: 'SIEM operations',
    description: 'Configured Wazuh on Linux with custom rules and alerts to practice endpoint telemetry, alerting logic, and analyst workflows.',
    stack: ['Wazuh', 'Linux', 'Custom Rules', 'Alerting'],
    url: 'https://github.com/RujulChaudhari/Wazuh-SEIM'
  },
  {
    title: 'n8n Vulnerability Reporter',
    focus: 'Security automation',
    description: 'Built a Docker-based n8n workflow for vulnerability reporting and repeatable scanning support.',
    stack: ['n8n', 'Docker', 'Automation', 'Reporting'],
    url: 'https://github.com/RujulChaudhari/n8n-network-vulnerability-reporter'
  },
  {
    title: 'Active Directory Home Lab',
    focus: 'Identity and access',
    description: 'Configured an Active Directory virtual environment in VirtualBox to practice domain administration, access control, and Windows security fundamentals.',
    stack: ['Active Directory', 'VirtualBox', 'Windows', 'IAM'],
    url: 'https://github.com/RujulChaudhari/ActiveDirectoryLab'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-kicker">Selected work</p>
        <h2 className="section-title">Projects</h2>
        <p className="section-copy">Hands-on labs presented as evidence of security judgment, tool fluency, and the ability to explain technical work clearly.</p>
      </motion.div>

      <motion.div
        className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2"
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
            className="section-card flex min-h-[260px] flex-col"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">{p.focus}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{p.title}</h3>
              </div>
              <FaGithub className="mt-1 shrink-0 text-xl text-slate-500" aria-hidden="true" />
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-300">{p.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.stack.map(item => (
                <span key={item} className="skill-pill">{item}</span>
              ))}
            </div>
            <a
              className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-cyan-200 transition hover:text-white"
              href={p.url}
              target="_blank"
              rel="noreferrer"
            >
              View repository
              <FaExternalLinkAlt className="text-xs" aria-hidden="true" />
            </a>
          </motion.article>
        ))}
      </motion.div>
      <a
        href="https://github.com/RujulChaudhari?tab=repositories"
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-white"
        target="_blank"
        rel="noreferrer"
      >
        View full GitHub project list
        <FaExternalLinkAlt className="text-xs" aria-hidden="true" />
      </a>
    </section>
  );
}
