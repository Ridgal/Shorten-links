import { AnimatePresence, motion } from 'framer-motion';
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from '../../../images/logo.svg';

const Header = () => {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="w-full backdrop-blur-[2px] fixed shadow top-0">
      <div className="container">
        <nav className="flex justify-between items-center pt-[20px] pb-[20px]">
          <Link to="/home" className='flex items-center pb-2'>
            <img className="w-[100px]" src={logo} alt="logo"/>
          </Link>
          <ul className="flex gap-12 md:hidden items-center">
            <li><Link className="font-medium font-Quicksand text-2xl text-zinc-900 hover:text-cyan-600 active:outline-slate-900 transition-colors lg:text-lg" to="/home">Home</Link></li>
            <li><Link className="font-medium font-Quicksand text-2xl text-zinc-900 hover:text-cyan-600 transition-colors lg:text-lg" to="shortens">Shortens</Link></li>
            <li><Link className="font-medium font-Quicksand text-2xl whitespace-nowrap inline-flex items-center justify-center rounded-full pl-3 pr-3 pt-1 pb-1 shadow-lg shadow-sky-600 text-black hover:bg-sky-600 lg:text-lg" to="/">Log in</Link></li>
          </ul>
          <button className="hidden md:block" onClick={() => setShowMenu(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {showMenu && (
            <AnimatePresence>
              <motion.div
                initial={{opacity: 0, height: 0}}
                animate={{opacity: 1, height: 'auto'}}
                className="absolute z-10 top-0 inset-x-0 p-2 transition-[3s] origin-top-right md:block">
                <div className="rounded-lg shadow-md bg-indigo-50 ring-1 ring-black ring-opacity-5">
                  <div className="px-5 pt-4 mb-1 flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src={logo}
                        alt="logo"
                      />
                    </div>
                    <div className="-mr-2">
                      <button id="close-btn" onClick={() => setShowMenu(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-lg hover:text-gray-900 transition-colors" viewBox="0 0 16 16">
                          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    <Link className="block font-Quicksand text-xl px-3 py-2 rounded-md font-medium text-gray-700 hover:text-gray-900 hover:bg-indigo-100" to="/home">Home</Link>
                    <Link className="block font-Quicksand text-xl px-3 py-2 rounded-md font-medium text-gray-700 hover:text-gray-900 hover:bg-indigo-100" to="shortens">Shortens</Link>
                  </div>
                    <Link to="/" className="block bg-indigo-50 w-full text-xl px-5 py-2 font-mono text-center font-medium text-indigo-600 hover:bg-indigo-200">
                      Log in
                    </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </nav>
      </div>
    </header>
  )
};

export { Header };