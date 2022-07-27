import { BiLoaderAlt } from 'react-icons/bi'

export const Loader = () => {
    return (
        <div className='fixed top-0 left-0 w-screen h-screen bg-blue-100 flex justify-center items-center'>
            <BiLoaderAlt size={90} className="transition duration-150 ease-in-out animate-spin " />
        </div>
    )
}
