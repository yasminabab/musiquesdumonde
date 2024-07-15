// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

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
const analytics = getAnalytics(app);
const storage = getStorage(app);

export { storage };