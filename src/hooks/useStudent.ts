import { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { usuario } from "../interfaces/components";
import { InformeContext } from '../mainApp/context';
import { damianStyles } from '../theme/damianTheme';
import { danielStyles } from '../theme/danielTheme';
import { joseStyles } from '../theme/joseTheme';
import { getReportByUser } from "../utils/getReportByUser";

export const useStudent = () => {

    const { setInformes, setInformeActivo, setUsuarioActivo, usuarioActivo, informes, informeActivo, setTheme, theme } = useContext(InformeContext);
    const { nombre } = useParams();
    const navigate = useNavigate();
    const [isInformesLoaded, setisInformesLoaded] = useState(false)

    useEffect(() => {

        setisInformesLoaded(false)

        switch (nombre) {
            case 'damian':
                console.log('Seteo el theme damian')
                setTheme(damianStyles)
                fetchData('bvDbcrrrcygJ6sBhW0IJmq14Elr1');
                break;

            case 'daniel':
                console.log('Seteo el theme daniel')
                setTheme(danielStyles)
                fetchData('TqLZBY3cFWb6t0Z20zNjfL5JUcB3');
                break;

            case 'jose':
                console.log('Seteo el theme jose')
                setTheme(joseStyles)
                fetchData('VCCQkPe65yM6xNfGKtjEgq9zKSW2');
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
        isInformesLoaded,
        theme
    }
}