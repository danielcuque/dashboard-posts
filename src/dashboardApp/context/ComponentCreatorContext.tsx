import { createContext } from 'react';
import { componente } from '../../interfaces/components';

interface ContextProps {
    componentsLibrary: componente[],
    componentsPost: componente[],
    refreshLibrary: () => Promise<void>,
    addToPost: (component: componente) => void,
    removeFromPost: (component: componente) => void,
    clearPreview: () => void

}

export const ComponentCreatorContext = createContext({} as ContextProps);