import { Link } from "react-router-dom";

export const Navbar = () => {
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
        <b>Usuario</b>
      </div>
    </div>
  );
};
