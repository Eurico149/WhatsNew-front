import { auth } from "./firebaseConn.ts";

import {
    signInWithEmailAndPassword,
    signOut,
    signInWithPopup,
    GoogleAuthProvider,
    getAuth,
    GithubAuthProvider,
    setPersistence,
    browserLocalPersistence,
    browserSessionPersistence
} from "firebase/auth";


export const loginEmailPassword = async (email: string, password: string, rememberMe: boolean) => {
    try {
        const persistenceType = rememberMe ? browserLocalPersistence : browserSessionPersistence;
        await setPersistence(auth, persistenceType);

        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
}

export const loginWithGoogle = async (rememberMe: boolean) => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    try {
        const persistenceType = rememberMe ? browserLocalPersistence : browserSessionPersistence;
        await setPersistence(auth, persistenceType);

        const result = await signInWithPopup(auth, provider);
        return result.user;

    } catch (error) {
        console.error("Erro ao fazer login com Google:", error);
        throw error;
    }
};

export const loginWithGithub = async (rememberMe: boolean) => {
    const auth = getAuth();
    const provider = new GithubAuthProvider();

    try {
        const persistenceType = rememberMe ? browserLocalPersistence : browserSessionPersistence;
        await setPersistence(auth, persistenceType);

        const result = await signInWithPopup(auth, provider);
        return result.user;

    } catch (error) {
        console.error("Error logging in with GitHub:", error);
        throw error;
    }
}


export const logout = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error("Error signing out:", error);
        throw error;
    }
}
