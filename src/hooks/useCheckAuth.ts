import { onAuthStateChanged } from 'firebase/auth';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../dashboardApp/auth/context';
import { FirebaseAuth } from '../firebase';

export const useCheckAuth = () => {
    const state = useContext(AuthContext);
    const { logout, login, status } = state;

    useEffect(() => {
        onAuthStateChanged(FirebaseAuth, async (user) => {
            if (!user) return logout(null);
            const { uid, email, displayName, photoURL } = user;
            login({ uid, email, displayName, photoURL, errorMsg: null });
        })

    }, [])

    return {
        // * State props
        status
    }
}