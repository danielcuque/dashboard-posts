import { FC, ReactNode, useReducer } from 'react';
import { informe } from '../../interfaces/components';
import { InformeContext, informeReducer } from './';

export interface InformeState {
    informes: informe[],
    informeActivo: informe | null,
}

interface InformeProviderProps {
    children: ReactNode
}
const Informe_INITIAL_STATE: InformeState = {
    informes: [],
    informeActivo: null
}



export const InformeProvider: FC<InformeProviderProps> = ({ children }) => {

    const [state, dispatch] = useReducer(informeReducer, Informe_INITIAL_STATE)

    return (
        <InformeContext.Provider value={{
            ...state
        }}>
            {children}
        </ InformeContext.Provider>
    )
}