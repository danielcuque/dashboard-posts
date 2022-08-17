import { format, parseISO } from "date-fns";
import { FormEvent, useState } from "react";
import { useDashboard } from "../../hooks/useDashboard";
import { useForm } from "../../hooks/useForm";
import { SectionCreation } from "../components/SectionCreation";
import { ComponentCreatorProvider } from "../context";
import { useComponentCreator } from '../../hooks/useComponentCreator';
import { componente } from '../../interfaces/components';

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

  const { uid } = useDashboard();

  const { componentsPost } = useComponentCreator();

  const { onInputChange, titulo, descripcion, imagen } =
    useForm<FormState>(formInitialState);

  const [date, setDate] = useState(format(new Date(), "yyyy-MM-dd'T'HH:mm"));

  const onDateChange = (e: FormEvent<HTMLInputElement>) => {
    setDate(e.currentTarget.value);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const data = {
      titulo,
      descripcion,
      imagen,
      fecha: parseISO(date),
      secciones: componentsPost.map((componente) => componente.id)
    }

    console.log(uid);
    console.log(data);
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


        </form>
        <SectionCreation />
      </section>
    </>
  );
};
