import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiBookOpen } from 'react-icons/fi'

const EDUCATION = [
  {
    degree: 'B.Tech in Computer Science (AI & ML)',
    institution: 'Polaris School of Technology',
    period: 'Expected 2029',
    detail: 'Specialization in Artificial Intelligence & Machine Learning',
    current: true,
  },
  {
    degree: 'Class 12 – Science (PCMB)',
    institution: 'Jain PU College, Jayanagar, Bangalore',
    period: '2024',
    detail: '82%',
  },
  {
    degree: 'Class 10',
    institution: 'Atomic Energy Central School',
    period: '2022',
    detail: '84%',
  },
]

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="section-padding">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-2">My background</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Education</h2>
        </motion.div>

        <div className="space-y-4">
          {EDUCATION.map(({ degree, institution, period, detail, current }, i) => (
            <motion.div
              key={i}
              className={`glass rounded-2xl p-6 flex items-start gap-4 transition-all duration-300 hover:border-violet-500/30 ${
                current ? 'border border-violet-500/30' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{ y: -2 }}
            >
              <div className="p-2.5 rounded-xl bg-violet-600/20 text-violet-400 shrink-0">
                <FiBookOpen size={18} />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2 flex-wrap">
                  <h3 className="text-white font-semibold text-base">{degree}</h3>
                  <div className="flex items-center gap-2">
                    {current && (
                      <span className="px-2 py-0.5 text-xs rounded-full bg-emerald-500/20 text-emerald-400 font-medium">
                        Current
                      </span>
                    )}
                    <span className="text-gray-500 text-xs">{period}</span>
                  </div>
                </div>
                <p className="text-violet-400 text-sm mt-0.5">{institution}</p>
                <p className="text-gray-400 text-sm mt-1">{detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
