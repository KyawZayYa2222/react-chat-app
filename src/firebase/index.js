// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDc7FIhFhWqrTfWWB6WelSgah5TvBgmRAg",
  authDomain: "react-chat-app-c287f.firebaseapp.com",
  projectId: "react-chat-app-c287f",
  storageBucket: "react-chat-app-c287f.firebasestorage.app",
  messagingSenderId: "894818920248",
  appId: "1:894818920248:web:fc48accf13c5c3ad2c03cd",
  measurementId: "G-XYB03WY7NP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };