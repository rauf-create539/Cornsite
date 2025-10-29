import { useState } from 'react';
import { Routes, Route, Link, NavLink, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Favorites from './pages/Favorites';
import AddCorn from './pages/AddCorn';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

function App() {

  const [corns, setCorns] = useState([]);

  return (
    <div>


      <Routes>
        <Route path='/' element={<Navigate to="/home" replace/>}/>
        <Route path='/home' element={<Home corns={corns}  setCorns={setCorns} />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path='/addcorn' element={<AddCorn setCorns={setCorns} />} />
      </Routes>

    </div>
  )
}

export default App;
