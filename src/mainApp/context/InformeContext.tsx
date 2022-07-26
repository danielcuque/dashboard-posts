import { createContext } from 'react';
import { informe, usuario } from '../../interfaces/components';

interface ContextProps {
    informes: informe[],
    informeActivo: informe | null,
    usuarioActivo: usuario | null,

    //* Funciones
    setInformes: (informes: informe[]) => void,
    setInformeActivo: (informe: informe) => void,
    setUsuarioActivo: (usuario: usuario) => void
}

export const InformeContext = createContext({} as ContextProps);