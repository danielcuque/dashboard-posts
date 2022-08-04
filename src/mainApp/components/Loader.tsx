import { BiLoaderAlt } from 'react-icons/bi'
import { useContext } from 'react';
import { InformeContext } from '../context/InformeContext';

export const Loader = () => {

    const { theme } = useContext(InformeContext);

    return (
        <div className='fixed top-0 left-0 z-50 w-screen h-screen flex justify-center items-center'
            style={theme.loader} >
            <BiLoaderAlt size={90} className="transition duration-150 ease-in-out animate-spin " />
        </div>
    )
}
