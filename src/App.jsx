import './App.css';
import '../style.scss';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './header.scss';
import Alternance from './pages/Alternance';
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/infoalternance" element={<Alternance />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
