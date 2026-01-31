// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApsZyKc_fGgUigzWXIFpL1OXPjDP84rp8",
  authDomain: "doctor-project-df631.firebaseapp.com",
  projectId: "doctor-project-df631",
  storageBucket: "doctor-project-df631.firebasestorage.app",
  messagingSenderId: "378157510256",
  appId: "1:378157510256:web:49a3d87f3a826d54abceb5",
  measurementId: "G-S0YT8VWGW2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);