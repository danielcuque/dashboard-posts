import { useContext, useEffect } from 'react';
import { usuario } from '../interfaces/components';
import { InformeContext } from '../mainApp/context';
import { getReportByUserForDashboard } from '../utils/getReportByUserForDashboard';
import { useAuth } from './useAuth';

export const useDashboard = () => {
    const { uid } = useAuth();

    const { setInformes, informes } = useContext(InformeContext);

    const fetchData = async (id: string) => {
        const data = await getReportByUserForDashboard(id) as usuario;
        setInformes(data.informes);
    }

    useEffect(() => {
        if (uid) {
            fetchData(uid);
        }
    }, [uid])

    return {
        uid,
        informes
    }

}