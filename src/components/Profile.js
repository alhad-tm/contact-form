import React from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import app from '../firebaseConfig';
import ContactForm from './contactForm';

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await app.auth().signOut();
      navigate('/');
      console.log("done")
    } catch (error) {
      console.error(error); 
    }
  };

  return (
    <div className='flex flex-col w-full min-h-screen bg-black text-white text-3xl'>
      <h2>Profile</h2>
      <ContactForm/>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
 