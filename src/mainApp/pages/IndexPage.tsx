import { Link } from 'react-router-dom';

export const IndexPage = () => {

    return (

        <section className="min-h-screen flex flex-col">
            <article className="mb-6 ">
                <img
                    src="https://portal.ingenieria.usac.edu.gt/images/logo_facultad/fiusac_negro.png"
                    alt="Logo Usac"
                    className="w-4/5 mx-auto md:w-1/2 2xl:w-1/3 mt-4"
                />
            </article>

            <div className='pb-6 mt-4 border-b-2 '>
                <h1 className="text-4xl text-center font-bold">INDICE MIEMBROS</h1>

            </div>


            {/* Esto se podria construir dinamicamente haciendo una consulta a los usuarios  y sus ids, para luego quitar el switch en StudentPage.tsx */}
            <div className='flex flex-col md:flex-row items-center justify-around mt-9 '>

                <Link to="/estudiante/damian" className='w-4/5 md:w-2/5 shadow-md'>
                    <article className="w-full my-6 px-6 flex justify-start md:justify-center gap-x-7">
                        <div className="flex w-1/3 justify-center items-center">
                            <img
                                src="https://res.cloudinary.com/denor5mso/image/upload/v1657944971/Porfolio/varios/ogimage_hokrsa.png"
                                alt="Damian Peña"
                                className="w-12 h-12 md:w-20 md:h-20 rounded-full"
                            />
                        </div>
                        <div className="flex flex-col w-2/3 justify-center items-center">
                            <h1 className="w-full text-xl text-left font-bold">Damian Ignacio Peña Afre</h1>
                            <h2 className="w-full text-lg text-gray-600">Grupo 9</h2>
                            <h3 className="w-full text-lg text-gray-600"> Carné: 202110568</h3>
                        </div>
                    </article>
                </Link>

                <Link to="/estudiante/daniel" className='w-4/5 md:w-2/5 shadow-md'>
                    <article className="w-full my-6 px-6 flex justify-start md:justify-center gap-x-7">
                        <div className="flex w-1/3 justify-center items-center">
                            <img
                                src="https://avatars.githubusercontent.com/u/81493003?v=4"
                                alt="Daniel Cuque"
                                className="w-12 h-12 md:w-20 md:h-20 rounded-full"
                            />
                        </div>
                        <div className="flex flex-col w-2/3 justify-center items-center">
                            <h1 className="w-full text-xl text-left font-bold">Daniel Estuardo Cuque Ruiz</h1>
                            <h2 className="w-full text-lg text-gray-600">Grupo 9</h2>
                            <h3 className="w-full text-lg text-gray-600"> Carné: 202112145 </h3>
                        </div>
                    </article>
                </Link>

            </div>


        </section>
    )
}
