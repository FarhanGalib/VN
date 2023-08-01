// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// import firebase from 'firebase';



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeHrUHxQ4uu3Xw01uSISw23HdiAxsGB_0",
  authDomain: "varanin-34309.firebaseapp.com",
  projectId: "varanin-34309",
  storageBucket: "varanin-34309.appspot.com",
  messagingSenderId: "969731601773",
  appId: "1:969731601773:web:401278b75a89a08c1e5664",
  measurementId: "G-70WEX9MR41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;


// firebase.initializeApp(firebaseConfig);
// var auth = firebase.auth();
// export const {auth , firebase};