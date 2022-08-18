import { collectionGroup, getDocs, query } from "firebase/firestore"
import { FirebaseDB } from '../firebase/config';
import { componente } from "../interfaces/components";

export const getPostComponents = async () => {

    // * Traer todos los tipos de componentes guardados


    // * documentos
    const documentosQuery = query(collectionGroup(FirebaseDB, 'documentos'));
    const documentosSnaps = getDocs(documentosQuery);

    // * enlaces
    const enlacesQuery = query(collectionGroup(FirebaseDB, 'enlaces'));
    const enlacesSnaps = getDocs(enlacesQuery);

    // * parrafos
    const parrafosQuery = query(collectionGroup(FirebaseDB, 'parrafos'));
    const parrafosSnaps = getDocs(parrafosQuery);

    // * videos
    const videosQuery = query(collectionGroup(FirebaseDB, 'videos'));
    const videosSnaps = getDocs(videosQuery);

    const snapsPromises = await Promise.all([documentosSnaps, enlacesSnaps, parrafosSnaps, videosSnaps])

    let data: componente[] = [];

    snapsPromises.forEach((snaps) => {
        snaps.docs.forEach((componentSnap) => {
            const registerComponent = { id: componentSnap.id, ...componentSnap.data() } as componente;
            data.push(registerComponent);
        })
    })

    return data;

}