import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMail, FiSend, FiGithub, FiLinkedin } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'

const SOCIALS = [
  { icon: FiMail, label: 'Email', href: 'mailto:shreyakindalkar7@gmail.com', value: 'shreyakindalkar7@gmail.com' },
  { icon: FiGithub, label: 'GitHub', href: 'https://github.com/shreya-kindalkar', value: 'shreya-kindalkar' },
  { icon: FiLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/shreya-kindalkar7', value: 'shreya-kindalkar7' },
  { icon: SiLeetcode, label: 'LeetCode', href: 'https://leetcode.com/shreya-kindalkar', value: 'shreya-kindalkar' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Frontend-only: open mailto
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.open(`mailto:shreyakindalkar7@gmail.com?subject=${subject}&body=${body}`)
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-2">Let's connect</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Contact Me</h2>
          <p className="text-gray-400 mt-3 max-w-md mx-auto text-sm">
            Open to opportunities, collaborations, or just a good conversation about tech.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Socials */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {SOCIALS.map(({ icon: Icon, label, href, value }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="flex items-center gap-4 glass rounded-xl p-4 hover:border-violet-500/30 transition-all duration-300 group"
              >
                <div className="p-2 rounded-lg bg-violet-600/20 text-violet-400 group-hover:bg-violet-600/30 transition-colors">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{label}</p>
                  <p className="text-gray-400 text-xs">{value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <input
              type="text"
              placeholder="Your name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full glass rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/50 transition-colors bg-transparent"
            />
            <input
              type="email"
              placeholder="Your email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full glass rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/50 transition-colors bg-transparent"
            />
            <textarea
              placeholder="Your message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full glass rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/50 transition-colors bg-transparent resize-none"
            />
            <motion.button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 text-white rounded-xl py-3 text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/25"
              whileTap={{ scale: 0.98 }}
            >
              {sent ? 'Opening mail client...' : (<><FiSend size={14} /> Send Message</>)}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
