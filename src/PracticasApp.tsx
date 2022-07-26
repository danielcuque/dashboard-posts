import { useEffect } from 'react';
import { StudentIndexPage } from './mainApp/pages/StudentIndexPage';
import { AppRouter } from './routers/AppRouter';
import { getReportByUser } from './utils/getReportByUser';


export const PracticasApp = () => {

    useEffect(() => {
        getReportByUser('bvDbcrrrcygJ6sBhW0IJmq14Elr1');
    }, [])


    return (
        <AppRouter />
    )
}
