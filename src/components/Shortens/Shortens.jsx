import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createShortLink } from 'Redux/link/linkSlice';
import { Table } from './Table';

const Shortens = () => {

  const [isShown, setIsShown] = useState(true);

  const ref = useRef({});
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onSubmit'
  });

  const onSubmit = ({link}) => {
    dispatch(createShortLink(link));
    reset();
  };

  const showOnClick = () => {
    setIsShown(true);
    localStorage.setItem('persist:root', ref)
  };

  const deleteLinks = () => {
    window.localStorage.removeItem('persist:root');
    window.location.reload();
    setIsShown(false);
  };
  
  return (
    <section className="bg-indigo-50 h-screen md:h-[80vh]">
      <div className="container mt-14">
        <div className="flex flex-col items-center pt-24 lg:pt-20 md:pt-14 sm:pt-10">
          <div className="pb-10">
            <p className="font-black font-Raleway text-2xl max-2-2xl text-center mx-auto leading-snug md:text-xl">
              URL Shortener
            </p>
            <h1 className="font-black font-Raleway text-7xl max-2-2xl text-center mx-auto leading-snug lg:text-4xl md:text-3xl sm:text-2xl">
              More than just shorter links
            </h1>
          </div>
          <form className="w-[80%]" onSubmit={handleSubmit(onSubmit)}>   
            <label htmlFor="simple-search" className="sr-only">Search</label>
            <div className="flex w-full">
              <input 
                type="text" 
                id="simple-search"
                // autoComplete="off"
                className="w-full block p-3 pl-5 md:p-2 sm:p-2 bg-indigo-200 rounded-l-lg border-gray-300 focus:outline-blue-600 text-gray-900 text-sm " 
                placeholder="Shorten a link here..."
                {...register('link', {
                  required: 'Please add a link...',
                  pattern: {
                    value: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
                    message: 'Please enter a valid url...'
                  }
                })} 
              />
              <button
                onClick={showOnClick} 
                type="submit" 
                className="text-white w-1/4 rounded-r-lg bg-blue-700 hover:bg-blue-800 font-medium text-sm md:text-xs md:p-0 md:px-1 px-4 py-2 ">
                Shorten it!
              </button>
            </div>
            {errors.link && (
              <div className="w-1/2 py-1 px-4 font-Quicksand italic font-semibold rounded-xl text-slate-90 text-danger">
                {errors.link.message}
              </div>
            )}
          </form>
        </div>
        <div className="container w-[80%] mt-5 md:mt-3 sm:w-[90%]">
          <Table />
            {isShown && (
              <div ref={ref} className="flex justify-end w-full px-6">
                <button
                  id='btnDelete'
                  onClick={() => deleteLinks()}
                  className="h-6 sm:h-5 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-2 focus:outline-1 focus:ring-red-300 font-medium w-full rounded-lg text-sm px-5 text-center" >
                  Delete All
                </button>
              </div>
            )}
        </div>
      </div>
    </section>
  )
};

export { Shortens };