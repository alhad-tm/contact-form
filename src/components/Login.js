


// import React, { useState } from 'react';

// import { useNavigate } from 'react-router-dom';
// import firebase from '../firebaseConfig';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await firebase.auth().signInWithEmailAndPassword(email, password);
//       navigate('/profile')
//     } catch (error) {
//       console.error(error);
//     }
//   };
  

//   return (
//     <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center gap-8 text-white text-3xl p-8">
//       <span>Login</span>
//       <form className="form" onSubmit={handleLogin}>
//         <div>
     
//           <input
//           className="input-box"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)} 
//             placeholder='Email'
//           />
//         </div>
//         <div>
   
//           <input
//            className="input-box"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder='Password'
//           />
//         </div>
//         <button className="btn" type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;




// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { auth } from '../firebaseConfig'; // Import auth from firebaseConfig

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await auth.signInWithEmailAndPassword(email, password); // Use auth.signInWithEmailAndPassword
//       navigate('/profile');
//     } catch (error) {
//       console.error('Login error:', error);
//     }
//   };

//   return (
//     <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center gap-8 text-white text-3xl p-8">
//       <span>Login</span>
//       <form className="form" onSubmit={handleLogin}>
      
//           <input
//             className="input-box"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)} 
//             placeholder='Email'
//           />
       
       
//           <input
//             className="input-box"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder='Password'
//           />
       
//         <button className="btn" type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
 




// import React, {useState} from 'react';
// import {  signInWithEmailAndPassword   } from 'firebase/auth';
// import { auth } from '../firebaseConfig';
// import { NavLink, useNavigate } from 'react-router-dom'
 
// const Login = () => {
//     const navigate = useNavigate();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
       
//     const onLogin = (e) => {
//         e.preventDefault();
//         signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             // Signed in
//             const user = userCredential.user;
//             navigate("/profile")
//             console.log(user);
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.log(errorCode, errorMessage)
//         });
       
//     }
 
//     return(
     
//                     <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center gap-8 text-white text-3xl p-8">                                            
//                         <p> Welcome </p>                       
                                                       
//                         <form className="form">                                              
                          
                               
//                                 <input 
//                                 className="input-box"
//                                     id="email-address"
//                                     name="email"
//                                     type="email"                                    
//                                     required                                                                                
//                                     placeholder="Email address"
//                                     onChange={(e)=>setEmail(e.target.value)}
//                                 />
                          

                          
                              
//                                 <input
//                                   className="input-box border-white"
//                                     id="password"
//                                     name="password"
//                                     type="password"                                    
//                                     required                                                                                
//                                     placeholder="Password"
//                                     onChange={(e)=>setPassword(e.target.value)}
//                                 />
                          
                                                
                          
//                                 <button   
//                                   className="btn"                                 
//                                     onClick={onLogin}                                        
//                                 >      
//                                     Login                                                                  
//                                 </button>
                                                        
//                         </form>
                       
//                         <p className="text-sm text-white text-center">
//                             No account yet? {' '}
//                             <NavLink to="/">
//                                 Sign up
//                             </NavLink>
//                         </p>
                                                   
//                     </div>
       
//     )
// }
 
// export default Login





import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion"

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/profile");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
        console.error("Login error:", errorMessage);
      });
  };

  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center gap-8 text-white text-3xl ">
      <div className="text-gray-400 text-xl lg:text-2xl xl:text-3xl flex flex-row gap-2 ">
  <motion.span
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.1 }}
  >
    Welcome
  </motion.span>
  {' '}
  <motion.span
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
  >
    Back
  </motion.span>
  {' '}
 
</div>
      <form className="form">
        <input
          className="input-box"
          id="email-address"
          name="email"
          type="email"
          required
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input-box border-white"
          id="password"
          name="password"
          type="password"
          required
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorMessage && <p className="text-gray-500 text-sm" > Invalid User Credentials</p>}
        <button
          className="login-btn"
          onClick={onLogin}
        >
          Login
        </button>
      </form>
      <motion.span
       initial={{ opacity: 0, y: -20 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.7,delay:0.2}} 
      className="text-sm text-gray-500 text-center">
        No account yet? {' '}
        <NavLink to="/" className="text-white text-base">
          Sign up
        </NavLink>
      </motion.span>
    </div>
  );
};

export default Login;
