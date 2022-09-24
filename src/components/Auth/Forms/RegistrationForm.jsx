import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registration } from 'redux/user/userSlice';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.svg';

const RegistrationForm = () => {

  const {
    register,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm({
    mode: "onBlur"
  });

  const dispatch = useDispatch();

  const onSubmit = ({username, password}) => {
    dispatch(registration({username, password}));
    reset();
  };

  return (
    <div className="w-full h-full bg-white">
      <div className="flex flex-col content-center w-full h-full p-14 md:pb-0 md:px-7 md:pt-6 sm:px-5 mb-4">
        <div className="flex justify-center">
          <img className="w-72 mb-6 sm:mb-3 sm:w-56" src={logo} alt="logo"/>
        </div>
          <h1 className="mb-4 text-3xl lg:text-2xl sm:text-xl md:mb-0 sm:mb-0 font-bold text-center text-blue-800">
            Register Your Account
          </h1>
        <form className="mt-6 sm:mt-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="username" className="block text-sm text-gray-800">Email</label>
            <input 
              type="text"
              name="username" 
              className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
              {...register("username")}
              required
            />
          </div>
          <div className="mt-4 sm:mt-2" />
            <div>
              <label htmlFor="password" className="block text-sm text-gray-800">Password</label>
              <input 
                type="password" 
                name="passsword"
                autoComplete="on" 
                className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                {...register("password")}
                required
              />
            </div>
              <a href="/#" className="text-xs text-gray-600 hover:underline">Forget Password?</a>
              <div className="mt-6">
              <button
                type="submit"
                disabled={!isValid}
                className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue">
                Register
              </button>
          </div>
        </form>
        <p className="mt-4 text-xs font-light text-center text-gray-700"> 
          Are you already registered? 
          <Link to="/" className="font-medium text-blue-600 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  )
};

export { RegistrationForm };