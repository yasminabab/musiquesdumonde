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

const musics = [
    { 
        id: 1, 
        playlistId: 1,
        title: 'Hey oh - Tragédie', 
        date: '2003-06-20', 
        reviews: 3, 
        format: 'Single', 
        genre: 'R&B', 
        continent: 'Europe', 
        language: 'Français', 
        duration: 3.5, 
        artist: 'Tragédie', 
        url: "https://firebasestorage.googleapis.com/v0/b/musiques-du-monde.appspot.com/o/mp3%2Fplaylist1-song1.mp3?alt=media&token=1123dfec-ce0b-4307-a6bb-b22e5e5715e1",
        image: "https://firebasestorage.googleapis.com/v0/b/musiques-du-monde.appspot.com/o/images%2Fsong-cover1.jpg?alt=media&token=de951fe4-735e-46f5-9266-7365158a78f9"
    },
    { 
        id: 2, 
        playlistId: 1, 
        title: 'Are You That Somebody - Aaliyah', 
        date: '1998-06-16', 
        reviews: 5, 
        format: 'Single', 
        genre: 'R&B', 
        continent: 'Amérique', 
        language: 'Anglais', 
        duration: 4.3, 
        artist: 'Aaliyah', 
        url: "https://firebasestorage.googleapis.com/v0/b/musiques-du-monde.appspot.com/o/mp3%2Fplaylist1-song2.mp3?alt=media&token=23fb750f-11f7-4679-bf1f-8aec1aecdc62",
        image: "https://firebasestorage.googleapis.com/v0/b/musiques-du-monde.appspot.com/o/images%2Fsong-cover2.jpg?alt=media&token=49a631ce-2d11-4fa3-8a39-9c1668abea53"  
    },
    { 
        id: 3, 
        playlistId: 1, 
        title: 'Dilemma - Kelly Rowland & Nelly', 
        date: '2002-06-25', 
        reviews: 4, 
        format: 'Single', 
        genre: 'R&B', 
        continent: 'Amérique', 
        language: 'Anglais', 
        duration: 4.5, 
        artist: 'Kelly Rowland & Nelly', 
        url: "https://firebasestorage.googleapis.com/v0/b/musiques-du-monde.appspot.com/o/mp3%2Fplaylist1-song3.mp3?alt=media&token=c9121f1e-75c7-4686-8e96-ec927f243bc3",
        image: "https://firebasestorage.googleapis.com/v0/b/musiques-du-monde.appspot.com/o/images%2Fsong-cover3.jpg?alt=media&token=b0a76a67-21e3-486e-ae4f-2d8c32ad086e"  
    },
    { 
        id: 4, 
        playlistId: 1, 
        title: 'Let Me Love You - Mario', 
        date: '2004-10-12', 
        reviews: 5, 
        format: 'Single', 
        genre: 'R&B', 
        continent: 'Amérique', 
        language: 'Anglais', 
        duration: 4.2, 
        artist: 'Mario', 
        url: "https://firebasestorage.googleapis.com/v0/b/musiques-du-monde.appspot.com/o/mp3%2Fplaylist1-song4.mp3?alt=media&token=34742793-e357-4312-aaaa-e96e2b889824",
        image: "https://firebasestorage.googleapis.com/v0/b/musiques-du-monde.appspot.com/o/images%2Fsong-cover4.jpg?alt=media&token=6c177b1c-8535-43c1-829b-53258e0568bc" 
    },
    { 
        id: 5, 
        playlistId: 1, 
        title: 'U Got It Bad - Usher', 
        date: '2001-08-21', 
        reviews: 4, 
        format: 'Single', 
        genre: 'R&B', 
        continent: 'Amérique', 
        language: 'Anglais', 
        duration: 4.4, 
        artist: 'Usher', 
        url: "https://firebasestorage.googleapis.com/v0/b/musiques-du-monde.appspot.com/o/mp3%2Fplaylist1-song5.mp3?alt=media&token=99e2cee3-2d03-4f5b-9b2f-5e342986350b",
        image: "https://firebasestorage.googleapis.com/v0/b/musiques-du-monde.appspot.com/o/images%2Fsong-cover5.png?alt=media&token=345639d6-fd6e-4002-a437-b7c5aed03eb4"  
    },
    { 
        id: 6, 
        playlistId: 2, 
        title: 'Waving Flag - K\'NAAN', 
        date: '2009-01-30', 
        reviews: 5, 
        format: 'Single', 
        genre: 'Hip-Hop', 
        continent: 'Afrique', 
        language: 'Anglais', 
        duration: 3.4, 
        artist: 'K\'NAAN', 
        url: "https://firebasestorage.googleapis.com/v0/b/musiques-du-monde.appspot.com/o/mp3%2Fplaylist2-song1.mp3?alt=media&token=40c62315-7c5f-4e75-86ff-97c5d9fdbc02",
        image: "https://firebasestorage.googleapis.com/v0/b/musiques-du-monde.appspot.com/o/images%2Fsong-cover6.jpg?alt=media&token=6a1c30e1-7c67-429e-9e20-126fe5e05da3"  
    },
    { 
        id: 7, 
        playlistId: 2, 
        title: 'Volare - Gipsy Kings', 
        date: '1989-06-01', 
        reviews: 4, 
        format: 'Single', 
        genre: 'Latin', 
        continent: 'Europe', 
        language: 'Espagnol', 
        duration: 3.2, 
        artist: 'Gipsy Kings', 
        url: "https://firebasestorage.googleapis.com/v0/b/musiques-du-monde.appspot.com/o/mp3%2Fplaylist2-song2.mp3?alt=media&token=b0eb34af-8eef-4150-9cd7-f947c4f0db5d",
        image: "https://firebasestorage.googleapis.com/v0/b/musiques-du-monde.appspot.com/o/images%2Fsong-cover7.jpg?alt=media&token=d8d97ecf-0b60-40de-8d72-81335cf7cba8"  
    },
    { 
        id: 8, 
        playlistId: 2, 
        title: 'Viva la vida - Coldplay', 
        date: '2008-05-12', 
        reviews: 3, 
        format: 'Single', 
        genre: 'Alternative', 
        continent: 'Europe', 
        language: 'Anglais', 
        duration: 4.0, 
        artist: 'Coldplay', 
        url: "https://firebasestorage.googleapis.com/v0/b/musiques-du-monde.appspot.com/o/mp3%2Fplaylist2-song3.mp3?alt=media&token=610596ee-2aae-4851-a339-ca38d101d25b",
        image: "https://firebasestorage.googleapis.com/v0/b/musiques-du-monde.appspot.com/o/images%2Fsong-cover8.jpg?alt=media&token=59f20774-d7dd-48f5-ba2c-8042c41ce7a9" 
    },
    { 
        id: 9, 
        playlistId: 2, 
        title: 'Waka Waka - Shakira', 
        date: '2010-05-07', 
        reviews: 4, 
        format: 'Single',
        genre: 'Pop', 
        continent: 'Amérique', 
        language: 'Espagnol', 
        duration: 3.2, 
        artist: 'Shakira', 
        url: "https://firebasestorage.googleapis.com/v0/b/musiques-du-monde.appspot.com/o/mp3%2Fplaylist2-song4.mp3?alt=media&token=c5eba7bd-6f4c-4b37-acd5-0fbe0e8b1596",
        image: "https://firebasestorage.googleapis.com/v0/b/musiques-du-monde.appspot.com/o/images%2Fsong-cover9.jpg?alt=media&token=d3d824ae-3bc5-421c-ba91-f23b1055998d"  
    },
    { 
        id: 10, 
        playlistId: 2, 
        title: 'We Are The Champions - Queen', 
        date: '1977-10-07', 
        reviews: 3, 
        format: 'Single', 
        genre: 'Rock', 
        continent: 'Europe', 
        language: 'Anglais', 
        duration: 3.1, 
        artist: 'Queen', 
        url: "https://firebasestorage.googleapis.com/v0/b/musiques-du-monde.appspot.com/o/mp3%2Fplaylist2-song5.mp3?alt=media&token=b414eb73-3dba-4e48-b162-2b156f49f137",
        image: "https://firebasestorage.googleapis.com/v0/b/musiques-du-monde.appspot.com/o/images%2Fsong-cover10.jpg?alt=media&token=cca421dd-47f7-422f-9c6d-dba54d46d880"  
    },
    { 
        id: 11, 
        playlistId: 3, 
        title: 'Somewhere Over The Rainbow - Israel Kamakawiwo\'ole', 
        date: '1993-11-23', 
        reviews: 5, 
        format: 'Single', 
        genre: 'Folk', 
        continent: 'Océanie', 
        language: 'Anglais', 
        duration: 5.1, 
        artist: 'Israel Kamakawiwo\'ole', 
        url: "https://firebasestorage.googleapis.com/v0/b/musiques-du-monde.appspot.com/o/mp3%2Fplaylist3-song1.mp3?alt=media&token=31024a5d-852a-48b2-9e65-d15d5bb0606c",
        image: "https://firebasestorage.googleapis.com/v0/b/musiques-du-monde.appspot.com/o/images%2Fsong-cover11.jpg?alt=media&token=37d683f3-1461-426d-a186-53442291bf74"  
    },
    { 
        id: 12, 
        playlistId: 3,  
        title: 'Billie Jean - Michael Jackson', 
        date: '1982-11-30', 
        reviews: 4, 
        format: 'Single', 
        genre: 'Pop', 
        continent: 'Amérique', 
        language: 'Anglais', 
        duration: 4.5, 
        artist: 'Michael Jackson', 
        url: "https://firebasestorage.googleapis.com/v0/b/musiques-du-monde.appspot.com/o/mp3%2Fplaylist3-song2.mp3?alt=media&token=8cd9bb7d-485d-4e73-b544-3ff9a9912e76",
        image: "https://firebasestorage.googleapis.com/v0/b/musiques-du-monde.appspot.com/o/images%2Fsong-cover12.jpg?alt=media&token=d81e3690-4ed8-4ea6-abba-190dbfe07870"  
    },
    { 
        id: 13, 
        playlistId: 3,  
        title: 'I will always love you - Whitney Houston', 
        date: '1992-11-03', 
        reviews: 5, 
        format: 'Single', 
        genre: 'Soul', 
        continent: 'Amérique', 
        language: 'Anglais', 
        duration: 4.3, 
        artist: 'Whitney Houston', 
        url: "https://firebasestorage.googleapis.com/v0/b/musiques-du-monde.appspot.com/o/mp3%2Fplaylist3-song3.mp3?alt=media&token=44c66a2f-2e05-4295-a476-17dcc9fd005e",
        image: "https://firebasestorage.googleapis.com/v0/b/musiques-du-monde.appspot.com/o/images%2Fsong-cover13.jpg?alt=media&token=471db1b5-fe88-482d-a6e3-f08a6eea455d"  
    },
    { 
        id: 14, 
        playlistId: 3,  
        title: 'My Heart Will Go On - Celine Dion', 
        date: '1997-11-18', 
        reviews: 4, 
        format: 'Single', 
        genre: 'Pop', 
        continent: 'Amérique', 
        language: 'Anglais', 
        duration: 4.4, 
        artist: 'Celine Dion', 
        url: "https://firebasestorage.googleapis.com/v0/b/musiques-du-monde.appspot.com/o/mp3%2Fplaylist3-song4.mp3?alt=media&token=218659f8-eb52-4eb2-a0b2-551e7503dfea",
        image: "https://firebasestorage.googleapis.com/v0/b/musiques-du-monde.appspot.com/o/images%2Fsong-cover14.jpg?alt=media&token=c3e4fb8f-b7e2-487d-83d2-b3d8a80024d7"  
    },
    { 
        id: 15, 
        playlistId: 3,  
        title: 'Je t\'aime - Lara Fabian', 
        date: '1996-03-04', 
        reviews: 5, 
        format: 'Single', 
        genre: 'Pop', 
        continent: 'Europe', 
        language: 'Français', 
        duration: 4.2, 
        artist: 'Lara Fabian', 
        url: "https://firebasestorage.googleapis.com/v0/b/musiques-du-monde.appspot.com/o/mp3%2Fplaylist3-song5.mp3?alt=media&token=11ffa08a-fa83-4180-8c2a-47d3f641fc49",
        image: "https://firebasestorage.googleapis.com/v0/b/musiques-du-monde.appspot.com/o/images%2Fsong-cover15.jpg?alt=media&token=a28d947b-7fee-4af5-98ec-8d62cde60653"  
    },
    { 
        id: 16, 
        title: 'Thriller - Michael Jackson', 
        date: '1982-11-30', 
        reviews: 5, 
        format: 'LP', 
        genre: 'Pop', 
        continent: 'Amérique', 
        language: 'Anglais', 
        duration: 42.19, 
        artist: 'Michael Jackson', 
        url: "",
        image: ""  
    },
    { 
        id: 17, 
        title: 'Back to Black - Amy Winehouse', 
        date: '2006-10-27', 
        reviews: 5, 
        format: 'LP', 
        genre: 'Soul', 
        continent: 'Europe', 
        language: 'Anglais', 
        duration: 34.00, 
        artist: 'Amy Winehouse', 
        url: "",
        image: ""  
    },
];

const batch = db.batch();

musics.forEach(music => {
    const docRef = db.collection("musics").doc();
    batch.set(docRef, music);
});

batch.commit().then(() => {
    console.log("batch succeeded.");
}).catch((error) => {
    console.log("error batch", error);
});