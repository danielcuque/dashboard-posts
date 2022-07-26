import { doc, getDoc } from "firebase/firestore";
import { FirebaseDB } from '../firebase/config';
import { usuario, informe, componente } from '../interfaces/components';

export const getReportByUser = async (uid: string) => {
    try {
        const userRef = doc(FirebaseDB, 'usuarios', uid)

        const userSnap = await getDoc(userRef);


        if (userSnap.exists()) {

            const { carnet, grupo, nombre, informes: arrayInformesRef } = userSnap.data() as usuario;

            const informes: informe[] = []

            arrayInformesRef.forEach(async (informeRef: any) => {
                const informeSnap = await getDoc(informeRef);
                const { fecha, imagen, secciones: arrayComponentesRef } = informeSnap.data() as informe

                const secciones: componente[] = []

                arrayComponentesRef.forEach(async (componenteRef: any) => {
                    const componenteSnap = await getDoc(componenteRef);

                    secciones.push(componenteSnap.data() as componente)
                })

                informes.push({
                    fecha,
                    imagen,
                    secciones
                })
            });

            const data = {
                carnet,
                grupo,
                nombre,
                informes
            }

            console.log(data)

        }


    } catch (error) {
        console.log(error);
    }
}