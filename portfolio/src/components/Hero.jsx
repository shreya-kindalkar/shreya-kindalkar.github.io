import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi'

const ROLES = [
  'Full Stack Developer',
  'Frontend Developer',
  'Web Developer',
  'UI/UX Craftsperson',
]

function useTypingEffect(words, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, charIdx + 1))
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause)
        } else {
          setCharIdx((c) => c + 1)
        }
      } else {
        setDisplay(current.slice(0, charIdx - 1))
        if (charIdx - 1 === 0) {
          setDeleting(false)
          setWordIdx((w) => (w + 1) % words.length)
          setCharIdx(0)
        } else {
          setCharIdx((c) => c - 1)
        }
      }
    }, deleting ? speed / 2 : speed)

    return () => clearTimeout(timeout)
  }, [charIdx, deleting, wordIdx, words, speed, pause])

  return display
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' } }),
}

export default function Hero() {
  const typedRole = useTypingEffect(ROLES)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center section-padding text-center"
    >
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.p
          className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-4"
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate="show"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4 leading-tight"
          variants={fadeUp}
          custom={1}
          initial="hidden"
          animate="show"
        >
          <span className="text-white">Shreya </span>
          <span className="text-gradient">Sainath Kindalkar</span>
        </motion.h1>

        <motion.div
          className="text-xl md:text-2xl text-gray-300 font-medium mb-6 min-h-8"
          variants={fadeUp}
          custom={2}
          initial="hidden"
          animate="show"
        >
          <span>{typedRole}</span>
          <span className="animate-pulse text-violet-400">|</span>
        </motion.div>

        <motion.p
          className="text-gray-400 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          variants={fadeUp}
          custom={3}
          initial="hidden"
          animate="show"
        >
          Building responsive, user-centric web applications with clean UI and real-world functionality
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          variants={fadeUp}
          custom={4}
          initial="hidden"
          animate="show"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/25 hover:-translate-y-0.5"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 glass text-gray-200 hover:text-white rounded-xl font-medium transition-all duration-200 hover:border-violet-500/50 hover:-translate-y-0.5"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.a
          href="#about"
          className="inline-flex mt-16 text-gray-500 hover:text-violet-400 transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          aria-label="Scroll down"
        >
          <FiArrowDown size={24} />
        </motion.a>
      </div>
    </section>
  )
}
