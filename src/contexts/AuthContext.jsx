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
import { doc, setDoc } from "firebase/firestore";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      // Add user to Firestore collection after sign up
      const { user } = userCredential;
      return setDoc(doc(db, "users", user.uid), {
        email: user.email,
        // Add any additional user data you want to store here
      });
    });
  }
  function loginWithGoogle() {
    return signInWithPopup(auth, googleProvider).then((result) => {
      // The signed-in user info.
      const user = result.user;
      // Add user to Firestore collection after sign in with Google
      return setDoc(doc(db, "User", user.uid), {
        email: user.email,
        // Add any additional user data you want to store here
      });
    });
  }
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
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
