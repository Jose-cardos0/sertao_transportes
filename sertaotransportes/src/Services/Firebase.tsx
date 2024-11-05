import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4bnkrgFLhmsMnYnhSNMUFdjHnZxJOGPk",
  authDomain: "sertaotransportes-62db8.firebaseapp.com",
  projectId: "sertaotransportes-62db8",
  storageBucket: "sertaotransportes-62db8.firebasestorage.app",
  messagingSenderId: "1091169689844",
  appId: "1:1091169689844:web:83fe3253c3bb2db36dfea1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
