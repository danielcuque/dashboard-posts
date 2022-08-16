import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../dashboardApp/pages";
import { ActionsDashboardRoutes } from "../dashboardApp/routes/ActionsDashboardRoutes";

const status = true;
export const DashboardRouter = () => {
  return (
    <Routes>
      {/* Login */}
      {status ? (
        <Route path="/" element={<ActionsDashboardRoutes />} />
      ) : (
        <Route path="/" element={<LoginPage />} />
      )}

      {/* Otras rutas del dashboard (VERIFICAR ESTADO DE LA SESION ternario con la ruta de arriba)  */}
      {/* <Route path="/edit/:id" element={<MenuPost />} /> */}

      {/* Ruta de proteccion */}
      {/* <Route path="/*" element={<Navigate to="/login" />} /> */}
    </Routes>
  );
};
