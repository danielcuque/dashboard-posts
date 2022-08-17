import {
    DocumentCreator,
    ParagraphCreator,
    UrlCreator,
    VideoCreator,
} from "../components";
import { PostPreview } from "../components/PostPreview";
import { ComponentLibrary } from "./library/ComponentLibrary";
import { ComponentCreatorProvider } from '../context/ComponentCreatorProvider';
import { useComponentCreator } from '../../hooks/useComponentCreator';
import { useEffect } from 'react';


export const SectionCreation = () => {

    const { componentsLibrary, refreshLibrary, addToPost, componentsPost, removeFromPost } = useComponentCreator();

    useEffect(() => {
        refresh()
    }, [])

    const refresh = async () => {
        await refreshLibrary()
    }

    return (
        <>
            {/* Contenedor de componentes dinámicos */}
            <h1 className="mt-8 mb-5 text-2xl font-bold">Secciones</h1>
            <div className="grid grid-cols-3 rounded-sm border border-neutral-300 divide-x divide-neutral-300">

                {/* CREAR COMPONENTES */}
                {/* <button><AiFillPlusCircle />{" "}</button> */}
                <div className="col-start-1  p-5">
                    <h2 className="font-bold text-2xl text-center mb-5 ">
                        Crear componente
                    </h2>
                    <div className="flex flex-col justify-between gap-6">
                        <DocumentCreator />
                        <ParagraphCreator />
                        <UrlCreator />
                        <VideoCreator />
                    </div>
                </div>


                {/* Preview */}

                <div className="col-start-2 p-5">
                    <PostPreview componentes={componentsPost} removeFunction={removeFromPost} />
                </div>

                {/* Libreria */}

                <ComponentLibrary componentes={componentsLibrary} addFunction={addToPost} />
            </div>
        </>
    )
}
