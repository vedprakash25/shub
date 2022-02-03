import './App.css';
import { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Canvas from './components/Pages/Canvas';
import Apple from './components/Pages/Apple';
import MagicScroll from './components/Pages/MagicScroll';
import API from './components/Pages/API';

const App = () => {

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Canvas />} />
          <Route path="apple" element={<Apple />} />
          <Route path="mag" element={<MagicScroll />} />
          <Route path="api" element={<API />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
