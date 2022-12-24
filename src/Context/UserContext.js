import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.init';
import  {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithCredential, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'


export const AuthContext = createContext()

const UserContext = ({children}) => {
    const [user, setUser]= useState(null)
    const auth = getAuth(app)

    const googleLogIn = (provider)=>{
        return signInWithPopup(auth, provider)
    }

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userSignIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const UserLogOut =()=>{
        return signOut(auth)
    }
    const authInfo={user, googleLogIn, createUser, userSignIn , UserLogOut, setUser }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
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