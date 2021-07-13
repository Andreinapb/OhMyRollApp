import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyDq-AFVJh_kRVS8hW5HRZXu-GKF0fe3fN4",
    authDomain: "ohmyroll-ap.firebaseapp.com",
    projectId: "ohmyroll-ap",
    storageBucket: "ohmyroll-ap.appspot.com",
    messagingSenderId: "665924447889",
    appId: "1:665924447889:web:8b1991f4ba11d431c25930",
    measurementId: "G-C2SX8WQCY3"
});

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}