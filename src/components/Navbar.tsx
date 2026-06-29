import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-[#080810]/80 backdrop-blur-md border-b border-white/5' : 'py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="display-font text-lg font-800 tracking-tight">
          <span className="gradient-text">A</span>
          <span className="text-white/90">JS</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-200 tracking-wide"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="px-5 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-600 to-cyan-400 text-white hover:opacity-90 transition-opacity"
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/70 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#080810]/95 backdrop-blur-md border-t border-white/5 px-6 pb-6 pt-4"
        >
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-white/70 hover:text-white text-base font-medium"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  )
}
