import React from 'react';
import { motion } from 'framer-motion';

const highlights = [
  {
    value: '40-50%',
    label: 'incident reduction delivered across security operations and client environments',
    tone: 'text-cyan-200'
  },
  {
    value: 'PCI DSS + SOC 2',
    label: 'audit readiness, gap analysis, and policy remediation ownership',
    tone: 'text-emerald-200'
  },
  {
    value: '30%',
    label: 'MTTR improvement through runbooks, alert triage, and response coordination',
    tone: 'text-amber-200'
  },
  {
    value: '15+',
    label: 'organizations supported with MFA, encryption, RBAC, and vulnerability work',
    tone: 'text-sky-200'
  }
];

export default function Highlights() {
  return (
    <section aria-label="Security impact highlights" className="pb-6 pt-4 sm:pb-10">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((item, index) => (
          <motion.div
            key={item.value}
            className="section-card min-h-[152px]"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
          >
            <div className={`text-2xl font-semibold ${item.tone}`}>{item.value}</div>
            <p className="mt-3 text-sm leading-6 text-slate-300">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
