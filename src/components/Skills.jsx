import React from 'react';
import { motion } from 'framer-motion';

const skills = ['PCI DSS','SOC 2','NIST','Splunk','Azure Sentinel','AWS','Linux','PowerShell','Vulnerability Mgmt'];

export default function Skills(){
  return (
    <section id="skills" className="py-16">
      <motion.h2 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} className="text-3xl font-semibold">Skills</motion.h2>
      <p className="text-slate-400 mt-2 max-w-2xl">Core competencies and tools I work with.</p>
      
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{once:true}} 
        className="mt-6 flex flex-wrap gap-3"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } }
        }}
      >
        {skills.map(s => (
          <motion.div 
            key={s} 
            className="px-4 py-2 rounded-md bg-[#071018] border border-slate-800 text-slate-200 text-sm md:text-base cursor-default"
            whileHover={{ scale: 1.05, boxShadow: '0 0 10px #00ffff' }}
            transition={{ type: 'spring', stiffness: 300 }}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            {s}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
