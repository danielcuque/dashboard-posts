import { PracticeReport } from "../components";
import { SidebarPost } from "../components/SidebarPost";

export const StudentReport = () => {
  return (
    <div className="grid grid-col-1 p-10 gap-4 lg:grid-cols-12">
      <img
        src="https://portal.ingenieria.usac.edu.gt/images/logo_facultad/fiusac_negro.png"
        alt="Logo Fiusac"
        className="row-start-1 w-4/5 lg:hidden m-auto"
      ></img>
      <PracticeReport />
      <SidebarPost />
    </div>
  );
};
