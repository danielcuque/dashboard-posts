import { onAuthStateChanged } from 'firebase/auth';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../dashboardApp/auth/context';
import { FirebaseAuth } from '../firebase';

export const useCheckAuth = () => {
    const state = useContext(AuthContext);
    const { logout, login, status } = state;

    useEffect(() => {
        // ? Esto no se muy bien donde deberia
        onAuthStateChanged(FirebaseAuth, async (user) => {
            if (!user) return logout();
            const { uid, email, displayName, photoURL } = user;
            login({ uid, email, displayName, photoURL });
        })

    }, [])

    return {
        // * State props
        status
    }
}