import { Routes, Route } from 'react-router-dom';
import { Home } from 'components/Home';
import { Auth } from 'components/Auth';
import './App.css';

const App = () => {
  return (
    <div className="bg-indigo-50">
      <Routes> 
        <Route path="*" element={<Auth />} />
        <Route path="home/*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
