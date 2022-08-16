import { signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseAuth } from './config';

interface credentials {
    email: string;
    password: string;
}

export const loginWithEmailAndPassword = async ({ email, password }: credentials) => {
    try {

        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const { photoURL, uid, displayName } = resp.user;

        return {
            ok: true,
            photoURL, uid, displayName, errorMsg: null
        }

    } catch (error) {
        return {
            ok: false,
            photoURL: null, uid: null, displayName: null, errorMsg: 'Credenciales Incorrectas'
        }
    }
}

export const logoutFirebase = async () => {
    return await FirebaseAuth.signOut();
}