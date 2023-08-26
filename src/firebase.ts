// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDJvVD4bD8PLurs5v9NG2ZqGLpIzfqLzC4",
  authDomain: "hafidz-ubaidillah-personal-web.firebaseapp.com",
  projectId: "hafidz-ubaidillah-personal-web",
  storageBucket: "hafidz-ubaidillah-personal-web.appspot.com",
  messagingSenderId: "1008606462040",
  appId: "1:1008606462040:web:0411abdefbf0d2f1be8a2d",
  measurementId: "G-8B7W8F0DBM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);