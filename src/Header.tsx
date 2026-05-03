function Header(){
    return<>
     <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-xl font-bold tracking-wide">
            Pooja Saini<span className="text-orange-400">.</span>
          </h1>

          <ul className="hidden md:flex gap-8 text-gray-300">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Work</li>
            <li className="hover:text-white cursor-pointer">Experience</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>
      </nav>
    </>
}
export default Header