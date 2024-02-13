
// import firebase from 'firebase/app';
// import 'firebase/auth';

// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID"
// };

// const app = firebase.initializeApp(firebaseConfig);

// export default app;
  





// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBSQX9zdvTfmz712HSWW4jWdSOYOxHWMKs",
  authDomain: "contact-form-auth-9fb39.firebaseapp.com",
  projectId: "contact-form-auth-9fb39",
  storageBucket: "contact-form-auth-9fb39.appspot.com",
  messagingSenderId: "594710398990",
  appId: "1:594710398990:web:b0891328d22f02927ad45f",
  measurementId: "G-14KMPPS198"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
