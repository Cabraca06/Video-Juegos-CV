// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1NyLhch0Dxgks9SaS3w1EHo5cx25KojA",
  authDomain: "basedatosvj.firebaseapp.com",
  databaseURL: "https://basedatosvj-default-rtdb.firebaseio.com",
  projectId: "basedatosvj",
  storageBucket: "basedatosvj.firebasestorage.app",
  messagingSenderId: "932681613488",
  appId: "1:932681613488:web:cb04e3b2ffda8b798e3b75",
  measurementId: "G-9NKY9KEZCY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);