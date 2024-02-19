import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import RegisterAndLogin from './components/RegisterAndLogin';
import Hero from './components/Auth/Hero';

const App = () => {
 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='registerandlogin' element={<RegisterAndLogin />} />
        <Route path="/hero" element={<Hero />} />
      </Routes>
    </Router>
  );
};

export default App;
