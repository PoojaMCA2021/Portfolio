import { ReactTyped } from 'react-typed'
import './App.css'
import Header from './Header'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import profile from './assets/profile.jpg'

function App() {
  return (
    <>
      <div className="bg-[#0f172a] text-white min-h-screen relative overflow-hidden">

        {/* Navbar */}
        <Header />

        {/* Background Glow */}
        <div className="absolute top-1/3 left-1/2 w-[500px] h-[500px] bg-orange-500/20 blur-[120px] rounded-full -translate-x-1/2 pointer-events-none"></div>

        {/* Hero Section */}
        <section id='home' className="flex flex-col items-center justify-center text-center pt-20 min-h-screen px-6 relative z-10">

          {/* Profile Image */}
          <motion.img
            src={profile}
            alt="avatar"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-40 h-40 rounded-full border-4 border-orange-400 shadow-[0_0_40px_rgba(255,115,0,0.6)] mb-6 object-cover"
          />

          {/* Heading */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-orange-400 to-yellow-500 text-transparent bg-clip-text">
              Pooja Saini
            </span>
          </motion.h3>

          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-2xl text-gray-300 mt-4"
          >
            <ReactTyped
              strings={[
                '.NET Full Stack Developer',
                'Backend Developer',
                'Angular Specialist',
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </motion.div>

          {/* Description */}
          <p className="text-gray-400 mt-4 max-w-2xl leading-relaxed">
            I build scalable Angular applications, reusable dynamic form engines,
            and enterprise-grade web solutions using Angular, React, .NET,
            TypeScript, and modern frontend technologies.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-8 flex-wrap justify-center">

            {/* Scroll Button */}
            <button
              onClick={() => {
                document
                  .getElementById('projects')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-400 to-yellow-500 text-black font-semibold shadow-lg hover:scale-105 transition"
            >
              See My Work ↓
            </button>

            {/* Resume Download */}
            <a
              href={`${import.meta.env.BASE_URL}Pooja_Saini_NET+ANGULAR_Resume.pdf`}
              download
              className="px-6 py-3 rounded-full border border-gray-500 hover:border-white hover:scale-105 transition inline-flex items-center justify-center"
            >
              Download Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-8 mt-8 text-3xl text-gray-400 relative z-20">

            {/* GitHub */}
            <a
              href="https://github.com/PoojaMCA2021"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:scale-125 transition duration-300"
            >
              <FaGithub />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/pooja-saini-2202/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 hover:scale-125 transition duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="min-h-screen px-6 py-24 bg-slate-950 relative z-10"
        >
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-16">
            My Projects
          </h3>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

            {/* Project 1 */}
            <div className="bg-slate-900 p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300 border border-slate-800">
              <h3 className="text-2xl font-semibold mb-4 text-orange-400">
                Angular Dynamic Form Engine
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Built a reusable JSON-driven Angular form rendering engine with
                dynamic controls, schema-based layouts, validations, conditional
                rendering, and component registry architecture.
              </p>
            </div>

            {/* Project 2 */}
            <div className="bg-slate-900 p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300 border border-slate-800">
              <h3 className="text-2xl font-semibold mb-4 text-orange-400">
                Insurance Management Portal
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Developed enterprise insurance workflows using Angular,
                .NET APIs, dynamic form rendering, encrypted state management,
                and multi-provider integrations.
              </p>
            </div>

            {/* Project 3 */}
            <div className="bg-slate-900 p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300 border border-slate-800">
              <h3 className="text-2xl font-semibold mb-4 text-orange-400">
                React Portfolio Website
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Created a responsive portfolio website using React, Tailwind CSS,
                Framer Motion animations, GitHub Actions deployment,
                and GitHub Pages hosting.
              </p>
            </div>

            {/* Project 4 */}
            <div className="bg-slate-900 p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300 border border-slate-800">
              <h3 className="text-2xl font-semibold mb-4 text-orange-400">
                Dynamic Workflow System
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Implemented configurable workflow execution using JSON-driven
                action mapping, API orchestration, dynamic validation,
                and conditional business logic handling.
              </p>
            </div>

          </div>
        </section>

        {/* Experience Section */}
<section
  id="experience"
  className="min-h-screen px-6 py-24 bg-[#0f172a] relative z-10"
>
  <h3 className="text-4xl md:text-5xl font-bold text-center mb-16">
    Experience
  </h3>

  <div className="max-w-5xl mx-auto space-y-8">

    {/* Experience Card */}
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-lg hover:scale-[1.02] transition duration-300">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-orange-400">
            .NET Full Stack Developer
          </h3>

          <p className="text-gray-300 mt-2">
            Enterprise Web Application Development
          </p>
        </div>

        <span className="text-gray-400 mt-4 md:mt-0">
          2024 - Present
        </span>
      </div>

      <ul className="mt-6 text-gray-400 space-y-3 list-disc list-inside leading-relaxed">
        <li>
          Developed scalable Angular and .NET applications for enterprise insurance solutions.
        </li>

        <li>
          Built reusable dynamic form rendering engines using JSON schema configurations.
        </li>

        <li>
          Worked on API integrations, encrypted state management, and workflow automation.
        </li>

        <li>
          Optimized complex Angular components and improved application performance.
        </li>

        <li>
          Collaborated with cross-functional teams for production deployments and feature delivery.
        </li>
      </ul>
    </div>

    {/* Experience Card */}
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-lg hover:scale-[1.02] transition duration-300">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-orange-400">
            Frontend Development
          </h3>

          <p className="text-gray-300 mt-2">
            Angular | React | TypeScript
          </p>
        </div>

        <span className="text-gray-400 mt-4 md:mt-0">
          2023 - Present
        </span>
      </div>

      <ul className="mt-6 text-gray-400 space-y-3 list-disc list-inside leading-relaxed">
        <li>
          Created responsive and reusable UI components using Angular and React.
        </li>

        <li>
          Developed dynamic layouts and schema-driven rendering systems.
        </li>

        <li>
          Integrated REST APIs and handled complex frontend validations.
        </li>

        <li>
          Improved user experience with animations and modern UI design practices.
        </li>
      </ul>
    </div>

  </div>
</section>

{/* Contact Section */}
<section
  id="contact"
  className="min-h-screen px-6 py-24 bg-slate-950 relative z-10"
>
  <h3 className="text-4xl md:text-5xl font-bold text-center mb-16">
    Contact Me
  </h3>

  <div className="max-w-3xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-10 shadow-lg">

    <p className="text-gray-400 text-center leading-relaxed mb-10">
      I’m always interested in discussing new opportunities,
      exciting projects, and innovative ideas.
      Feel free to connect with me.
    </p>

    <div className="space-y-6 text-center">

      {/* Email */}
      <div>
        <h3 className="text-xl font-semibold text-orange-400">
          Email
        </h3>

        <a
          href="mailto:sainipooja2202@gmail.com"
          className="text-gray-300 hover:text-white transition"
        >
          sainipooja2202@gmail.com
        </a>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-orange-400">
          Mobile No.
        </h3>

        <a
          href="tel:+918306509948"
          className="text-gray-300 hover:text-white transition"
        >
          +91 8306509948
        </a>
      </div>

      {/* GitHub */}
      <div>
        <h3 className="text-xl font-semibold text-orange-400">
          GitHub
        </h3>

        <a
          href="https://github.com/PoojaMCA2021"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition"
        >
          github.com/PoojaMCA2021
        </a>
      </div>

      {/* LinkedIn */}
      <div>
        <h3 className="text-xl font-semibold text-orange-400">
          LinkedIn
        </h3>

        <a
          href="https://www.linkedin.com/in/pooja-saini-2202/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition"
        >
          linkedin.com/in/pooja-saini-2202/
        </a>
      </div>

    </div>
  </div>
</section>
      </div>
    </>
  )
}

export default App