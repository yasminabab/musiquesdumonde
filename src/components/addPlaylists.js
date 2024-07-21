// inspiration: https://www.educative.io/answers/how-to-add-multiple-documents-to-a-collection-in-firebase

const firebase = require("firebase/compat/app");
require("firebase/compat/firestore");

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
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const playlists = [
    { 
        id: 1, 
        name: 'R&B Old School 🎵', 
        image: "https://firebasestorage.googleapis.com/v0/b/musiques-du-monde.appspot.com/o/images%2Fplaylist1.png?alt=media&token=451104e4-838d-4ddb-819b-665ee70f499b"
    },
    { 
        id: 2, 
        name: 'Vibrations du Monde 🌍', 
        image: "https://firebasestorage.googleapis.com/v0/b/musiques-du-monde.appspot.com/o/images%2Fplaylist2.jpg?alt=media&token=b7bca9c2-5f76-4e78-8358-a754beea2647"
    },
    { 
        id: 3, 
        name: 'Tubes Intemporels 💯', 
        image: "https://firebasestorage.googleapis.com/v0/b/musiques-du-monde.appspot.com/o/images%2Fplaylist3.jpg?alt=media&token=aa69a4a2-2deb-468f-b6c7-bcb55e2b1510"
    },
];

const batch = db.batch();

playlists.forEach(playlist => {
    const docRef = db.collection("playlists").doc();
    batch.set(docRef, playlist);
});

batch.commit().then(() => {
    console.log("batch succeeded.");
}).catch((error) => {
    console.log("error batch", error);
});