import { PracticeReport } from "../components";
import { SidebarPost } from "../components/SidebarPost";

export const StudentPage = () => {
  // En esta parte se recupera de la URL la información de los integrantes del grupo

  return (
    <div className="mt-5 ml-5 flex flex-col">
      {/* Se podria utilizar un router aqui */}
      <PracticeReport />

      {/* Sidebar con las publicaciones del estudiante */}

      <SidebarPost userName="Daniel Cuque" />
    </div>
  );
};
