import React, { FC } from 'react'
import { componente } from '../../../interfaces/components';
import { DocumentEmbeded, UrlEmbeded, VideoEmbeded } from '../../../mainApp/components/embededComponents';
import { ParagraphPost } from '../../../mainApp/components/ParagraphPost';

interface ComponentLibraryProps {
    componentes: componente[];
    addFunction: (componente: componente) => void;
}

export const ComponentLibrary: FC<ComponentLibraryProps> = ({ componentes, addFunction }) => {

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
                                    <div className='border border-gray-600 my-3 rounded-lg p-2' key={index}>
                                        <DocumentEmbeded nameDocument={componente.nombre} urlDocument={componente.url} />
                                        <button className='buttons-crud w-full mt-2 ' onClick={() => addFunction(componente)}>
                                            Añadir al post
                                        </button>
                                    </div>
                                )

                            case 'enlace':
                                return (
                                    <div className='border border-gray-600 my-3 rounded-lg p-2' key={index}>
                                        <UrlEmbeded nameUrl={componente.nombre} url={componente.url} />
                                        <button className='buttons-crud w-full mt-2 ' onClick={() => addFunction(componente)}>
                                            Añadir al post
                                        </button>
                                    </div>
                                )

                            case 'parrafo':
                                return (
                                    <div className='border border-gray-600 my-3 rounded-lg p-2' key={index}
                                    >

                                        <ParagraphPost textContent={componente.texto} />
                                        <button className='buttons-crud w-full mt-2 ' onClick={() => addFunction(componente)}>
                                            Añadir al post
                                        </button>
                                    </div>
                                )

                            case 'video':
                                return (
                                    <div className='border border-gray-600 my-3 rounded-lg p-2-3' key={index}>
                                        <VideoEmbeded titleVideo={componente.titulo} urlVideo={componente.url} />
                                        <button className='buttons-crud w-full mt-2 ' onClick={() => addFunction(componente)}>
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
