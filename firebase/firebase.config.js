import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnkREs9p-B3YrLTSX-lW8_9JuWuCRmd54",
  authDomain: "horsing-around-7b878.firebaseapp.com",
  projectId: "horsing-around-7b878",
  storageBucket: "horsing-around-7b878.appspot.com",
  messagingSenderId: "246184910829",
  appId: "1:246184910829:web:4c9e09913fc5966344d1e4",
  measurementId: "G-DJMQ1CDQDS",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
