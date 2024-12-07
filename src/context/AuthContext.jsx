import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
export const UserContext = createContext();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();
  const [loading, setLoading] = useState(true);

  const handleSignInGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, provider);
  };

  const handleRegisterUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleSignInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  // handle on auth state changed
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false)
      } else {
        setUser(null);
        setLoading(false)
      }
    });
    return () => {
      unsubcribe();
    };
  }, []);

  const handleUpdateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  const [resetmail, setResetMail] = useState("");
  const handleReset = (email) => {
    const resetEmail = email.current.value;
    setResetMail(resetEmail);
  };

  const dataInfo = {
    user,
    setUser,
    handleRegisterUser,
    handleSignInUser,
    handleSignInGoogle,
    handleUpdateUser,
    handleReset,
    resetmail,
    loading,
    setLoading,
  };

  return (
    <UserContext.Provider value={dataInfo}>{children}</UserContext.Provider>
  );
};

export default AuthContext;
