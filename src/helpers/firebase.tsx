'use client'
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: 'AIzaSyAAZjLDHnet7Scg77fVWsIDt-old1kNhgs',
  authDomain: 'dzyfhuba-dev.firebaseapp.com',
  projectId: 'dzyfhuba-dev',
  storageBucket: 'dzyfhuba-dev.appspot.com',
  messagingSenderId: '151492045853',
  appId: '1:151492045853:web:fe8eb8e8bf3dca3755eaf4',
  measurementId: 'G-V966CSXXPN'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)