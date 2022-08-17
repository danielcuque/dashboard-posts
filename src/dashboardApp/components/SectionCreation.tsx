import {
    DocumentCreator,
    ParagraphCreator,
    UrlCreator,
    VideoCreator,
} from "../components";
import { PostPreview } from "../components/PostPreview";


export const SectionCreation = () => {
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
                    <PostPreview />
                </div>

                {/* Libreria */}

                <div className="col-start-3 p-5">
                    <h2 className="font-bold text-2xl text-center ">
                        Librería de componentes
                    </h2>
                    <p>aksjdk</p>
                </div>
            </div>
        </>
    )
}
