// AuthProvider.jsx
import React, { useContext, useState, useEffect } from "react";
import { auth, db, googleProvider } from "../firebase/firebase";
import {signInWithPopup} from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

const AuthContext = React.createContext();
const localStorage = window.localStorage;

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  async function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      // Add user to Firestore collection after sign up
      const { user } = userCredential;
      return setDoc(doc(db, "User", user.uid), {
        email: user.email,
        // Add any additional user data you want to store here
      });
    });
  }
  async function loginWithGoogle() {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      // The signed-in user info.
      const user = result.user;
      
      // Check if user document already exists in Firestore
      const userDocRef = doc(db, "User", user.uid);
      const userDocSnap = await getDoc(userDocRef);
      
      if (!userDocSnap.exists()) {
        // User document doesn't exist, set new user document
        await setDoc(userDocRef, {
          email: user.email,
          // Add any additional user data you want to store here
        });
      }
  
      // Fetch user data from Firestore to ensure consistency
      const userData = userDocSnap.exists() ? userDocSnap.data() : null;
      return { user, userData };
    } catch (error) {
      console.error("Error signing in with Google:", error);
      throw error;
    }
  }
  
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    localStorage.clear();
    return signOut(auth);
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    loginWithGoogle,
    logout,
    resetPassword,
    signup,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
