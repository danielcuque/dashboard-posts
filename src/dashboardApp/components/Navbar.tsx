import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const Navbar = () => {
  const { startLogout, email } = useAuth();

  return (
    <div className="h-30 shadow-md flex p-5 justify-around items-center">
      <Link to="/">
        <img
          src="https://portal.ingenieria.usac.edu.gt/images/logo_facultad/fiusac_negro.png"
          alt="LOGO USAC"
          className="w-80 lg:inline"
        />
      </Link>
      {/* Nombre de usuario */}
      <div>
        <b>{email}</b>
      </div>
      <button
        className="bg-red-200 rounded-full px-4 py-2 font-bold hover:bg-red-400 fade-in"
        onClick={() => startLogout()}
      >
        Cerrar sesión
      </button>
    </div>
  );
};
