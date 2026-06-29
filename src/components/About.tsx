import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, User } from 'lucide-react'
import profile from '../assets/WhatsApp Image 2026-06-08 at 20.09.10 (2).jpeg'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }
  }),
}

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-[#080810]">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-px bg-purple-500" />
          <span className="text-purple-400 text-xs font-semibold tracking-[0.2em] uppercase">About Me</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left: image block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/5] max-w-sm mx-auto md:mx-0">
              {/* Decorative border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-600/30 to-cyan-500/20 blur-xl" />
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10">
                <img
                  src={profile}
                  alt="Abhishek JS — Graphic Designer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const t = e.target as HTMLImageElement
                    t.style.display = 'none'
                    const p = t.parentElement!
                    p.style.background = 'linear-gradient(135deg, #1a0e3a 0%, #0e1a2a 100%)'
                    p.innerHTML += `<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px"><div style="width:80px;height:80px;border-radius:50%;background:rgba(155,89,245,0.2);border:2px dashed rgba(155,89,245,0.4);display:flex;align-items:center;justify-content:center"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(155,89,245,0.7)" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div><p style="color:rgba(155,89,245,0.6);font-size:0.75rem;font-family:Space Grotesk,sans-serif;text-align:center;padding:0 20px">Add your photo as<br/><code style="color:rgba(110,231,247,0.7)">public/profile.jpg</code></p></div>`
                  }}
                />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-4 md:-right-8 card-glass rounded-2xl px-4 py-3 border border-purple-500/20"
              >
                <div className="text-xs text-white/40 mb-0.5">Experience</div>
                <div className="display-font text-xl font-bold gradient-text">5+ Years</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1 }}
                className="absolute -top-4 -left-4 md:-left-8 card-glass rounded-2xl px-4 py-3 border border-cyan-500/20"
              >
                <div className="text-xs text-white/40 mb-0.5">Based in</div>
                <div className="text-sm font-semibold text-cyan-300">Dubai, UAE</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: text */}
          <div className="flex flex-col gap-6">
            <motion.h2
              custom={0}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="display-font text-4xl md:text-5xl font-extrabold leading-tight"
            >
              Creative mind,{' '}
              <span className="gradient-text">pixel-perfect</span>{' '}
              execution.
            </motion.h2>

            <motion.p
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-white/60 leading-relaxed text-base md:text-lg"
            >
              I'm a Creative Graphic Designer and Digital Marketing Professional with over <strong className="text-white/80">5 years</strong> of experience in print and digital media. I specialise in branding, social media creatives, photography, and SEO-driven campaigns.
            </motion.p>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-white/60 leading-relaxed text-base md:text-lg"
            >
              Certified in SEO & Digital Marketing from <span className="text-purple-300 font-medium">Keltron</span>, a Kerala Government institution. I've worked across industries — from retail supermarkets to international logistics — delivering designs that truly stand out.
            </motion.p>

            {/* Contact details */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2"
            >
              {[
                { icon: MapPin, text: 'Dubai, UAE', color: 'text-purple-400' },
                { icon: Phone, text: '+971 54 473 3325', color: 'text-cyan-400' },
                { icon: Mail, text: 'abhishekjsjs2015@gmail.com', color: 'text-purple-400' },
                { icon: User, text: 'Indian National', color: 'text-cyan-400' },
              ].map(({ icon: Icon, text, color }) => (
                <div key={text} className="flex items-center gap-3 text-sm text-white/60">
                  <Icon size={14} className={color} />
                  <span>{text}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-purple-600 to-violet-500 hover:from-purple-500 hover:to-violet-400 transition-all duration-300 text-sm mt-2"
              >
                Let's Work Together
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
