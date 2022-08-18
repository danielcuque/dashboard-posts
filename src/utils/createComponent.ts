import { addDoc, collection } from "firebase/firestore";
import { componente } from "../interfaces/components";
import { FirebaseDB } from '../firebase/config';

type componentCollections =
    | 'documentos'
    | 'enlaces'
    | 'parrafos'
    | 'videos';


export const createComponent = async (collectionName: componentCollections, component: componente) => {
    try {
        const docRef = await addDoc(collection(FirebaseDB, collectionName), component);

        return {
            ok: true,
            id: docRef.id
        }
    } catch (error) {
        return {
            ok: false,
            msg: 'Error en la creación del componente'
        }
    }
}