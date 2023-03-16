import { getApps, initializeApp } from "firebase/app";
import "firebase/firestore";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";

const DEV_ENV = true;

const firebaseConfig = {
  apiKey: "AIzaSyCp0EnUurULfU2eaxTAIwdBMmVCZ8M50Is",
  authDomain: "resume-5aef9.firebaseapp.com",
  projectId: "resume-5aef9",
  storageBucket: "resume-5aef9.appspot.com",
  messagingSenderId: "956679095576",
  appId: "1:956679095576:web:94e9886a004ffe21900a6d",
  measurementId: "G-1TRKJ3HEXH",
};

// only inialize once
if (!getApps().length) {
  initializeApp(firebaseConfig);
}

export const db = getFirestore();
if (DEV_ENV) {
  connectFirestoreEmulator(db, "localhost", 8080);
}
