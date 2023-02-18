// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTOteD_Q7PYYHbpo0oqLvsh4fbXmuw7nE",
  authDomain: "todo-1cfee.firebaseapp.com",
  projectId: "todo-1cfee",
  storageBucket: "todo-1cfee.appspot.com",
  messagingSenderId: "1094441846966",
  appId: "1:1094441846966:web:202bfca28b6f07410cbe17",
  measurementId: "G-D0HXCD4ZCH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)