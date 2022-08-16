import { useContext } from 'react';
import { AuthContext } from '../dashboardApp/auth/context';
import { loginWithEmailAndPassword, logoutFirebase } from '../firebase/provider';


interface credentials {
    email: string;
    password: string;
}

export const useAuth = () => {
    const state = useContext(AuthContext);
    const { logout, login, checkingCredentials, uid, displayName, email, photoURL, status, errorMsg } = state;

    const startLoginWithEmailAndPassword = async (cred: credentials) => {
        checkingCredentials();
        const { email: emailSended } = cred;
        const { ok, uid, photoURL, displayName, errorMsg } = await loginWithEmailAndPassword(cred);

        if (!ok) { return logout(errorMsg); }

        login({
            uid,
            displayName,
            email: emailSended,
            photoURL,
            errorMsg
        })
    }

    const startLogout = async () => {
        logout(null);
        logoutFirebase();
    }

    return {
        // * State props
        uid, displayName, email, photoURL, status, errorMsg,

        // * Methods
        startLoginWithEmailAndPassword, startLogout
    }
}