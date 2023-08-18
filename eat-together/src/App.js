// src/App.js
import React, { useState, Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
// import Login from './components/Login';
import Signup from './components/Signup';
import NormalLoginForm from './components/Login';


// ref: https://rn.mobile.ant.design/docs/react/introduce
// ref: https://landing.ant.design/docs/use/create-react-app-cn







function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
    
  );
}
  

export default App;
