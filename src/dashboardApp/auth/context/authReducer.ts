import {
    AuthState
} from './';

import { UserInfo } from './';


type AuthActionType =
    | {
        type: 'Auth-login',
        payload: UserInfo
    }
    | {
        type: 'Auth-checking-credentials'
    }
    | {
        type: 'Auth-logout',
        payload: string | null
    }


export const AuthReducer = (state: AuthState, action: AuthActionType): AuthState => {
    switch (action.type) {
        case 'Auth-login':
            return {
                ...state,
                status: 'authenticated',
                uid: action.payload.uid,
                email: action.payload.email,
                displayName: action.payload.displayName,
                photoURL: action.payload.photoURL,
                errorMsg: action.payload.errorMsg
            }

        case 'Auth-logout':
            return {
                ...state,
                status: 'not-authenticated',
                uid: null,
                email: null,
                displayName: null,
                photoURL: null,
                errorMsg: action.payload
            }

        case 'Auth-checking-credentials':
            return {
                ...state,
                status: 'checking'
            }

        default:
            return state;
    }
}