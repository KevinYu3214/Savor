// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCkNXBEFLJz0k7-ziRid0q7txTueFvZvVY",
    authDomain: "savor-wheaton.firebaseapp.com",
    projectId: "savor-wheaton",
    storageBucket: "savor-wheaton.appspot.com",
    messagingSenderId: "585056215654",
    appId: "1:585056215654:web:4f7536830547d0ff5143a7",
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics
const analytics = getAnalytics(app);

// Initialize Firebase Auth
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { app, analytics, auth, db, googleProvider };
