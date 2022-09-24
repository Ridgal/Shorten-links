import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <h1 className="pt-40 font-black font-Raleway text-7xl max-2-2xl text-center mx-auto leading-snug lg:text-4xl lg:pt-36 md:text-3xl sm:pt-16 sm:text-2xl">
          More than just shorter links
        </h1>
        <p className="text-2xl tracking-tight text-center max-w-xl mx-auto mt-[16px] md:text-lg md:mt-4 sm:mt-2 sm:text-base">
          Build your brand's recognition and get detailed insights on how your links are performing.
        </p>
        <div className="flex justify-center gap-7 sm:gap-0 sm:flex-col">
          <Link to="#" className="inline-block mt-6 py-[14px] px-8 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-center mb-2">
            Get Started
          </Link>
          <button type="button" className="mt-6 p-4 mb-2 text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm">
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            <span className="sr-only">Icon description</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export { Hero };