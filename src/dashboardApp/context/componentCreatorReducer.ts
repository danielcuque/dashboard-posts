import { ComponentCreatorState } from './';
import { componente } from '../../interfaces/components';

type ComponentCreatorActionType =
    | {
        type: 'ComponentCreator-refresh-library',
        payload: componente[]
    }
    | {
        type: 'ComponentCreator-add-to-post'
        payload: componente
    }
    | {
        type: 'ComponentCreator-remove-from-post'
        payload: componente
    }
    | {
        type: 'ComponentCreator-clear-preview',
    }


export const componentCreatorReducer = (state: ComponentCreatorState, action: ComponentCreatorActionType): ComponentCreatorState => {
    switch (action.type) {
        case 'ComponentCreator-refresh-library':
            return {
                ...state,
                componentsLibrary: action.payload
            }

        case 'ComponentCreator-add-to-post':
            return {
                ...state,
                componentsPost: [...state.componentsPost, action.payload]
            }

        case 'ComponentCreator-remove-from-post':
            return {
                ...state,
                componentsPost: state.componentsPost.filter((prevComp) => prevComp.id !== action.payload.id)
            }

        case 'ComponentCreator-clear-preview':
            return {
                ...state,
                componentsPost: []
            }

        default:
            return state;
    }
}