// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBheccdz7qISeRpLrXGee7CdV76DziM3vU",
  authDomain: "musiques-du-monde.firebaseapp.com",
  projectId: "musiques-du-monde",
  storageBucket: "musiques-du-monde.appspot.com",
  messagingSenderId: "294969763442",
  appId: "1:294969763442:web:7ee20fbba09e42094584eb",
  measurementId: "G-77DKMNJZSK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const auth = getAuth(app);
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { auth, db, storage };