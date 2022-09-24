import { Link } from "react-router-dom";
import logo from '../../../images/logo.svg';

const Footer = () => {
  return (
    <footer className="bg-slate-500 py-20 w-full flex-none">
      <div className="container">
        <div className="flex gap-40 justify-around md:flex-col md:gap-10">
          <div className="max-w-xs md:max-w-full">
            <Link to="#">
              <img className="w-[160px]" src={logo} alt=""/>
            </Link>
            <p className="mt-[18px] text-white text-xl">Sign up for out newsletter to get latest news from us</p>
            <input className="mt-3 flex w-full px-3 py-4 placeholder:italic placeholder:text-slate-400 border border-slate-300 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1" type="text" placeholder="Enter your email" />
            <button className="inline-block bg-gray-700 hover:bg-neutral-200 rounded-xl mt-6 py-[10px] px-8 text-black text-xl tracking-tight ">
              Submit
            </button>
          </div>
          <div>
            <div className="text-2xl font-medium text-red-600">Jump to</div>
            <ul className="mt-2">
              <li className="mt-3"><Link to="#" className="text-white text-xl font-medium">About</Link></li>
              <li className="mt-3"><Link to="#" className="text-white text-xl font-medium">Contact</Link></li>
              <li className="mt-3"><Link to="#" className="text-white text-xl font-medium">Services</Link></li>
              <li className="mt-3"><Link to="#" className="text-white text-xl font-medium">Case Studies</Link></li>
              <li className="mt-3"><Link to="#" className="text-white text-xl font-medium">Blog</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
};

export { Footer };