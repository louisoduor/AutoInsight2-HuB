// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOfE5AEukET35S0pBXjxD8xWUAsd-nG_k",
  authDomain: "react-project-12be5.firebaseapp.com",
  projectId: "react-project-12be5",
  storageBucket: "react-project-12be5.appspot.com",
  messagingSenderId: "599795329049",
  appId: "1:599795329049:web:9cb8ef6ce9333f55e4a288"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app); 