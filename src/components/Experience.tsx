import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Award } from 'lucide-react'

const experience = [
  {
    company: 'YNNEN GROUPS',
    role: 'Graphic Designer',
    location: 'Kowdiar, Trivandrum',
    period: '2021 – 2026',
    type: 'work',
    points: [
      'Designed digital and print creatives for major brands',
      'Created social media posts, ads, banners, and promotional posters',
      'Led branding and rebranding initiatives for clients',
      'Coordinated closely with marketing teams for campaign execution',
    ],
  },
  {
    company: 'WINZ Solutions',
    role: 'Graphic Designer',
    location: 'Kerala',
    period: '2019 – 2021',
    type: 'work',
    points: [
      'Designed digital and print creatives for branding and promotions',
      'Created social media posts, posters, banners, and marketing materials',
      'Assisted in visual branding and campaign execution',
      'Worked closely with clients and internal creative teams',
    ],
  },
  {
    company: 'Freelance',
    role: 'Photographer · Photo Editor · Social Media Handler',
    location: 'Remote / Dubai',
    period: 'Present',
    type: 'freelance',
    points: [
      'Professional photography services for events and brands',
      'Editing and retouching images for marketing use',
      'Managing business and personal social media accounts',
      'International clients across UAE, Qatar, and India',
    ],
  },
]

const education = [
  {
    institution: 'MACAS Panavoor, Kerala University',
    degree: 'Bachelor of Commerce — Computer Application',
    period: '2015 – 2018',
    type: 'edu',
  },
]

const certifications = [
  {
    name: 'Professional Diploma in SEO & Digital Marketing',
    issuer: 'Keltron — Kerala Government Institution',
    year: '2020',
  },
  {
    name: 'Diploma in Computer Applications (DCA)',
    issuer: 'Kerala Rutronix',
    year: '2019',
  },
  {
    name: 'Tally (Accounting Software)',
    issuer: 'SUN IT',
    year: '2013',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 bg-[#0a0812]">
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
          <span className="text-purple-400 text-xs font-semibold tracking-[0.2em] uppercase">Career Journey</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="display-font text-4xl md:text-5xl font-extrabold mb-16 leading-tight"
        >
          Work <span className="gradient-text">Experience</span>
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-10 md:gap-12">
          {/* Experience timeline */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase size={18} className="text-purple-400" />
              <span className="text-white/70 text-sm font-semibold uppercase tracking-widest">Professional</span>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-cyan-500/30 to-transparent" />

              <div className="flex flex-col gap-10 pl-10">
                {experience.map((exp, i) => (
                  <motion.div
                    key={exp.company}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.12 }}
                    className="relative"
                  >
                    {/* Dot */}
                    <div className="absolute -left-[2.65rem] top-1 w-4 h-4 rounded-full bg-[#080810] border-2 border-purple-500 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    </div>

                    <div className="card-glass rounded-2xl p-6 border border-white/5 hover:border-purple-500/20 transition-colors duration-300">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                        <div>
                          <h3 className="display-font text-lg font-bold text-white">{exp.role}</h3>
                          <div className="text-purple-300 font-semibold text-sm">{exp.company}</div>
                          <div className="text-white/40 text-xs mt-0.5">{exp.location}</div>
                        </div>
                        <span className="text-xs px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 whitespace-nowrap font-medium">
                          {exp.period}
                        </span>
                      </div>
                      <ul className="flex flex-col gap-1.5 mt-4">
                        {exp.points.map((pt) => (
                          <li key={pt} className="text-white/55 text-sm flex items-start gap-2 leading-relaxed">
                            <span className="text-purple-400 mt-1.5 flex-shrink-0">▸</span>
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Education + Certifications */}
          <div className="flex flex-col gap-8">
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap size={18} className="text-cyan-400" />
                <span className="text-white/70 text-sm font-semibold uppercase tracking-widest">Education</span>
              </div>

              {education.map((e, i) => (
                <motion.div
                  key={e.institution}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="card-glass rounded-2xl p-5 border border-white/5"
                >
                  <div className="text-cyan-300 font-semibold text-sm mb-1">{e.degree}</div>
                  <div className="text-white/50 text-xs">{e.institution}</div>
                  <div className="text-white/30 text-xs mt-2">{e.period}</div>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award size={18} className="text-yellow-400" />
                <span className="text-white/70 text-sm font-semibold uppercase tracking-widest">Certifications</span>
              </div>

              <div className="flex flex-col gap-3">
                {certifications.map((c, i) => (
                  <motion.div
                    key={c.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="card-glass rounded-xl p-4 border border-white/5 hover:border-yellow-500/20 transition-colors duration-300"
                  >
                    <div className="text-white/80 text-xs font-semibold leading-snug mb-1">{c.name}</div>
                    <div className="text-white/40 text-xs">{c.issuer}</div>
                    <div className="gradient-text-gold text-xs font-bold mt-1.5">{c.year}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
