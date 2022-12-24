import React, { createContext, useState } from 'react';
import app from '../Firebase/Firebase.init';
import  {createUserWithEmailAndPassword, getAuth, signInWithCredential, signInWithPopup } from 'firebase/auth'


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
    const authInfo={user, googleLogIn, createUser}
  
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default UserContext;