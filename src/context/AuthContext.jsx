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
  const [loader, setLoader] = useState(true);
  const provider = new GoogleAuthProvider();

  const handleSignInGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  const handleRegisterUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleSignInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // handle on auth state changed
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubcribe();
    };
  }, []);

  const handleUpdateUser = (updatedData)=>{
    return updateProfile(auth.currentUser, updatedData);
  }


  const dataInfo = {
    user,
    loader,
    setLoader,
    handleRegisterUser,
    handleSignInUser,
    handleSignInGoogle,
    handleUpdateUser,
  };

  return (
    <UserContext.Provider value={dataInfo}>{children}</UserContext.Provider>
  );
};

export default AuthContext;
