import { Navigate, useParams, useNavigate } from 'react-router-dom';
import { useStudent } from '../../hooks/useStudent';
import { useEffect } from 'react';
import { Loader } from './Loader';

export const PreloadData = () => {

    const { numero, nombre } = useParams();
    const { setInformeActivo, informes, informeActivo, isInformesLoaded } = useStudent();
    const navigate = useNavigate();

    console.log(numero)

    useEffect(() => {
        preloadInformeActivo()
    }, [isInformesLoaded])

    const preloadInformeActivo = () => {
        if (isInformesLoaded) {

            if (informes.length === 0) {
                navigate('/');
            }

            if (numero) {
                const n = parseInt(numero)
                if (n) {
                    if (n >= 1 && n <= informes.length) {
                        console.log('Seteando por parametro')
                        return setInformeActivo(informes[n - 1]);
                    }
                }
            }

            setInformeActivo(informes[0])
        }
    }


    if (informeActivo) {
        return (
            <Navigate to={`/estudiante/${nombre}/informes`} />
        )
    } else {
        return (<Loader />)
    }

}
