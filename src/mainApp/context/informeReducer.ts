import { informe, usuario } from '../../interfaces/components';
import { Theme } from '../../interfaces/themes';
import { InformeState } from './';

type UIActionType =
    | {
        type: 'set-informe-activo',
        payload: informe
    }
    | {
        type: 'set-informes'
        payload: informe[]
    }
    | {
        type: 'set-usuario-activo',
        payload: usuario
    }
    | {
        type: 'set-theme',
        payload: Theme
    }



export const informeReducer = (state: InformeState, action: UIActionType): InformeState => {
    switch (action.type) {
        case 'set-informe-activo':
            return {
                ...state,
                informeActivo: action.payload
            }

        case 'set-informes':
            return {
                ...state,
                informes: action.payload
            }

        case 'set-usuario-activo':
            return {
                ...state,
                usuarioActivo: action.payload
            }

        case 'set-theme':
            return {
                ...state,
                theme: action.payload
            }
        default:
            return state;
    }
}