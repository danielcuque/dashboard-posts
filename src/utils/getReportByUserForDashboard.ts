import { doc, getDoc } from "firebase/firestore";
import { FirebaseDB } from '../firebase/config';
import { usuario, informe, componente } from '../interfaces/components';

export const getReportByUserForDashboard = async (uid: string) => {
    try {
        const userRef = doc(FirebaseDB, 'usuarios', uid)

        const userSnap = await getDoc(userRef);

        // TODO : Traer el ID del post/informe

        if (userSnap.exists()) {

            const { carnet, grupo, nombre, informes: arrayInformesRef, imagen } = userSnap.data() as usuario;

            const informesPromises = arrayInformesRef.map(async (informeRef: any) => {
                const informeSnap = await getDoc(informeRef);

                const { fecha, imagen, secciones: arrayComponentesRef, titulo, categorias } = informeSnap.data() as informe


                const seccionesPromises = arrayComponentesRef?.map(async (componenteRef: any) => {
                    const componenteSnap = await getDoc(componenteRef);

                    return componenteSnap.data() as componente;
                })

                const secciones = await Promise.all(seccionesPromises);

                return {
                    id: informeSnap.id,
                    fecha,
                    imagen,
                    secciones,
                    titulo,
                    categorias,
                }
            });

            const informes: informe[] = await Promise.all(informesPromises)

            const data = {
                carnet,
                grupo,
                nombre,
                informes,
                imagen
            }

            return data;

        }


    } catch (error) {
        console.log(error);
    }
}