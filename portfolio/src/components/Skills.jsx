import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FiCode, FiServer, FiDatabase, FiTool, FiCpu,
} from 'react-icons/fi'

const SKILL_GROUPS = [
  {
    category: 'Frontend',
    icon: FiCode,
    color: 'violet',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    category: 'Backend',
    icon: FiServer,
    color: 'blue',
    skills: ['Node.js', 'Django', 'FastAPI'],
  },
  {
    category: 'Languages',
    icon: FiCpu,
    color: 'emerald',
    skills: ['Python', 'SQL'],
  },
  {
    category: 'Databases',
    icon: FiDatabase,
    color: 'pink',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'SQLite'],
  },
  {
    category: 'Tools',
    icon: FiTool,
    color: 'amber',
    skills: ['Git', 'VS Code', 'Figma', 'Canva'],
  },
]

const colorMap = {
  violet: { bg: 'bg-violet-600/20', text: 'text-violet-400', border: 'hover:border-violet-500/40', tag: 'bg-violet-600/15 text-violet-300' },
  blue: { bg: 'bg-blue-600/20', text: 'text-blue-400', border: 'hover:border-blue-500/40', tag: 'bg-blue-600/15 text-blue-300' },
  emerald: { bg: 'bg-emerald-600/20', text: 'text-emerald-400', border: 'hover:border-emerald-500/40', tag: 'bg-emerald-600/15 text-emerald-300' },
  pink: { bg: 'bg-pink-600/20', text: 'text-pink-400', border: 'hover:border-pink-500/40', tag: 'bg-pink-600/15 text-pink-300' },
  amber: { bg: 'bg-amber-600/20', text: 'text-amber-400', border: 'hover:border-amber-500/40', tag: 'bg-amber-600/15 text-amber-300' },
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-2">What I work with</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Skills</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_GROUPS.map(({ category, icon: Icon, color, skills }, i) => {
            const c = colorMap[color]
            return (
              <motion.div
                key={category}
                className={`glass rounded-2xl p-6 transition-all duration-300 ${c.border}`}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${c.bg} ${c.text}`}>
                    <Icon size={18} />
                  </div>
                  <h3 className="text-white font-semibold">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className={`px-3 py-1 rounded-full text-xs font-medium ${c.tag}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
