
import { ReactTyped } from 'react-typed'
import './App.css'
import Header from './Header'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function App() {


  return (
    <>
    {/* <section className="h-screen flex items-center justify-between px-20 bg-slate-900 text-white">
      <div>
        <h1 className="text-5xl font-bold">Hi, I'm Pooja 👋</h1>
        <p className="text-xl mt-4">Frontend Developer | Angular Specialist</p>
        <div className="mt-6 space-x-4">
          <button className="bg-blue-500 px-6 py-2 rounded-lg">Hire Me</button>
          <button className="border px-6 py-2 rounded-lg">Download Resume</button>
        </div>
      </div>

      <img
        src="/profile.png"
        alt="profile"
        className="w-80 rounded-full shadow-lg"
      />
    </section> */}
     <div className="bg-[#0f172a] text-white min-h-screen relative overflow-hidden">

      {/* 🔹 Navbar */}
      <Header/>

      {/* 🔹 Background Glow */}
      <div className="absolute top-1/3 left-1/2 w-[500px] h-[500px] bg-orange-500/20 blur-[120px] rounded-full -translate-x-1/2"></div>

      {/* 🔹 Hero Section */}
      <section className="flex flex-col items-center justify-center text-center min-h-screen px-6">

        {/* Avatar */}
        <motion.img
          src="/src/assets/9ac8fdbb-c96d-4a50-ad0e-122a05317ee8.jpg"
          alt="avatar"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-40 h-40 rounded-full border-4 border-orange-400 shadow-[0_0_40px_rgba(255,115,0,0.6)] mb-6"
        />

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-orange-400 to-yellow-500 text-transparent bg-clip-text">
            Pooja Saini
          </span>
        </motion.h1>

        {/* Typing Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-2xl text-gray-300 mt-4"
        >
          <ReactTyped
            strings={[
              ".NET Full Stack Developer",
              "Backend Developer",
              "Angular Specialist",
              
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </motion.div> 

        {/* Value Proposition */}
        <p className="text-gray-400 mt-4 max-w-xl">
          I build scalable Angular applications and dynamic form engines for real-world enterprise solutions.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 mt-8">
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-400 to-yellow-500 text-black font-semibold shadow-lg hover:scale-105 transition">
            See My Work ↓
          </button>

          <button className="px-6 py-3 rounded-full border border-gray-500 hover:border-white hover:scale-105 transition">
            Resume
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 mt-6 text-xl text-gray-400">
          <FaGithub className="hover:text-white cursor-pointer" />
          <FaLinkedin className="hover:text-white cursor-pointer" />
        </div>
      </section>
    </div>
    </>
  )
}

export default App
