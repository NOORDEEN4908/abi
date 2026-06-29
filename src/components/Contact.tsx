import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Facebook } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-[#080810] relative overflow-hidden">
      {/* BG glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-700/10 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-px bg-purple-500" />
          <span className="text-purple-400 text-xs font-semibold tracking-[0.2em] uppercase">Get in Touch</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="display-font text-4xl md:text-5xl font-extrabold mb-16 leading-tight"
        >
          Let&apos;s <span className="gradient-text">Work Together</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <p className="text-white/60 text-lg leading-relaxed">
              Looking for a creative designer who delivers results? I'm available for freelance projects, full-time roles, and collaborations. Based in <span className="text-white/80">Dubai, UAE</span>.
            </p>

            <div className="flex flex-col gap-4">
              {[
                { icon: Mail, label: 'Email', value: 'abhishekjsjs2015@gmail.com', href: 'mailto:abhishekjsjs2015@gmail.com' },
                { icon: Phone, label: 'Phone / WhatsApp', value: '+971 54 473 3325', href: 'tel:+971544733325' },
                { icon: Phone, label: 'Phone 2', value: '+971 50 528 9700', href: 'tel:+971505289700' },
                { icon: MapPin, label: 'Location', value: 'Dubai, United Arab Emirates', href: '#' },
              ].map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/20 transition-colors duration-200">
                    <Icon size={16} className="text-purple-400" />
                  </div>
                  <div>
                    <div className="text-white/30 text-xs">{label}</div>
                    <div className="text-white/80 text-sm font-medium group-hover:text-purple-300 transition-colors duration-200">{value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social */}
            <div>
              <div className="text-white/30 text-xs uppercase tracking-widest mb-4">Connect</div>
              <div className="flex gap-3">
                {[
                  { icon: Instagram, href: '#', label: 'Instagram' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { icon: Facebook, href: '#', label: 'Facebook' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 rounded-xl card-glass border border-white/10 flex items-center justify-center text-white/40 hover:text-purple-300 hover:border-purple-500/30 transition-all duration-200"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="card-glass rounded-2xl p-7 border border-white/5 flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-white/40 text-xs uppercase tracking-widest block mb-2">Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-white/80 text-sm placeholder:text-white/20 focus:outline-none focus:border-purple-500/50 transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="text-white/40 text-xs uppercase tracking-widest block mb-2">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-white/80 text-sm placeholder:text-white/20 focus:outline-none focus:border-purple-500/50 transition-colors duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="text-white/40 text-xs uppercase tracking-widest block mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="Project inquiry, collaboration..."
                  className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-white/80 text-sm placeholder:text-white/20 focus:outline-none focus:border-purple-500/50 transition-colors duration-200"
                />
              </div>

              <div>
                <label className="text-white/40 text-xs uppercase tracking-widest block mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-white/80 text-sm placeholder:text-white/20 focus:outline-none focus:border-purple-500/50 transition-colors duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-violet-500 hover:from-purple-500 hover:to-violet-400 transition-all duration-300 text-sm mt-1"
              >
                {sent ? (
                  <>Message sent! ✓</>
                ) : (
                  <><Send size={15} /> Send Message</>
                )}
              </button>

              <p className="text-white/25 text-xs text-center">
                Typically replies within 24 hours
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
