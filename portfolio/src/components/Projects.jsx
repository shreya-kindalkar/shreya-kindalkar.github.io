import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiExternalLink, FiGithub, FiAlertCircle } from 'react-icons/fi'

const PROJECTS = [
  {
    title: 'Voyageur',
    description: 'Travel platform focused on frontend performance and usability. Responsive UI with API integration, scalable component structure, and smooth data flow.',
    tech: ['React', 'FastAPI', 'PostgreSQL'],
    color: 'violet',
    links: [
      { label: 'Frontend', url: 'https://voyageur-sable.vercel.app/', icon: FiExternalLink },
      { label: 'Backend', url: 'https://voyageur-1i0h.onrender.com/', icon: FiExternalLink },
      { label: 'GitHub', url: 'https://github.com/jahnavigajjala-3/Voyageur', icon: FiGithub },
    ],
    note: 'Backend may take ~1 min to start (free tier)',
  },
  {
    title: 'Recipe Book App',
    description: 'Full-stack app to create, manage, and explore recipes. Features authentication, full CRUD operations, and an intuitive UI with smooth navigation.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Django', 'SQLite'],
    color: 'emerald',
    links: [
      { label: 'Live', url: 'https://shreyakindalkar.pythonanywhere.com', icon: FiExternalLink },
      { label: 'GitHub', url: 'https://github.com/shreya-kindalkar/recipe-book', icon: FiGithub },
    ],
  },
  {
    title: 'AI Travel Itinerary Planner',
    description: 'Frontend for an AI-powered itinerary generator. Clean UI for user input and plan visualization. Built in a 36–48 hour hackathon environment.',
    tech: ['React', 'AI Integration'],
    color: 'blue',
    links: [
      { label: 'GitHub', url: 'https://github.com/NullPointer-Replit/TravelVerse', icon: FiGithub },
    ],
    badge: 'Hackathon',
  },
]

const colorMap = {
  violet: { accent: 'text-violet-400', border: 'hover:border-violet-500/40', tag: 'bg-violet-600/15 text-violet-300', glow: 'hover:shadow-violet-500/10', titleHover: 'group-hover:text-violet-400' },
  emerald: { accent: 'text-emerald-400', border: 'hover:border-emerald-500/40', tag: 'bg-emerald-600/15 text-emerald-300', glow: 'hover:shadow-emerald-500/10', titleHover: 'group-hover:text-emerald-400' },
  blue: { accent: 'text-blue-400', border: 'hover:border-blue-500/40', tag: 'bg-blue-600/15 text-blue-300', glow: 'hover:shadow-blue-500/10', titleHover: 'group-hover:text-blue-400' },
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-2">What I've built</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map(({ title, description, tech, color, links, note, badge }, i) => {
            const c = colorMap[color]
            return (
              <motion.div
                key={title}
                className={`glass rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 ${c.border} hover:shadow-xl ${c.glow} group`}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className={`text-lg font-bold text-white ${c.titleHover} transition-colors`}>
                    {title}
                  </h3>
                  {badge && (
                    <span className="px-2 py-0.5 text-xs rounded-full bg-amber-500/20 text-amber-300 font-medium shrink-0">
                      {badge}
                    </span>
                  )}
                </div>

                <p className="text-gray-400 text-sm leading-relaxed flex-1">{description}</p>

                {note && (
                  <div className="flex items-start gap-2 text-xs text-amber-400/80 bg-amber-500/10 rounded-lg px-3 py-2">
                    <FiAlertCircle size={12} className="mt-0.5 shrink-0" />
                    <span>{note}</span>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {tech.map((t) => (
                    <span key={t} className={`px-2 py-0.5 rounded-full text-xs font-medium ${c.tag}`}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-1">
                  {links.map(({ label, url, icon: Icon }) => (
                    <a
                      key={label}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-1.5 text-xs font-medium text-gray-400 ${c.accent} hover:opacity-100 opacity-60 transition-opacity`}
                    >
                      <Icon size={13} />
                      {label}
                    </a>
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
