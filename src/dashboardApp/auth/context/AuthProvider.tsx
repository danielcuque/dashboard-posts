import { FC, ReactNode, useReducer } from 'react';
import { AuthContext, AuthReducer } from './';
import { UserInfo } from './';

export interface AuthState {
    status: "checking" | "not-authenticated" | "authenticated";
    uid: string | null;
    email: string | null;
    displayName: string | null;
    photoURL: string | null;
    errorMsg: string | null;

}



interface AuthProviderProps {
    children: ReactNode
}
const Auth_INITIAL_STATE: AuthState = {
    status: "not-authenticated",
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMsg: null
}



export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {

    const [state, dispatch] = useReducer(AuthReducer, Auth_INITIAL_STATE)

    const login = (userInfo: UserInfo) => {
        dispatch({
            type: 'Auth-login',
            payload: userInfo
        })
    }

    const logout = (errorMsg: string | null) => {
        dispatch({
            type: 'Auth-logout',
            payload: errorMsg
        })
    }

    const checkingCredentials = () => {
        dispatch({
            type: 'Auth-checking-credentials'
        })
    }

    return (
        < AuthContext.Provider value={{
            ...state,
            login,
            logout,
            checkingCredentials
        }}>
            {children}
        </ AuthContext.Provider>
    )
}