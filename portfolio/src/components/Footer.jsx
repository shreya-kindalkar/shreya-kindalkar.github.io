import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'

const LINKS = [
  { icon: FiGithub, href: 'https://github.com/shreya-kindalkar', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/shreya-kindalkar7', label: 'LinkedIn' },
  { icon: SiLeetcode, href: 'https://leetcode.com/shreya-kindalkar', label: 'LeetCode' },
  { icon: FiMail, href: 'mailto:shreyakindalkar7@gmail.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Shreya Sainath Kindalkar
        </p>
        <div className="flex items-center gap-4">
          {LINKS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-500 hover:text-violet-400 transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
