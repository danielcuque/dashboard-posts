import { FC, ReactNode, useReducer } from 'react';
import { componente } from '../../interfaces/components';
import { ComponentCreatorContext, componentCreatorReducer } from './';
import { getPostComponents } from '../../utils/getPostComponents';

export interface ComponentCreatorState {
    componentsLibrary: componente[],
    componentsPost: componente[],
    refreshLibrary: boolean
}

interface ComponentCreatorProviderProps {
    children: ReactNode
}
const ComponentCreator_INITIAL_STATE: ComponentCreatorState = {
    componentsLibrary: [],
    componentsPost: [],
    refreshLibrary: false
}



export const ComponentCreatorProvider: FC<ComponentCreatorProviderProps> = ({ children }) => {

    const [state, dispatch] = useReducer(componentCreatorReducer, ComponentCreator_INITIAL_STATE)

    const refreshLibrary = async () => {
        const components = await getPostComponents();
        dispatch({
            type: 'ComponentCreator-refresh-library',
            payload: components
        })
    }

    const addToPost = (component: componente) => {
        dispatch({
            type: 'ComponentCreator-add-to-post',
            payload: component
        })
    }

    const removeFromPost = (component: componente) => {
        dispatch({
            type: 'ComponentCreator-remove-from-post',
            payload: component
        })
    }

    return (
        < ComponentCreatorContext.Provider value={{
            ...state,
            // * Methods
            refreshLibrary,
            addToPost,
            removeFromPost
        }}>
            {children}
        </ ComponentCreatorContext.Provider>
    )
}