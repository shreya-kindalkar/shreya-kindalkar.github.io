import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiUsers } from 'react-icons/fi'

const EXPERIENCES = [
  {
    role: 'Member, Science Forum – Infrastructure Department',
    org: 'Jain PU College, Jayanagar, Bangalore',
    period: 'During PU',
    description: [
      'Coordinated logistics and infrastructure for science events and exhibitions',
      'Collaborated with cross-functional teams to ensure smooth event execution',
      'Developed teamwork, planning, and on-ground coordination skills',
    ],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-2">Beyond code</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Experience & Activities</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 to-transparent" />

          {EXPERIENCES.map(({ role, org, period, description }, i) => (
            <motion.div
              key={i}
              className="relative pl-16 pb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              {/* Dot */}
              <div className="absolute left-4 top-1 w-4 h-4 rounded-full bg-violet-600 border-2 border-violet-400 shadow-lg shadow-violet-500/30" />

              <div className="glass rounded-2xl p-6 hover:border-violet-500/30 transition-all duration-300 group">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-violet-600/20 text-violet-400 mt-0.5">
                    <FiUsers size={16} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base leading-snug">{role}</h3>
                    <p className="text-violet-400 text-sm mt-0.5">{org}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{period}</p>
                  </div>
                </div>
                <ul className="space-y-2 mt-4">
                  {description.map((point, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-400 text-sm">
                      <span className="text-violet-500 mt-1.5 shrink-0">▸</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
