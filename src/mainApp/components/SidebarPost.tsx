import { Link } from "react-router-dom";

type Props = {
  userName: string;
  idPost: string;
  idUser: string;
};

const practices = [
  {
    id: "1",
    title: "Práctica 1",
    subtitle: "Mantenimiento de una computadora",
  },
  {
    id: "2",
    title: "Práctica 2",
    subtitle: "Conexiones entre computadoras",
  },
  {
    id: "3",
    title: "Práctica 3",
    subtitle: "Mantenimiento de una computadora",
  },
];

export const SidebarPost = ({ userName, idPost }: Props) => {
  return (
    <aside className="flex fixed top-0 right-0 w-96 flex-col h-screen border-l-2">
      <img
        src="https://portal.ingenieria.usac.edu.gt/images/logo_facultad/fiusac_negro.png"
        alt="LOGO USAC"
        className="w-80 mt-5 ml-10"
      />

      <h1 className="m-10 text-lg font-bold mb-4">
        Más publicaciones de {userName}{" "}
      </h1>
      {practices.map(({ id, title, subtitle }) => (
        <Link key={id} to={`/estudiante/${id}/`} className="ml-10 mb-4">
          <h2 className="text-lg font-bold">{title}</h2>
          <p className="text-sm text-subtitle">{subtitle}</p>
        </Link>
      ))}
    </aside>
  );
};
