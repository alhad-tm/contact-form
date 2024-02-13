// import React, {useState} from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import {  createUserWithEmailAndPassword  } from 'firebase/auth';
// import { auth } from '../firebaseConfig'; 
 
// const Signup = () => {
//     const navigate = useNavigate();
 
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('');
 
//     const onSubmit = async (e) => {
//       e.preventDefault()
     
//       await createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             // Signed in
//             const user = userCredential.user;
//             console.log(user);
//             navigate("/login")
//             // ...
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.log(errorCode, errorMessage);
//             // ..
//         }); 
 
   
//     }
 
//   return (
  
//             <div className="flex flex-col gap-8 items-center justify-center w-full min-h-screen bg-black text-white">
                            
//                     <p className="text-white text-3xl"> Create an account </p>                                                                            
//                     <form className="form">                                                                                            
                      
                          
//                             <input
//                             className="input-box"
//                                 type="email"
//                                 label="Email address"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}  
//                                 required                                    
//                                 placeholder="Email address"                                
//                             />
                

                     
                           
//                             <input
//                                className="input-box"
//                                 type="password"
//                                 label="Create password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)} 
//                                 required                                 
//                                 placeholder="Password"              
//                             />
                                                                  
                        
//                         <button
//                            className="btn"
//                             type="submit" 
//                             onClick={onSubmit}                        
//                         >  
//                             Sign up                                
//                         </button>
                                                                     
//                     </form>
                   
//                     <p className="text-white">
//                         Already have an account?{' '}
//                         <NavLink to="/profile" >
//                             Sign in
//                         </NavLink>
//                     </p>                   
               
//             </div>
    
//   )
// }
 
// export default Signup



// import React, { useState } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../firebaseConfig';

// const Signup = () => {
//     const navigate = useNavigate();

//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');

//     const onSubmit = async (e) => {
//         e.preventDefault();

//         // Check if email or password is empty
//         if (!email.trim() || !password.trim()) {
//             setError('Please enter email and password.');
//             return;
//         }

//         // Clear any previous error
//         setError('');

//         try {
//             const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//             const user = userCredential.user;
//             console.log(user);
//             navigate('/profile');
//         } catch (error) {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.error(errorCode, errorMessage);
//         }
//     };

//     return (
//         <div className="flex flex-col gap-8 items-center justify-center w-full min-h-screen bg-black text-white">
//             <p className="text-white text-3xl">Create an account</p>
//             <form className="form">
//                 <input
//                     className="input-box"
//                     type="email"
//                     label="Email address"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                     placeholder="Email address"
//                 />
//                 <input
//                     className="input-box"
//                     type="password"
//                     label="Create password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                     placeholder="Password"
//                 />
//                 <button className="btn" type="submit" onClick={onSubmit}>
//                     Sign up
//                 </button>
//                 {error && <p className="text-gray-500 text-sm">{error}</p>}
//             </form>
//             <p className="text-white">
//                 Already have an account?{' '}
//                 <NavLink to="/profile">
//                     Sign in
//                 </NavLink>
//             </p>
//         </div>
//     );
// }

// export default Signup;


import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { motion } from "framer-motion"

const Signup = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();

        // Check if email is empty or invalid format
        if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        // Check if password is empty or less than 6 characters
        if (!password.trim() || password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }

        // Clear any previous error
        setError('');

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log(user);
            navigate('/profile');
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode, errorMessage);
        }
    };

    return (
        <div className="flex flex-col gap-8 items-center justify-center w-full min-h-screen bg-black text-white">
        
            <div className="text-gray-400 text-xl lg:text-2xl xl:text-3xl flex flex-row gap-2 ">
  <motion.span
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.1 }}
  >
    Create
  </motion.span>
  {' '}
  <motion.span
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.4 }}
  >
    Your
  </motion.span>
  {' '}
  <motion.span
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.7 }}
  >
    Account
  </motion.span>
</div>
            <form className="form">
                <input
                    className="input-box"
                    type="email"
                    label="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Email address"
                />
                <input
                    className="input-box"
                    type="password"
                    label="Create password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Password"
                />
                <button className="login-btn" type="submit" onClick={onSubmit}>
                    Sign up
                </button>
                {error && <p className="text-sm text-gray-500">{error}</p>}
            </form>
            <motion.span 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7,delay:0.2}} 
              className="text-sm text-gray-500">
                Already have an account?{' '}
                <NavLink 
               
                 to="/login" className="text-white text-base">
                    Login
                </NavLink>
            </motion.span>
        </div>
    );
}

export default Signup;
