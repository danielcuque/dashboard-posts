import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="h-30  bg-blue-400">
      <Link to="/">
        <img
          src="https://portal.ingenieria.usac.edu.gt/images/logo_facultad/fiusac_negro.png"
          alt="LOGO USAC"
          className="w-80 mt-5 ml-10 hidden lg:inline"
        />
      </Link>
    </div>
  );
};
