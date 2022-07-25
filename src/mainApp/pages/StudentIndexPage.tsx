
export const StudentIndexPage = () => {

    const NoCards = [1, 2, 3, 4, 5]

    return (
        <section className="min-h-screen flex flex-col">
            <article className="mb-6 ">
                <img
                    src="https://portal.ingenieria.usac.edu.gt/images/logo_facultad/fiusac_negro.png"
                    alt="Logo Usac"
                    className="w-4/5 mx-auto md:w-1/2 2xl:w-1/3 mt-4"
                />
            </article>


            <article className="w-full my-6 px-6 flex justify-start md:justify-center gap-x-7">
                <div className="flex justify-center items-center">
                    <img
                        src="https://res.cloudinary.com/denor5mso/image/upload/v1657944971/Porfolio/varios/ogimage_hokrsa.png"
                        alt="LOGO USAC"
                        className="w-12 h-12 md:w-20 md:h-20 rounded-full"
                    />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="w-full text-xl text-left font-bold">Damian Ignacio Peña Afre</h1>
                    <h2 className="w-full text-lg text-gray-600">Grupo X</h2>
                    <h3 className="w-full text-lg text-gray-600"> Carnet: 202110568</h3>
                </div>
            </article>
            <hr className="border mb-6 mx-5" />


            {/* CARDS */}

            <section className="flex flex-col md:flex-row md:flex-wrap">

                {
                    NoCards.map(() => (
                        <>
                            <article className="w-11/12 border md:w-1/3 flex justify-around mt-6 mx-auto hover:shadow-md cursor-pointer rounded-sm">
                                <div className="mt-2 p-2 w-2/3">
                                    <h3 className="text-sm font-medium text-gray-400">Jul 24</h3>
                                    <h2 className="font-bold text-lg">Practica 1</h2>
                                    {/* Badged */}
                                    <div className="my-4 flex flex-wrap gap-y-3 gap-x-2 justify-start ">
                                        <span className="bg-gray-200 px-3 py-[1px] text-[10px] md:text-[12px]  rounded-2xl">Mantenimento preventivo</span>
                                        <span className="bg-gray-200 px-3 py-[1px] text-[10px] md:text-[12px] rounded-2xl">Linux</span>
                                        <span className="bg-gray-200 px-3 py-[1px] text-[10px] md:text-[12px] rounded-2xl">Repollo</span>
                                    </div>
                                </div>
                                <div className="flex justify-center w-1/3 items-center p-2">
                                    <img
                                        src="https://res.cloudinary.com/denor5mso/image/upload/v1657950739/Porfolio/varios/colas_ntvold.png"
                                        alt="LOGO USAC"
                                        className=" w-full h-auto rounded-lg"
                                    />
                                </div>
                            </article>
                            <hr className="my-4 mx-5" />
                        </>

                    ))
                }

            </section>

            <div className="my-6"></div>
        </section>
    )
}
