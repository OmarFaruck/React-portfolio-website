// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; 
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJprF-bHuvN9iirHeWN8yAlBdduq9E2bE",
  authDomain: "react-portfolio-website-3723f.firebaseapp.com",
  projectId: "react-portfolio-website-3723f",
  storageBucket: "react-portfolio-website-3723f.appspot.com",
  messagingSenderId: "1012248233529",
  appId: "1:1012248233529:web:39d81de6bdb66bc43befe8",
  measurementId: "G-MF7K7S94G1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
