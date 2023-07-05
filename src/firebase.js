// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-j1tUiBB8hdwcFxnJXtUWt_V-_ZnVXVw",
  authDomain: "react-sportshop.firebaseapp.com",
  projectId: "react-sportshop",
  storageBucket: "react-sportshop.appspot.com",
  messagingSenderId: "266730754549",
  appId: "1:266730754549:web:941b3572f8902e79bad0bc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
