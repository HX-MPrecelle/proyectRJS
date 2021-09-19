// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6tvlipe-VMwUo7iTNTXtDAkvmYcQ4YWE",
  authDomain: "react-app-e5d63.firebaseapp.com",
  projectId: "react-app-e5d63",
  storageBucket: "react-app-e5d63.appspot.com",
  messagingSenderId: "619591036259",
  appId: "1:619591036259:web:aa094705f86e43cd2bf756",
  measurementId: "G-L63QVD1EMY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);