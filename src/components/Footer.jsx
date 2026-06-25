import React from 'react'

export default function Footer(){
  return (
    <footer className="border-t border-white/10 py-10 text-center text-sm text-slate-500">
      <p>© {new Date().getFullYear()} Rujul Chaudhari. Built with React and Tailwind.</p>
    </footer>
  )
}
