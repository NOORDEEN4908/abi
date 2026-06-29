import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
 import { categories, projects } from "../assets/data/data.js";
import close from '../assets/close.png'


export default function Portfolio() {
  const [active, setActive] = useState('All')
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredProjects =
  active === "All"
    ? projects
    : projects.filter((p) => p.category === active);

const displayedProjects = showAll
  ? filteredProjects
  : filteredProjects.slice(0, 9);

  return (
    <section id="portfolio" className="py-24 md:py-32 px-6 bg-[#0a0812]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-px bg-purple-500" />
          <span className="text-purple-400 text-xs font-semibold tracking-[0.2em] uppercase">Selected Works</span>
        </motion.div>

        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="display-font text-4xl md:text-5xl font-extrabold leading-tight"
          >
            My <span className="gradient-text">Portfolio</span>
          </motion.h2>
        </div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === cat
                  ? 'bg-gradient-to-r from-purple-600 to-violet-500 text-white'
                  : 'text-white/50 border border-white/10 hover:border-purple-500/40 hover:text-white/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {displayedProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group relative card-glass rounded-2xl overflow-hidden border border-white/5 hover:border-purple-500/30 transition-all duration-300 cursor-pointer"
              >
                {/* Image area */}
                <div
  className="relative h-48 overflow-hidden cursor-pointer"
  onClick={() => setSelectedImage(project)}
>
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
  />

  {/* Hover overlay */}
  <div className="absolute inset-0 bg-purple-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
    <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
      <ExternalLink size={16} className="text-white" />
    </div>
  </div>
</div>


                {/* Content */}
                <div className="p-5">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/15">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-white/90 font-semibold text-base leading-snug mb-1">{project.title}</h3>
                  <p className="text-white/40 text-sm">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          {filteredProjects.length > 8 && (
  <div className="flex justify-center mt-10">
    <button
      onClick={() => setShowAll(!showAll)}
      className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-violet-500 text-white font-semibold hover:scale-105 transition duration-300"
    >
      {showAll ? "View Less" : "View More"}
    </button>
  </div>
)}
        </AnimatePresence>
        
      </div>
      
      <AnimatePresence>
  {selectedImage && (
    <motion.div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedImage(null)}
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-3xl w-full"
      >
        {/* Close Button */}
       <button
  onClick={() => setSelectedImage(null)}
  className="absolute top-1 right-0 z-50 w-12 h-12 rounded-full bg-white backdrop-blur-md border border-white flex items-center justify-center hover:bg-purple-600 transition-all duration-300 hover:scale-110"
>
  <img
    src={close}
    alt="Close"
    className="w-5 h-5 object-contain"
  />
</button>

        {/* Image */}
        <img
          src={selectedImage.image}
          alt={selectedImage.title}
          className="w-full max-h-[70vh] object-contain rounded-xl"
        />

        {/* Title */}
        <div className="mt-4 text-center">
          <h3 className="text-2xl font-bold text-white">
            {selectedImage.title}
          </h3>

          <p className="text-white/70 mt-2">
            {selectedImage.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </section>
  )
}
