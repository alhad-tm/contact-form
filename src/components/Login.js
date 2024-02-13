// // src/components/Login.js
// import React, { useState } from 'react';
// import firebase from '../firebaseConfig';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await firebase.auth().signInWithEmailAndPassword(email, password);
//       console.log('Login successful');
//     } catch (error) {
//       console.error('Error signing in:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;



import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import firebase from '../firebaseConfig';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      navigate('/profile')
    } catch (error) {
      console.error(error);
    }
  };
  // const navB=()=>{
  //    navigate('/profile')
  // }

  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center gap-8 text-white text-3xl">
      <span>Login</span>
      <form className="form" onSubmit={handleLogin}>
        <div>
          {/* <label>Email:</label> */}
          <input
          className="input-box"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            placeholder='Email'
          />
        </div>
        <div>
          {/* <label>Password:</label> */}
          <input
           className="input-box"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
          />
        </div>
        <button className="submit-btn" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
