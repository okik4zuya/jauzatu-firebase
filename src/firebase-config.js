// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGI8KvQr_g7VSIB1_ilmImJMHhVkMaZFE",
  authDomain: "jauzatu-c2ed1.firebaseapp.com",
  projectId: "jauzatu-c2ed1",
  storageBucket: "jauzatu-c2ed1.appspot.com",
  messagingSenderId: "167656525981",
  appId: "1:167656525981:web:22e98e43be8424d94e0474",
  measurementId: "G-NHS4RF6MN7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
