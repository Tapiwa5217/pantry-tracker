// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import firebase from "firebase/compat/app";
// Required for side-effects
import { getFirestore } from 'firebase/firestore';
//import "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_6A4bRK-CsviyCbCA8sa-REl9Uv29qNY",
  authDomain: "pantry-tracker-d7590.firebaseapp.com",
  projectId: "pantry-tracker-d7590",
  storageBucket: "pantry-tracker-d7590.appspot.com",
  messagingSenderId: "372466383086",
  appId: "1:372466383086:web:1e0911c21bfb5dbcabdbff"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
export default firebaseConfig;