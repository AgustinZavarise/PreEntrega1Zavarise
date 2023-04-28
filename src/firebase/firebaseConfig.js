
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCX30eB5dBFIwRwsK-10sLNpCNFtDI7q7w",
  authDomain: "proyectofinalagustinzav.firebaseapp.com",
  projectId: "proyectofinalagustinzav",
  storageBucket: "proyectofinalagustinzav.appspot.com",
  messagingSenderId: "892289391890",
  appId: "1:892289391890:web:2763c812b3a6b1250fa7cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db= getFirestore (app);