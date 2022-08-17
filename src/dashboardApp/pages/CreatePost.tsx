import { format, parseISO } from "date-fns";
import { FormEvent, useState } from "react";
import { useForm } from "../../hooks/useForm";
import {
  DocumentCreator,
  ParagraphCreator,
  UrlCreator,
  VideoCreator,
} from "../components";
import { PostPreview } from "../components/PostPreview";

const formInitialState = {
  titulo: "",
  descripcion: "",
  imagen: "",
};

type FormState = {
  titulo: string;
  descripcion: string;
  imagen: string;
};

export const CreatePost = () => {
  const { onInputChange, titulo, descripcion, imagen } =
    useForm<FormState>(formInitialState);

  const [date, setDate] = useState(format(new Date(), "yyyy-MM-dd'T'HH:mm"));

  const onDateChange = (e: FormEvent<HTMLInputElement>) => {
    setDate(e.currentTarget.value);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(parseISO(date));
  };

  return (
    <>
      <section className="p-10">
        <form action="" onSubmit={onSubmit}>
          {/* Titulo del post */}
          <div className="flex flex-row justify-between items-center mb-5">
            <h1 className="my-1 text-4xl font-bold">Create Post</h1>
            <button type="submit" className="buttons-crud">
              Crear Post
            </button>
          </div>
          <input
            type="text"
            name="titulo"
            // value={titulo}
            placeholder="Título del post"
            onChange={onInputChange}
            value={titulo}
          />
          <input
            type="datetime-local"
            name="fecha"
            value={date}
            id=""
            onChange={onDateChange}
          />

          {/* Componentes del cuerpo del post */}
          <input
            placeholder="Descripción"
            type="text"
            name="descripcion"
            onChange={onInputChange}
            value={descripcion}
          />
          <input
            placeholder="URL de la imagen"
            type="text"
            name="imagen"
            onChange={onInputChange}
            value={imagen}
          />

          {/* Contenedor de componentes dinámicos */}
          <h1 className="mt-8 mb-5 text-2xl font-bold">Secciones</h1>
          <div className="grid grid-cols-3 rounded-sm border border-neutral-300 divide-x divide-neutral-300">
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
            <div className="col-start-2 p-5">
              <PostPreview />
            </div>
            <div className="col-start-3 p-5">
              <h2 className="font-bold text-2xl text-center ">
                Librería de componentes
              </h2>
              <p>aksjdk</p>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};
