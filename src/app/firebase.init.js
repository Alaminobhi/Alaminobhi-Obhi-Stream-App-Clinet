// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIaKtg725t2HeLRFeYO8Vvxw9Hm4yBDL4",
  authDomain: "obhistream.firebaseapp.com",
  projectId: "obhistream",
  storageBucket: "obhistream.appspot.com",
  messagingSenderId: "86856177534",
  appId: "1:86856177534:web:b1f3c389d5b112cd19052f"
};

// Initialize Firebase
const config = initializeApp(firebaseConfig);
export default config;