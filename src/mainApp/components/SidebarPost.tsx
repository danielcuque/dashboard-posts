import { Link } from "react-router-dom";
import { useContext } from "react";
import { InformeContext } from "../context/";
export const SidebarPost = () => {
  const { setInformeActivo, usuarioActivo, informeActivo, theme } =
    useContext(InformeContext);

  if (usuarioActivo) {
    return (
      <aside className="lg:fixed  lg:flex lg:w-96 lg:h-screen lg:flex-col lg:border-l-2 lg:top-0 lg:right-0">
        <Link to="/">
          <img
            src="https://portal.ingenieria.usac.edu.gt/images/logo_facultad/fiusac_negro.png"
            alt="LOGO USAC"
            className="w-80 mt-5 ml-10 hidden lg:inline"
          />
        </Link>

        <h1 className="mt-10 text-lg lg:mx-10 border-t-2 border-gray-400 pt-10">
          Más publicaciones de:
        </h1>
        <h1 className="mb-10 text-lg font-bold lg:mx-10 text-black">
          {usuarioActivo.nombre}{" "}
        </h1>
        {usuarioActivo.informes.map((informe, index) => (
          <div
            key={index}
            onClick={() => setInformeActivo(informe)}
            style={
              theme.card
            }
            className={`cursor-pointer hover:border-gray-300 border border-white rounded-tl-md rounded-bl-md pl-2 ml-10 mb-4 `}
          >
            <h2 className="text-lg font-bold">{informe.titulo}</h2>
            <p className="text-sm text-subtitle">
              {informe.categorias.toString()}
            </p>
          </div>
        ))}
      </aside>
    );
  } else {
    return <></>;
  }
};
