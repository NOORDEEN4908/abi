import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Design & Visual',
    color: 'from-purple-600 to-violet-500',
    border: 'border-purple-500/20',
    dot: 'bg-purple-400',
    skills: [
      { name: 'Graphic Design (Print & Digital)', level: 95 },
      { name: 'UI / UX (Website Image Design)', level: 85 },
      { name: 'Branding & Rebranding', level: 90 },
      { name: 'Social Media Design', level: 92 },
    ],
  },
  {
    title: 'Photography & Media',
    color: 'from-cyan-500 to-teal-400',
    border: 'border-cyan-500/20',
    dot: 'bg-cyan-400',
    skills: [
      { name: 'Photography', level: 88 },
      { name: 'Photo Editing & Retouching', level: 90 },
      { name: 'Content Planning', level: 82 },
      { name: 'Online Promotion', level: 80 },
    ],
  },
  
]

const tools = [
  'Adobe Photoshop', 'Adobe Illustrator', 'Canva', 'Adobe Lightroom',
  'MS Office', 'Tally', 'Figma', 'CorelDRAW',
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 bg-[#080810]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-px bg-purple-500" />
          <span className="text-purple-400 text-xs font-semibold tracking-[0.2em] uppercase">What I Do</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="display-font text-4xl md:text-5xl font-extrabold mb-16 leading-tight"
        >
          Skills & <span className="gradient-text">Expertise</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: ci * 0.12 }}
              className={`card-glass rounded-2xl p-6 border ${cat.border}`}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className={`w-2 h-2 rounded-full ${cat.dot}`} />
                <h3 className="text-white/80 text-sm font-semibold uppercase tracking-widest">{cat.title}</h3>
              </div>
              <div className="flex flex-col gap-4">
                {cat.skills.map((sk, si) => (
                  <div key={sk.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-white/60 text-sm">{sk.name}</span>
                      <span className="text-white/30 text-xs">{sk.level}%</span>
                    </div>
                    <div className="h-1 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${sk.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: ci * 0.1 + si * 0.08, ease: 'easeOut' }}
                        className={`h-full rounded-full bg-gradient-to-r ${cat.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-5 text-center">Tools & Software</div>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="px-4 py-2 rounded-full text-sm text-white/60 border border-white/10 bg-white/3 hover:border-purple-500/40 hover:text-purple-300 transition-all duration-200"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
