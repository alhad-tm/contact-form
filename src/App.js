
 import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import firebase from 'firebase/app';


import app from './firebaseConfig';

import Login from './components/Login';
import Profile from './components/Profile';
import Signup from './components/Signup';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Signup />} />
        <Route path="/profile" element={<Profile/>} />  
      </Routes>
    </Router>
  );
}; 

export default App;
