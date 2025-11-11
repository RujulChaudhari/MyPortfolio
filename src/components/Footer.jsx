import React from 'react'

export default function Footer(){
  return (
    <footer className="py-12 text-center text-sm text-slate-400">
      © {new Date().getFullYear()} Rujul Chaudhari — Built with React + Tailwind
    </footer>
  )
}
