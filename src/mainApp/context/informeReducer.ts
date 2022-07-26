import { InformeState } from './';

type UIActionType =
    | {
        type: 'Informe-Set-Active-informe'
    }



export const informeReducer = (state: InformeState, action: UIActionType): InformeState => {
    switch (action.type) {
        case 'Informe-Set-Active-informe':
            return {
                ...state,
            }

        default:
            return state;
    }
}