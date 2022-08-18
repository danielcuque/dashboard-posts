import { createContext } from 'react';

export interface UserInfo {
    uid: string | null;
    email: string | null;
    displayName: string | null;
    photoURL: string | null;
    errorMsg: string | null;
}

interface ContextProps {
    status: "checking" | "not-authenticated" | "authenticated";
    uid: string | null;
    email: string | null;
    displayName: string | null;
    photoURL: string | null;
    errorMsg: string | null;
    login: (userInfo: UserInfo) => void;
    logout: (errorMsg: string | null) => void;
    checkingCredentials: () => void;
}

export const AuthContext = createContext({} as ContextProps);
