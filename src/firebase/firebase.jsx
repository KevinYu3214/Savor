import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {
  getFirestore, collection
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCkNXBEFLJz0k7-ziRid0q7txTueFvZvVY",
  authDomain: "savor-wheaton.firebaseapp.com",
  projectId: "savor-wheaton",
  storageBucket: "savor-wheaton.appspot.com",
  messagingSenderId: "585056215654",
  appId: "1:585056215654:web:4f7536830547d0ff5143a7",
};

// init firebase app
const app = initializeApp(firebaseConfig);

// init firebase analytics
const analytics = getAnalytics(app);

// init firebase auth
const auth = getAuth(app);

// init service
const db = getFirestore(app);

// collection reference
const colRef = collection(db, "Song")

export { app, analytics, auth, db, colRef };