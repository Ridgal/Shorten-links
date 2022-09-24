import logo from '../../../images/react.svg';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="flex justify-between mt-40 pb-32 lg:flex-col lg:mt-32 lg:pb-24">
          <div className="flex flex-col w-1/2 ml-4 lg:w-full">
            <div className="text-cyan-700 font-Konit font-bold text-xl tracking-tight">About Us</div>
            <h1 className="mt-[2px] font-Konit text-4xl font-black lg:text-3xl sm:text-2xl">
              Here you have full control over your links.
            </h1>
            <p className="mt-[10px] max-w-sm text-xl lg:max-w-full">
              Link Management Platform with all features you need in one place. Shorten, brand, manage and track your links the easy way.
              Free custom URL Shortener with many features that gives you better quality for links shortening. Shortened URLs will never expire. We do not display ads during direct redirecting to the original url.
            </p>
          </div>
          <div className="flex flex-col w-1/2 lg:w-full lg:mt-10">
            <img className="w-[600px] h-[400px] lg:w-full" src={logo} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
};

export { About };