import { ReactTyped } from 'react-typed'
import './App.css'
import Header from './Header'
import { motion, useInView } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaExternalLinkAlt } from 'react-icons/fa'
import {
  SiAngular, SiReact, SiDotnet, SiTypescript, SiTailwindcss,
  SiJavascript, SiGit, SiPostman, SiJira,
} from 'react-icons/si'
import { DiMsqlServer } from 'react-icons/di'
import { VscAzure } from 'react-icons/vsc'
import profile from './assets/profile.jpg'
import { useRef, type ReactNode } from 'react'


/* ─── Reusable fade-in-up wrapper ─── */
function FadeUp({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ─── Data ─── */
const skills = [
  { icon: <SiAngular />, label: 'Angular', color: '#DD0031' },
  { icon: <SiReact />, label: 'React', color: '#61DAFB' },
  { icon: <SiDotnet />, label: '.NET', color: '#512BD4' },
  { icon: <SiTypescript />, label: 'TypeScript', color: '#3178C6' },
  { icon: <SiJavascript />, label: 'JavaScript', color: '#F7DF1E' },
  { icon: <SiTailwindcss />, label: 'Tailwind', color: '#38BDF8' },
  { icon: <DiMsqlServer />, label: 'SQL Server', color: '#CC2927' },
  { icon: <SiGit />, label: 'Git', color: '#F05032' },
  { icon: <SiPostman />, label: 'Postman', color: '#FF6C37' },
  { icon: <VscAzure />, label: 'Microsoft Azure', color: '#0078D4' },
  { icon: <SiJira />, label: 'Jira', color: '#0052CC' },

]

const projects = [
  {
    title: 'Angular Dynamic Form Engine',
    description:
      'Built a reusable JSON-driven Angular form rendering engine with dynamic controls, schema-based layouts, validations, conditional rendering, and component registry architecture.',
    tags: ['Angular', 'TypeScript', 'JSON Schema', 'RxJS'],
    github: 'https://github.com/PoojaMCA2021',
  },
  {
    title: 'React Portfolio Website',
    description:
      'Created a responsive portfolio website using React, Tailwind CSS, Framer Motion animations, GitHub Actions CI/CD deployment, and GitHub Pages hosting.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'GitHub Actions'],
    github: 'https://github.com/PoojaMCA2021/Portfolio',
    live: 'https://poojamca2021.github.io/Portfolio/',
  }
]

const experiences = [
  {
    role: 'Software Engineer',
    company: 'Monocept Consulting',
    period: 'Jan 2024 – Present',
    points: [
      'Worked on ABHI Health Insurance and Mozart Insurance LCNC platform, developing enterprise-grade insurance solutions.',
      'Built and enhanced a dynamic form rendering engine using JSON schema with end-to-end ownership — reduced UI development effort by 40%, enabling faster feature delivery.',
      'Resolved production bugs and critical issues, reducing system downtime by 30% and ensuring high reliability.',
      'Owned application deployments across development and production environments, resolving release issues to support stable delivery.',
      'Participated in Agile sprint planning, daily stand-ups, and cross-functional collaboration with QA, business teams, and stakeholders.',
      'Tech Stack: C#, ASP.NET Core, Angular, TypeScript, SQL, REST APIs, Git, Jira.',
    ],
  },
  {
    role: '.NET Full Stack Intern',
    company: 'Swabhav Techlabs',
    period: 'May 2023 – Dec 2023',
    points: [
      'Assisted in developing backend services using .NET framework and Web APIs.',
      'Debugged and fixed application issues, improving overall performance and reliability.',
      'Worked with SQL databases for data storage, retrieval, and query optimisation.',
      'Supported implementation of new features and enhancements in existing applications.',
      'Tech Stack: C#, .NET, SQL, REST APIs, Git.',
    ],
  },
]
/* ─── App ─── */
export default function App() {
  return (
    <div className="bg-[#080d1a] text-white min-h-screen overflow-x-hidden font-sans">

      {/* ── Ambient blobs ── */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-orange-500/10 blur-[160px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-yellow-500/8 blur-[140px] rounded-full" />
        <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-orange-600/6 blur-[120px] rounded-full" />
      </div>

      <Header />

      {/* ════════════════════════════════
          HERO
      ════════════════════════════════ */}
      <section
        id="home"
        className="relative z-10 flex flex-col items-center justify-center text-center pt-24 min-h-screen px-6"
      >
        {/* Subtle grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Profile image */}
        <motion.div
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 18 }}
          className="relative mb-8"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-400 to-yellow-500 blur-xl opacity-40 scale-110" />
          <img
            src={profile}
            alt="Pooja Saini"
            className="relative w-40 h-40 rounded-full border-4 border-orange-400/60 object-cover shadow-2xl"
          />
          {/* Online dot */}
          <span className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-green-400 border-2 border-[#080d1a] animate-pulse" />
        </motion.div>

        {/* Name */}
        <motion.h3
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight"
        >
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 text-transparent bg-clip-text">
            Pooja Saini
          </span>
        </motion.h3>

        {/* Typing */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="text-xl md:text-3xl text-orange-300/80 mt-4 font-semibold"
        >
          <ReactTyped
            strings={['.NET Full Stack Developer', 'Angular Specialist', 'Backend Developer']}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-400 mt-5 max-w-xl leading-relaxed text-base md:text-lg"
        >
          I build scalable Angular applications, reusable dynamic form engines, and
          enterprise-grade web solutions using{' '}
          <span className="text-orange-400 font-medium">Angular</span>,{' '}
          <span className="text-orange-400 font-medium">React</span>,{' '}
          <span className="text-orange-400 font-medium">.NET</span> &amp; TypeScript.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="flex gap-4 mt-10 flex-wrap justify-center"
        >
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-bold shadow-lg hover:shadow-orange-500/40 hover:scale-105 transition-all duration-300"
          >
            View My Work ↓
          </button>
          <a
            href={`${import.meta.env.BASE_URL}Pooja_Saini_NET+ANGULAR_Resume.pdf`}
            download
            className="px-8 py-3.5 rounded-full border border-orange-400/40 text-orange-300 hover:bg-orange-500/10 hover:border-orange-400 hover:scale-105 transition-all duration-300 font-semibold"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex gap-6 mt-10 text-2xl text-gray-500"
        >
          <a href="https://github.com/PoojaMCA2021" target="_blank" rel="noopener noreferrer"
            className="hover:text-white hover:scale-125 transition duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/pooja-saini2202/" target="_blank" rel="noopener noreferrer"
            className="hover:text-blue-400 hover:scale-125 transition duration-300 hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]">
            <FaLinkedin />
          </a>
          <a href="mailto:sainipooja2202@gmail.com"
            className="hover:text-orange-400 hover:scale-125 transition duration-300 hover:drop-shadow-[0_0_8px_rgba(251,146,60,0.8)]">
            <FaEnvelope />
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-16 text-gray-600 text-xs tracking-widest uppercase"
        >
          scroll
          <div className="mx-auto mt-2 w-px h-8 bg-gradient-to-b from-gray-600 to-transparent" />
        </motion.div>
      </section>

      {/* ════════════════════════════════
          SKILLS
      ════════════════════════════════ */}
      <section id="skills" className="relative z-10 px-6 py-24">
        <FadeUp>
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
            Tech{' '}
            <span className="bg-gradient-to-r from-orange-400 to-yellow-500 text-transparent bg-clip-text">
              Stack
            </span>
          </h2>
          <p className="text-gray-500 text-center mb-16">Tools &amp; technologies I work with daily</p>
        </FadeUp>

        <div className="max-w-5xl mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
          {skills.map(({ icon, label, color }, i) => (
            <FadeUp key={label} delay={i * 0.06}>
              <div
                className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-orange-500/50 hover:bg-slate-800/80 hover:scale-110 transition-all duration-300 cursor-default"
              >
                <span className="text-4xl transition-transform duration-300 group-hover:scale-110" style={{ color }}>
                  {icon}
                </span>
                <span className="text-xs font-semibold text-gray-400 group-hover:text-white transition">{label}</span>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════
          PROJECTS
      ════════════════════════════════ */}
      <section id="projects" className="relative z-10 px-6 py-24 bg-slate-950/60">
        <FadeUp>
          <h4 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
            Featured{' '}
            <span className="bg-gradient-to-r from-orange-400 to-yellow-500 text-transparent bg-clip-text">
              Projects
            </span>
          </h4>
          <p className="text-gray-500 text-center mb-16">Things I've built that I'm proud of</p>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map(({ title, description, tags, github, live }, i) => (
            <FadeUp key={title} delay={i * 0.1}>
              <div className="group relative flex flex-col h-full bg-slate-900 border border-slate-800 hover:border-orange-500/50 rounded-2xl p-7 shadow-xl hover:shadow-orange-500/10 transition-all duration-400">
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />

                <h3 className="text-xl font-bold text-orange-400 mb-3">{title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm flex-1">{description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-orange-500/10 text-orange-300 border border-orange-500/20 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-5 text-sm font-semibold">
                  <a href={github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-gray-400 hover:text-white transition">
                    <FaGithub /> GitHub
                  </a>
                  {live && (
                    <a href={live} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-orange-400 hover:text-orange-300 transition">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════
          EXPERIENCE
      ════════════════════════════════ */}
      <section id="experience" className="relative z-10 px-6 py-24">
        <FadeUp>
          <h4 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
            Work{' '}
            <span className="bg-gradient-to-r from-orange-400 to-yellow-500 text-transparent bg-clip-text">
              Experience
            </span>
          </h4>
          <p className="text-gray-500 text-center mb-16">My professional journey so far</p>
        </FadeUp>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500/60 via-orange-500/20 to-transparent" />

          <div className="space-y-12">
            {experiences.map(({ role, company, period, points }, i) => (
              <FadeUp key={role} delay={i * 0.15}>
                <div className="pl-16 md:pl-24 relative">
                  {/* dot */}
                  <div className="absolute left-4 md:left-6 top-2 w-4 h-4 rounded-full bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.8)] border-2 border-[#080d1a]" />

                  <div className="bg-slate-900 border border-slate-800 hover:border-orange-500/40 rounded-2xl p-7 shadow-lg transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-5">
                      <div>
                        <h3 className="text-xl font-bold text-orange-400">{role}</h3>
                        <p className="text-gray-400 text-sm mt-0.5">{company}</p>
                      </div>
                      <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-orange-500/10 text-orange-300 border border-orange-500/20 whitespace-nowrap self-start sm:self-auto">
                        {period}
                      </span>
                    </div>

                    <ul className="space-y-2.5">
                      {points.map((pt, j) => (
                        <li key={j} className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
                          <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-orange-400" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          CONTACT
      ════════════════════════════════ */}
      <section id="contact" className="relative z-10 px-6 py-24 bg-slate-950/60">
        <FadeUp>
          <h4 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
            Get in{' '}
            <span className="bg-gradient-to-r from-orange-400 to-yellow-500 text-transparent bg-clip-text">
              Touch
            </span>
          </h4>
          <p className="text-gray-500 text-center mb-16">
            Open to new opportunities, collaborations, and interesting projects.
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="max-w-2xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-10 shadow-2xl">
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: <FaEnvelope />, label: 'Email', value: 'sainipooja2202@gmail.com', href: 'mailto:sainipooja2202@gmail.com' },
                { icon: <FaPhone />, label: 'Phone', value: '+91 8306509948', href: 'tel:+918306509948' },
                { icon: <FaGithub />, label: 'GitHub', value: 'github.com/PoojaMCA2021', href: 'https://github.com/PoojaMCA2021' },
                { icon: <FaLinkedin />, label: 'LinkedIn', value: 'pooja-saini-2202', href: 'https://www.linkedin.com/in/pooja-saini2202/' },
              ].map(({ icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-5 rounded-2xl bg-slate-800/60 border border-slate-700 hover:border-orange-500/60 hover:bg-slate-800 transition-all duration-300"
                >
                  <span className="text-2xl text-orange-400 group-hover:scale-110 transition">{icon}</span>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">{label}</p>
                    <p className="text-sm text-gray-300 group-hover:text-white transition truncate">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability badge */}
            <div className="mt-8 flex items-center justify-center gap-2.5 text-sm text-green-400">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for new opportunities
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ── Footer ── */}
      <footer className="relative z-10 py-8 text-center text-gray-600 text-sm border-t border-slate-900">
        <p>
          Crafted with ❤️ by{' '}
          <span className="text-orange-400 font-semibold">Pooja Saini</span> · {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  )
}