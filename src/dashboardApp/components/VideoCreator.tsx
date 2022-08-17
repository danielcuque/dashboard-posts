import { FormEvent, useState } from "react";
import Swal from "sweetalert2";
import { useComponentCreator } from "../../hooks/useComponentCreator";
import { useForm } from "../../hooks/useForm";
import { video } from "../../interfaces/components";
import { createComponent } from "../../utils/createComponent";

const formInitialState = {
  titulo: "",
  url: "",
};

type FormState = {
  titulo: string;
  url: string;
};

export const VideoCreator = () => {
  const { refreshLibrary } = useComponentCreator();
  const initialMode = false;
  const [isFormOpen, setIsFormOpen] = useState(initialMode);

  const toogleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const { onInputChange, onResetForm, titulo, url } =
    useForm<FormState>(formInitialState);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const newComponent: video = {
      tipo: "video",
      titulo: titulo,
      url: url,
    };
    const resp = await createComponent("videos", newComponent);
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
          Añadir Video
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
              value={titulo}
              name="titulo"
              placeholder="Título del video"
              autoComplete="off"
            />
            <input
              type="text"
              onChange={onInputChange}
              name="url"
              value={url}
              placeholder="URL del video"
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
