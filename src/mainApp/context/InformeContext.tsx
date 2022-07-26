import { createContext } from 'react';
import { informe } from '../../interfaces/components';

interface ContextProps {
    informes: informe[],
    informeActivo: informe | null,
    // Funciones
}

export const InformeContext = createContext({} as ContextProps);