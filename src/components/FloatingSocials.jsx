import React from 'react';
import { FaLinkedin, FaGithub, FaYoutube, FaTwitter } from 'react-icons/fa';

const socials = [
  { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/rujul-chaudhari/' },
  { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/RujulChaudhari' },
  { name: 'YouTube', icon: <FaYoutube />, url: 'https://www.youtube.com/@TechTal3s' },
  { name: 'X', icon: <FaTwitter />, url: 'https://x.com/TechTal3s' },
];

export default function FloatingSocials() {
  return (
    <div className="fixed top-8 right-8 flex flex-row gap-6 z-50">
      {socials.map((s) => (
        <a
          key={s.name}
          href={s.url}
          target="_blank"
          rel="noreferrer"
          className="text-slate-200 hover:text-cyan-400 transition transform hover:scale-110"
          title={s.name}
        >
          <span className="text-2xl">{s.icon}</span>
        </a>
      ))}
    </div>
  );
}
