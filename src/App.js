
// import './App.css';
// import Login from './components/Login';
// import ContactForm from './components/contactForm';


// function App() {
//   return (
//     <div className="App">
//    <ContactForm/>
   
//    <h1 className="text-red-500 text-5xl bg-green-500">hello</h1>
//    <span>lgin</span>
//    <Login/> 
 
//     </div>

//   );
// }

// export default App;
 import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import firebase from 'firebase/app';
// import 'firebase/auth';

import app from './firebaseConfig';
// import ContactForm from './components/contactForm';
import Login from './components/Login';
import Profile from './components/Profile';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile/>} />  
        {/* <Route path="/contact-form" element={<ContactForm />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
