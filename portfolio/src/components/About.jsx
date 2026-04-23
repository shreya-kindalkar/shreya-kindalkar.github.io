import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiCode, FiLayers, FiZap } from 'react-icons/fi'

const highlights = [
  { icon: FiCode, label: 'Clean Code', desc: 'Writing readable, maintainable code is a priority' },
  { icon: FiLayers, label: 'UI/UX Focus', desc: 'Passionate about intuitive, beautiful interfaces' },
  { icon: FiZap, label: 'Performance', desc: 'Optimizing for speed and real-world usability' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-2">Get to know me</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <p className="text-gray-300 leading-relaxed">
              I'm a full stack developer with a deep passion for crafting interfaces that feel
              natural and look great. I care about the details — from smooth animations to accessible layouts.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I love building intuitive, real-world products that solve actual problems. Whether it's a travel
              platform or a recipe manager, I focus on making the experience feel effortless for the user.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Currently pursuing my B.Tech in Computer Science (AI & ML), I'm always exploring the intersection
              of intelligent systems and great UI.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {['React', 'FastAPI', 'Django', 'PostgreSQL', 'Python'].map((tag) => (
                <span key={tag} className="px-3 py-1 glass text-violet-300 text-xs rounded-full font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid gap-4"
          >
            {highlights.map(({ icon: Icon, label, desc }, i) => (
              <motion.div
                key={label}
                className="glass rounded-xl p-5 flex items-start gap-4 hover:border-violet-500/30 transition-all duration-300 group"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
              >
                <div className="p-2 rounded-lg bg-violet-600/20 text-violet-400 group-hover:bg-violet-600/30 transition-colors">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm mb-1">{label}</p>
                  <p className="text-gray-400 text-sm">{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
