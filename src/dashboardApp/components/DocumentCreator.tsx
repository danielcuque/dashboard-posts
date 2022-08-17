import { IoIosRemoveCircleOutline } from "react-icons/io";
import { FormEvent, useState } from "react";

export const DocumentCreator = () => {
  const initialMode = false;
  const [isFormOpen, setIsFormOpen] = useState(initialMode);

  const toogleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const [documentUrl, setDocumentUrl] = useState("");

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setDocumentUrl(value);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(documentUrl);
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
              onChange={handleInputChange}
              name="documeto"
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
