import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// TODO: Comprobar que en desarrollo y produccion funcionen bien las variables
const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_APPID,
    measurementId: import.meta.env.VITE_MEASUREMENTID
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);

