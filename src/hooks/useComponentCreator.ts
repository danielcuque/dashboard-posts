import { useContext } from 'react';
import { ComponentCreatorContext } from '../dashboardApp/context/ComponentCreatorContext';

export const useComponentCreator = () => {
    const state = useContext(ComponentCreatorContext);

    return {
        ...state
    }
}