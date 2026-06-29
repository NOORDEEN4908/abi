import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'
import profile from '../assets/WhatsApp Image 2026-06-08 at 20.09.10 (2).jpeg'


// Animated particle canvas background
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    const particles: Array<{
      x: number; y: number; vx: number; vy: number;
      size: number; opacity: number; color: string
    }> = []

    const colors = ['#9b59f5', '#6ee7f7', '#c084fc', '#e879f9']

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Init particles
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.6 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(155, 89, 245, ${0.08 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.opacity
        ctx.fill()
        ctx.globalAlpha = 1
      })

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#080810]">
      {/* Animated canvas bg */}
      <ParticleCanvas />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-700/20 blur-[120px] pulse-glow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyan-500/15 blur-[100px] pulse-glow pointer-events-none" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-900/10 blur-[140px] pointer-events-none" />

      {/* Rotating ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full border border-purple-500/10 rotate-slow" />
        <div className="absolute inset-8 rounded-full border border-cyan-400/5 rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-medium tracking-widest uppercase mb-8"
        >
          <Sparkles size={12} />
          Available for freelance work
        </motion.div>

        {/* Profile image placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mx-auto mb-8 w-32 h-32 md:w-40 md:h-40"
        >
          <div className="w-full h-full rounded-full overflow-hidden border-2 border-purple-500/50 glow-purple float-anim">
            {/* Replace src with your actual photo */}
            <img
              src={profile}
              alt="Abhishek JS"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
                const parent = target.parentElement!
                parent.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#3b1f6e,#1a0e3a);font-family:Syne,sans-serif;font-size:3rem;font-weight:800;color:#c084fc"><img src="/abhishek-portfolio/profile.png" alt="" srcset="" /></div>`
              }}
            />
          </div>
          {/* Status dot */}
          <div className="absolute bottom-2 right-2 w-4 h-4 bg-emerald-400 rounded-full border-2 border-[#080810]" />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="display-font text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight leading-none mb-4"
        >
          <span className="text-white">Abhishek</span>{' '}
          <span className="gradient-text">JS</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-white/50 text-base md:text-lg font-medium tracking-[0.2em] uppercase mb-6"
        >
          Graphic Designer &nbsp;·&nbsp; Photographer
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Crafting unforgettable brand identities and visual experiences — 5+ years turning creative ideas into compelling designs.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#portfolio"
            className="px-8 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-purple-600 to-violet-500 hover:from-purple-500 hover:to-violet-400 transition-all duration-300 glow-purple"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full font-semibold text-white/80 border border-white/15 hover:border-purple-500/50 hover:text-white hover:bg-white/5 transition-all duration-300"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex justify-center gap-10 md:gap-16 mt-16"
        >
          {[
            { num: '5+', label: 'Years Experience' },
            { num: '200+', label: 'Projects Done' },
            { num: '50+', label: 'Happy Clients' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="display-font text-2xl md:text-3xl font-extrabold gradient-text">{s.num}</div>
              <div className="text-white/40 text-xs md:text-sm mt-1 tracking-wide">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}
