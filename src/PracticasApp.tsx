import { AppRouter } from './routers/AppRouter';
import { useEffect } from 'react';
import { getPostComponents } from './utils/getPostComponents';


export const PracticasApp = () => {


    // ! Espacio para pruebas de funciones

    // useEffect(() => {
    //     getPostComponents();
    // }, [])


    return (
        <AppRouter />
    )
}
