import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBcCy7CTbYROE3S_CZgD7T4LHYzi4As5Uo",
  authDomain: "workshop-adapti.firebaseapp.com",
  databaseURL: "https://workshop-adapti.firebaseio.com",
  projectId: "workshop-adapti",
  storageBucket: "workshop-adapti.appspot.com",
  messagingSenderId: "496528749930",
  appId: "1:496528749930:web:79b8226189dc0366a8e113",
  measurementId: "G-V4FQYLXYF0"
};


// Initialize Firebase
export const FirebaseInit = firebase.initializeApp(firebaseConfig);