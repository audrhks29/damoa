// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCv7MLFBwTnx6imjmdP-CBDtACWPy4KDMQ",
  authDomain: "damoa-c03cf.firebaseapp.com",
  projectId: "damoa-c03cf",
  storageBucket: "damoa-c03cf.appspot.com",
  messagingSenderId: "18847619988",
  appId: "1:18847619988:web:ff283ef8be89f84c050d81",
  measurementId: "G-PN1BGX09L2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authService = getAuth();
// const analytics = getAnalytics(app);