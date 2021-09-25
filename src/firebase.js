import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDoUAMoMkW2_rJWHB-irQyU1W5fLcOAdxk",
  authDomain: "react-coderhouse-5732e.firebaseapp.com",
  projectId: "react-coderhouse-5732e",
  storageBucket: "react-coderhouse-5732e.appspot.com",
  messagingSenderId: "725676805976",
  appId: "1:725676805976:web:61d3ed6d7449ed9ea51f2d"
};

const app = firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore(app);