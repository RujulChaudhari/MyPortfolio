import React from 'react';
import { motion } from 'framer-motion';

const skillGroups = [
  {
    title: 'Security Frameworks',
    skills: ['PCI DSS', 'SOC 2', 'NIST CSF', 'CIS Controls', 'Risk Assessment']
  },
  {
    title: 'Security Operations',
    skills: ['Incident Response', 'Threat Detection', 'Threat Hunting', 'Detection Engineering', 'MTTD / MTTR']
  },
  {
    title: 'SIEM & Tools',
    skills: ['Splunk', 'Azure Sentinel', 'Wazuh', 'KQL', 'Nessus', 'Microsoft Defender', 'Sophos']
  },
  {
    title: 'Cloud & Infrastructure',
    skills: ['Microsoft Azure', 'AWS', 'Azure Entra ID', 'Active Directory', 'VPN', 'MFA']
  },
  {
    title: 'Scripting & Automation',
    skills: ['PowerShell', 'Python', 'SQL', 'Incident Runbook Development']
  }
];

export default function Skills(){
  return (
    <section id="skills" className="py-16">
      <motion.div initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5}}>
        <p className="section-kicker">Technical focus</p>
        <h2 className="section-title">Skills</h2>
        <p className="section-copy">A recruiter-friendly view of the frameworks, tools, and operational practices I use in security work.</p>
      </motion.div>
      
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{once:true}} 
        className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } }
        }}
      >
        {skillGroups.map(group => (
          <motion.article 
            key={group.title} 
            className="section-card"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <h3 className="text-lg font-semibold text-white">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map(skill => (
                <span key={skill} className="skill-pill">{skill}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
