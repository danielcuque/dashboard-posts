import { Link } from "react-router-dom";

type Props = {
  userName: string;
  idPost: string;
  idUser: string;
};

export const SidebarPost = ({ userName, idPost }: Props) => {
  return (
    <aside className="flex flex-col items-center h-screen border-l-2 ml-10">
      <img
        src="https://portal.ingenieria.usac.edu.gt/images/logo_facultad/fiusac_negro.png"
        alt="Logo Fiusac"
        className="w-80 mt-5"
      />
      <div className="m-10">
        <h1 className="text-lg font-bold mb-4 ">
          Más publicaciones de {userName}{" "}
        </h1>
        <Link to={`/estudiante/${idPost}`}>
          <h1 className="text-lg font-bold">Práctica 1</h1>
          <p>Desarrollo Web</p>
        </Link>
      </div>
    </aside>
  );
};
