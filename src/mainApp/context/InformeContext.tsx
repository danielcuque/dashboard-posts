import { createContext } from 'react';
import { informe, usuario } from '../../interfaces/components';
import { Theme } from '../../interfaces/themes';

interface ContextProps {
    informes: informe[],
    informeActivo: informe | null,
    usuarioActivo: usuario | null,
    theme: Theme

    //* Funciones
    setInformes: (informes: informe[]) => void,
    setInformeActivo: (informe: informe) => void,
    setUsuarioActivo: (usuario: usuario) => void,
    setTheme: (theme: Theme) => void
}

export const InformeContext = createContext({} as ContextProps);