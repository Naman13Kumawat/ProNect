import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase-config";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({})
  
  const register = async () => {
    try {
      setUser(await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      ));
      onAuthStateChanged(auth, (currentUser)=>{
         setUser(currentUser);
      })
    } catch (error) {
      console.log(error.message);
    }
  };
  const login = async () => {
    try {
      setUser(await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      ));
      onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser);
     })
    } catch (error) {
      console.log(error.message);
    }
  };
  const logout = async () => {
    await signOut(auth);
    setUser({});
  };

  return (
    <AuthContext.Provider
      value={{
        registerEmail,
        setRegisterEmail,
        registerPassword,
        setRegisterPassword,
        loginEmail,
        setLoginEmail,
        loginPassword,
        setLoginPassword,
        register,
        login,
        logout,
        user
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
