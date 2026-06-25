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
    <div className="fixed right-4 top-4 z-50 flex flex-row gap-3 rounded-lg border border-white/10 bg-[#070b12]/80 px-3 py-2 shadow-lg shadow-black/20 backdrop-blur sm:right-8 sm:top-8 sm:gap-4">
      {socials.map((s) => (
        <a
          key={s.name}
          href={s.url}
          target="_blank"
          rel="noreferrer"
          className="text-slate-300 transition hover:text-cyan-200"
          title={s.name}
          aria-label={s.name}
        >
          <span className="text-xl">{s.icon}</span>
        </a>
      ))}
    </div>
  );
}
