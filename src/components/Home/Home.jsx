import { Routes, Route } from 'react-router-dom';
import { Footer } from "components/Home/Footer";
import { Header } from "components/Home/Header";
import { Main } from 'components/Main';
import { Shortens } from 'components/Shortens/Shortens';

const Home = () => {
  return (
    <>
      <div className="bg-indigo-50 w-full h-20">
        <Header />
      </div>
        <Routes>
          <Route index element={<Main />} />
          <Route path="shortens" element={<Shortens />} />
        </Routes>
      <Footer />
    </>
  );
};

export { Home };