import { format, parseISO } from "date-fns";
import { FormEvent, useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { useForm } from "../../hooks/useForm";

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
        <h1 className="mt-8 mb-5 text-4xl font-bold">Create Post</h1>
        <form action="" onSubmit={onSubmit}>
          {/* Titulo del post */}
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
          <h1 className="mt-8 mb-5 text-4xl font-bold">Secciones</h1>
          <div>
            <button>
              <AiFillPlusCircle />{" "}
            </button>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Crear Post
          </button>
        </form>
      </section>
    </>
  );
};
