import React, { FC } from 'react'
import { componente } from '../../../interfaces/components';
import { DocumentEmbeded, UrlEmbeded, VideoEmbeded } from '../../../mainApp/components/embededComponents';
import { ParagraphPost } from '../../../mainApp/components/ParagraphPost';

interface ComponentLibraryProps {
    componentes: componente[]
}

export const ComponentLibrary: FC<ComponentLibraryProps> = ({ componentes }) => {

    console.log(componentes)


    return (
        <div className="col-start-3 p-5">
            <h2 className="font-bold text-2xl text-center ">
                Librería de componentes
            </h2>
            <div className='flex flex-col justify-center items-center'>
                {
                    componentes.map((componente, index) => {

                        switch (componente.tipo) {
                            case 'documento':
                                return (
                                    <div className='border border-gray-600 my-3 rounded-lg p-2'>
                                        <DocumentEmbeded key={index} nameDocument={componente.nombre} urlDocument={componente.url} />
                                        <button className='buttons-crud w-full mt-2 '>
                                            Añadir al post
                                        </button>
                                    </div>
                                )

                            case 'enlace':
                                return (
                                    <div className='border border-gray-600 my-3 rounded-lg p-2'>
                                        <UrlEmbeded key={index} nameUrl={componente.nombre} url={componente.url} />
                                        <button className='buttons-crud w-full mt-2 '>
                                            Añadir al post
                                        </button>
                                    </div>
                                )

                            case 'parrafo':
                                return (
                                    <div className='border border-gray-600 my-3 rounded-lg p-2'>

                                        <ParagraphPost key={index} textContent={componente.texto} />
                                        <button className='buttons-crud w-full mt-2 '>
                                            Añadir al post
                                        </button>
                                    </div>
                                )

                            case 'video':
                                console.log(componente.url)
                                return (
                                    <div className='border border-gray-600 my-3 rounded-lg p-2-3'>
                                        <VideoEmbeded key={index} titleVideo={componente.titulo} urlVideo={componente.url} />
                                        <button className='buttons-crud w-full mt-2 '>
                                            Añadir al post
                                        </button>
                                    </div>
                                )
                        }

                    })
                }
            </div>
        </div>
    )
}
