// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-e18f2.firebaseapp.com",
  projectId: "mern-estate-e18f2",
  storageBucket: "mern-estate-e18f2.appspot.com",
  messagingSenderId: "416900907976",
  appId: "1:416900907976:web:5077adae79a6ae473436fd",
  measurementId: "G-HM4V6CLKB0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
