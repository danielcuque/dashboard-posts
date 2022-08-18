import { FormEvent, useState } from "react";
import { createComponent } from "../../utils/createComponent";
import { parrafo } from "../../interfaces/components";
import { useForm } from "../../hooks/useForm";
import Swal from "sweetalert2";
import { useComponentCreator } from "../../hooks/useComponentCreator";

const formInitialState = {
  texto: "",
};

type FormState = {
  texto: string;
};

export const ParagraphCreator = () => {
  const { refreshLibrary } = useComponentCreator();

  const initialMode = false;
  const [isFormOpen, setIsFormOpen] = useState(initialMode);

  const toogleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const { onInputChange, onResetForm, texto } =
    useForm<FormState>(formInitialState);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const newComponent: parrafo = {
      tipo: "parrafo",
      subtitulo: "",
      texto: texto,
    };
    const resp = await createComponent("parrafos", newComponent);
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
          Añadir párrafo
        </button>
      </div>
      {isFormOpen ? (
        <>
          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-4 w-full justify-center"
          >
            <textarea
              onChange={onInputChange}
              name="texto"
              value={texto}
              placeholder="Ingrese una descripción"
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
