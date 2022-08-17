import { Link, useNavigate } from 'react-router-dom';

import { CardPost } from "./CardPost";
import { Navbar } from "./Navbar";
import { useDashboard } from '../../hooks/useDashboard';

export const MenuPost = () => {

  const { uid, informes } = useDashboard();
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
            to="/dashboard/create"
            className="py-2 px-8 rounded-full border shadow-md hover:shadow-lg fade-in"

          >
            + NUEVO POST
          </Link>
        </div>
        {/* Lista de todas las publicaciones del usuario */}
        <section className="mt-5 flex flex-col justify-start">
          {
            informes.map(informe => (
              <CardPost informe={informe} key={informe.id} />
            ))
          }
        </section>
      </main>
    </>
  );
};
