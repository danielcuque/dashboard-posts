import { useEffect } from 'react';
import { AppRouter } from './routers/AppRouter';
import { getReportByUser } from './utils/getReportByUser';


export const PracticasApp = () => {

    // TODO: REMOVER, solo para pruebas de firebase
    useEffect(() => {
        getReportByUser('bvDbcrrrcygJ6sBhW0IJmq14Elr1');
    }, [])


    return (
        <AppRouter />
    )
}
