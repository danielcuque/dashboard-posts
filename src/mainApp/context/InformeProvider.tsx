import { FC, ReactNode, useReducer } from 'react';
import { informe, usuario } from '../../interfaces/components';
import { InformeContext, informeReducer } from './';

export interface InformeState {
    informes: informe[],
    informeActivo: informe | null,
    usuarioActivo: usuario | null,
}

interface InformeProviderProps {
    children: ReactNode
}
const Informe_INITIAL_STATE: InformeState = {
    informes: [],
    informeActivo: null,
    usuarioActivo: null
}



export const InformeProvider: FC<InformeProviderProps> = ({ children }) => {

    const [state, dispatch] = useReducer(informeReducer, Informe_INITIAL_STATE)

    const setInformeActivo = (informe: informe) => {
        dispatch({
            type: 'set-informe-activo',
            payload: informe
        })
    }

    const setInformes = (informes: informe[]) => {
        dispatch({
            type: 'set-informes',
            payload: informes
        })
    }

    const setUsuarioActivo = (usuario: usuario) => {
        dispatch({
            type: 'set-usuario-activo',
            payload: usuario
        })
    }

    return (
        <InformeContext.Provider value={{
            ...state,


            // * funciones
            setInformeActivo,
            setInformes,
            setUsuarioActivo

        }}>
            {children}
        </ InformeContext.Provider>
    )
}