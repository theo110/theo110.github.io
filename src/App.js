import Navbar from './components/Navbar';
import Home from "./components/Home";
import About from './components/About';
import Contacts from "./components/Contacts";
import Projects from "./components/Projects";
import { Routes, Route, useLocation } from 'react-router-dom';
import React from 'react';
import './css/main.css';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar></Navbar>
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} loaction={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App;
