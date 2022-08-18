import { FormEvent, useState } from "react";
import Swal from "sweetalert2";
import { useComponentCreator } from "../../hooks/useComponentCreator";
import { useForm } from "../../hooks/useForm";
import { enlace } from "../../interfaces/components";
import { createComponent } from "../../utils/createComponent";

const formInitialStae = {
  nombre: "",
  url: "",
};

type FormState = {
  nombre: string;
  url: string;
};

export const UrlCreator = () => {
  const { refreshLibrary } = useComponentCreator();
  const initialMode = false;
  const [isFormOpen, setIsFormOpen] = useState(initialMode);

  const toogleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const { onInputChange, onResetForm, nombre, url } =
    useForm<FormState>(formInitialStae);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const newComponent: enlace = {
      tipo: "enlace",
      nombre: nombre,
      url: url,
    };
    const resp = await createComponent("enlaces", newComponent);
    if (resp.ok) {
      Swal.fire("¡Listo!", "Se ha creado el documento correctamente");
      onResetForm();
      refreshLibrary();
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full justify-center">
      <div className="flex w-full">
        <button
          onClick={toogleForm}
          className="buttons-crud w-full text-center"
        >
          Añadir Url
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
              placeholder="Nombre del enlace"
              autoComplete="off"
            />
            <input
              type="text"
              onChange={onInputChange}
              name="url"
              value={url}
              placeholder="URL del enlace"
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
