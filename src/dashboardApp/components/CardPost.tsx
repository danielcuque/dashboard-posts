import { BiTrash } from "react-icons/bi";
import { AiFillEdit } from "react-icons/ai";

export const CardPost = () => {
  return (
    <div className="w-full border flex p-5 justify-between mt-6 mx-auto hover:shadow-md rounded-md">
      {/* Contenedor de la información de la práctica */}
      <div className="mt-2 w-2/3 flex flex-row gap-3 items-center cursor-pointer">
        <figure>
          <img
            src="https://hardzone.es/app/uploads-hardzone.es/2020/05/Mantenimiento-PC.jpg"
            alt=""
            className="w-32 h-auto rounded-lg"
          />
        </figure>
        <div>
          {/* Fecha de publicación */}
          <h3 className="text-sm font-medium text-gray-400">Hace 18 días</h3>
          {/* Título del post*/}
          <h2 className="font-bold text-lg">Práctica 1</h2>

          <div className="my-4 flex flex-wrap gap-y-3 gap-x-2 justify-start ">
            <span className="bg-gray-200 px-3 py-[1px] text-[10px] md:text-[12px]  rounded-2xl">
              Mantenimiento
            </span>
          </div>
        </div>
      </div>

      {/* Contenedor de las acciones de la práctica */}
      <div className="flex flex-col align-middle mr-10 justify-center gap-4 cursor-pointer">
        <button className="">
          {" "}
          <BiTrash className="icons-crud fade-in" />
        </button>
        <button>
          <AiFillEdit className="icons-crud fade-in" />
        </button>
      </div>
    </div>
  );
};
