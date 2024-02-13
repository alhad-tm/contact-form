// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import app from '../firebaseConfig';
// import ContactForm from './contactForm';

// const Profile = () => {
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await app.auth().signOut();
//       navigate('/');
//       console.log("done")
//     } catch (error) {
//       console.error(error); 
//     }
//   };

//   return (
//     <div className='flex flex-col items-center justify-center w-full min-h-screen bg-black text-white text-xl'>
//     <div className="flex justify-end w-full px-8">
//         <span>Profile</span>

//     </div>
//       <ContactForm/>
//       <button className="logout-btn" onClick={handleLogout}>Logout</button>
//     </div>
//   );
// };

// export default Profile;
 


import React from 'react';
import User1 from "../assets/user1.png"
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig'; // Import the auth object
import ContactForm from './contactForm';

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut(); // Use the auth object
      navigate('/login');
      console.log("done")
    } catch (error) {
      console.error(error); 
    }
  };

  return (
    <div className='flex flex-col gap-12 items-center justify-center w-full min-h-screen bg-black text-white text-xl'>
    <div className="flex justify-between items-center w-full px-8 lg:px-16">
        {/* <span>Profile</span> */}
        <div className="flex flex-col items-center justify-center gap-2">
        <img className="w-11" src={User1}/>
        <span className="text-gray-500 text-sm md:text-base">User</span>  
        </div>
        
        <button className="logout-btn " onClick={handleLogout}>Logout</button>

    </div>
      <ContactForm/>
     
    </div>
  );
};

export default Profile;
