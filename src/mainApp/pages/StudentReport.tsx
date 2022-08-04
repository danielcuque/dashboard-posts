import { Link } from "react-router-dom";
import { PracticeReport } from "../components";
import { SidebarPost } from "../components/SidebarPost";
import { useStudent } from '../../hooks/useStudent';

export const StudentReport = () => {

  const { theme } = useStudent();

  return (
    <div style={theme.mainContainerStyles} className="grid grid-col-1 p-10 gap-4 lg:grid-cols-12 animate__animated animate__fadeIn animate__faster">
      <Link to="/">
        <img
          src="https://portal.ingenieria.usac.edu.gt/images/logo_facultad/fiusac_negro.png"
          alt="Logo Fiusac"
          className="row-start-1 lg:hidden w-4/5 mx-auto md:w-1/2 2xl:w-1/3 mt-4"
        />
      </Link>

      <PracticeReport />
      <SidebarPost />
    </div>
  );
};
