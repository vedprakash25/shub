import './App.css';
import { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Canvas from './components/Pages/Canvas';
import Apple from './components/Pages/Apple';
import MagicScroll from './components/Pages/MagicScroll';

const App = () => {

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Canvas />} />
          <Route path="canva" element={<Apple />} />
          <Route path="mag" element={<MagicScroll />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
