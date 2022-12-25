import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.init';
import  {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithCredential, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'


export const AuthContext = createContext()

const UserContext = ({children}) => {
    const [user, setUser]= useState(null)
    const [loading , setLoading]= useState(true)
  
    const auth = getAuth(app)

    const googleLogIn = (provider)=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userSignIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const UserLogOut =()=>{
        setLoading(true)
        return signOut(auth)
    }
    const authInfo={user, loading,  googleLogIn, createUser, userSignIn , UserLogOut, setUser }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        });
        return ()=>{
            unSubscribe()
        }
    },[])
  
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default UserContext;