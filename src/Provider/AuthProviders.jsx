import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../Firebase/fitebase.config";



export const AuthContext = createContext(null)

export default function AuthProviders({ children }) {

    const auth = getAuth(app);

    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const LogOut = () => {
        return signOut(auth);
    }

    const SignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const onSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("user is definr", currentUser)
            setUser(currentUser)
        })
        return () => {
            onSubscribe();
        }
    }, [])



    const authInfo = {
        user,
        createUser,
        LogOut,
        SignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    )
}