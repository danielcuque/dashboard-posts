import { PracticeReport } from "../components";
import { SidebarPost } from "../components/SidebarPost";

export const StudentPage = () => {
  // En esta parte se recupera de la URL la información de los integrantes del grupo

  return (
    <div className="flex">
      {/* Se podria utilizar un router aqui */}
      <PracticeReport />

      {/* Sidebar con las publicaciones del estudiante */}

      <SidebarPost idPost="1" idUser="1" userName="Daniel Cuque" />
    </div>
  );
};
