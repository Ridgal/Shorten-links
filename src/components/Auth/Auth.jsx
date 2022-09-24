import { Routes, Route } from 'react-router-dom';
import { RegistrationForm } from './Forms/RegistrationForm';
import { LoginForm } from "./Forms/LoginForm";
import Logo from '../../images/wallpaper.jpg';

const Auth = () => {
  return (
    <div className="flex min-h-screen items-center justify-center w-full bg-indigo-50">
      <div className="container flex-1 h-[32rem] items-center">
        <div className="flex h-full flex-row md:flex-col md:justify-center md:items-center drop-shadow-2xl">
          <div className="h-auto w-1/2 md:w-3/4 sm:w-full">
            <img className="object-cover w-full h-full" src={Logo} alt="img" />
          </div>
          <div className="flex items-center justify-center w-1/2 md:w-3/4 sm:w-full h-auto">
            <Routes>
              <Route path="/" element={<LoginForm />} />
              <Route path="/register" element={<RegistrationForm />} />
            </Routes>
          </div> 
        </div>
      </div>
    </div>
  );
};

export { Auth };