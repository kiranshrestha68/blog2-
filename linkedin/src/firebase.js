// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBiL3vgB7n9sGYKGOLgBNpgDK8_-f_nmNI",
  authDomain: "linkedin-clone-7dcfc.firebaseapp.com",
  projectId: "linkedin-clone-7dcfc",
  storageBucket: "linkedin-clone-7dcfc.appspot.com",
  messagingSenderId: "739265492533",
  appId: "1:739265492533:web:419f9eb8462fcc7449a37c",
  measurementId: "G-QG3Q5VL98V",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
