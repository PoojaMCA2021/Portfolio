function Header(){


    const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    })
  }
    return<>
     <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-xl font-bold tracking-wide">
            Pooja Saini<span className="text-orange-400">.</span>
          </h1>

          {/* <ul className="hidden md:flex gap-8 text-gray-300">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Work</li>
            <li className="hover:text-white cursor-pointer">Experience</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul> */}
            {/* Navigation */}
        <nav className="flex gap-8 text-gray-300 font-medium">

          <button
            onClick={() => scrollToSection('home')}
            className="hover:text-white transition"
          >
            Home
          </button>

          <button
            onClick={() => scrollToSection('projects')}
            className="hover:text-white transition"
          >
            Projects
          </button>

          <button
            onClick={() => scrollToSection('experience')}
            className="hover:text-white transition"
          >
            Work Experience
             </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="hover:text-white transition"
          >
            Contact
          </button>

        </nav>
        </div>
      </nav>
    </>
}
export default Header