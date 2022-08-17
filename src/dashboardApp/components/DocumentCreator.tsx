import { FormEvent, useState } from "react";
import { useForm } from "../../hooks/useForm";

const formInitialState = {
  nombre: "",
  url: "",
};

type FormState = {
  nombre: string;
  url: string;
};

export const DocumentCreator = () => {
  const initialMode = false;
  const [isFormOpen, setIsFormOpen] = useState(initialMode);

  const toogleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const { onInputChange, nombre, url } = useForm<FormState>(formInitialState);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(nombre, url);
  };

  return (
    <div className="flex flex-col gap-4 w-full justify-center">
      <div className="flex w-full">
        <button
          onClick={toogleForm}
          className="buttons-crud w-full text-center"
        >
          Añadir documento
        </button>
      </div>
      {isFormOpen ? (
        <>
          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-4 w-full justify-center"
          >
            <input
              type="text"
              onChange={onInputChange}
              name="nombre"
              value={nombre}
              placeholder="Nombre del documento"
              autoComplete="off"
            />
            <input
              type="text"
              onChange={onInputChange}
              name="url"
              value={url}
              placeholder="URL del documento"
              autoComplete="off"
            />
            <div className="flex justify-between">
              <button
                className="flex border border-red-400 py-2 px-4 text-red-500  rounded-sm"
                onClick={toogleForm}
              >
                Cancelar
              </button>
              <button className="buttons-crud">Guardar</button>
            </div>
          </form>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
