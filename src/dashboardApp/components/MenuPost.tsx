import { useContext } from "react";
import { Link } from "react-router-dom";
import { InformeContext } from "../../mainApp/context";

import { CardPost } from "./CardPost";
import { Navbar } from "./Navbar";

export const MenuPost = () => {
  const { setInformeActivo, usuarioActivo, informeActivo, theme } =
    useContext(InformeContext);
  const numberOfPosts = 2;
  return (
    <>
      <Navbar />

      {/* Cuerpo principal */}
      <main className="mt-10 px-20">
        <div className="flex justify-between items-center">
          {/* Mostrar la cantidad de publicaciones que tiene el usuario */}
          <p className="text-lg">Todos ({numberOfPosts})</p>

          {/* Creación de un nuevo post */}
          <Link
            to="/create"
            className="py-2 px-8 rounded-full border shadow-md hover:shadow-lg fade-in"
          >
            + NUEVO POST
          </Link>
        </div>
        {/* Lista de todas las publicaciones del usuario */}
        <section className="mt-5 flex flex-col justify-start">
          <CardPost />
          <CardPost />
        </section>
      </main>
    </>
  );
};
