import { addDoc, collection, doc, getDoc, setDoc, Timestamp } from 'firebase/firestore';
import { FirebaseDB } from '../firebase/config';
import { usuario } from '../interfaces/components';

interface Informe {
    descripcion: string;
    fecha: Timestamp;
    imagen: string;
    componentes: Componente[];
    titulo: string
}

interface Componente {
    id: string;
    tipo: string;
}

export const createPostFirebase = async (uid: string, informe: Informe) => {

    try {
        // * Referencias de los componentes
        const componentesRef = informe.componentes.map((componente) => {
            return doc(FirebaseDB, `${componente.tipo}s`, componente.id);
        })

        // * Crear el informe

        const informeRef = await addDoc(collection(FirebaseDB, 'informes'), {
            fecha: informe.fecha,
            imagen: informe.imagen,
            categorias: [informe.descripcion],
            titulo: informe.titulo,
            secciones: componentesRef
        });




        // * Referencia al usuario
        const userRef = doc(FirebaseDB, 'usuarios', uid);

        // * Referencia a informes anteriores

        const userSnap = await getDoc(userRef);
        const { informes: prevInformesRef } = userSnap.data() as usuario;

        setDoc(userRef, { informes: [...prevInformesRef, informeRef] }, { merge: true })

        return {
            ok: true
        }

    } catch (error) {
        console.log(error)
        return {
            ok: false
        }
    }


}