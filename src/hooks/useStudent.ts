import { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { usuario } from "../interfaces/components";
import { InformeContext } from '../mainApp/context';
import { getReportByUser } from "../utils/getReportByUser";

export const useStudent = () => {

    const { setInformes, setInformeActivo, setUsuarioActivo, usuarioActivo, informes, informeActivo } = useContext(InformeContext);
    const { nombre } = useParams();
    const navigate = useNavigate();
    const [isInformesLoaded, setisInformesLoaded] = useState(false)

    useEffect(() => {

        setisInformesLoaded(false)

        switch (nombre) {
            case 'damian':
                fetchData('bvDbcrrrcygJ6sBhW0IJmq14Elr1');
                break;

            case 'daniel':
                fetchData('TqLZBY3cFWb6t0Z20zNjfL5JUcB3');
                break;

            default:
                navigate('/');
                break;
        }

    }, [nombre])

    const fetchData = async (id: string) => {
        const data = await getReportByUser(id) as usuario;
        setUsuarioActivo(data);
        setInformes(data.informes);
        setisInformesLoaded(true)

    }

    return {
        setInformes,
        setUsuarioActivo,
        usuarioActivo,
        informes,
        informeActivo,
        setInformeActivo,
        isInformesLoaded
    }
}