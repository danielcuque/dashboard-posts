import { Route, Routes } from "react-router-dom"
import { PreloadData } from "../mainApp/components/PreloadData";
import { IndexPage } from "../mainApp/pages"
import { StudentPage } from '../mainApp/pages/StudentPage';
import { StudentReport } from "../mainApp/pages/StudentReport";

export const MainAppRouter = () => {
    return (
        <Routes>
            {/* Indice de estudiantes */}
            <Route path="/" element={<IndexPage />} />



            {/* Captura de la informacion de estudiante */}
            <Route path="/estudiante/:nombre" element={<StudentPage />} />


            {/* Vista del reporte */}
            <Route path="/estudiante/:nombre/informes" element={<StudentReport />} />

            {/* TODO: */}
            {/* SETERAR Practica Activa  */}
            <Route path="/estudiante/:nombre/informes/:numero" element={<PreloadData />} />


            {/* Ruta de proteccion */}
            <Route path="/*" element={<IndexPage />} />

        </Routes>
    )
}
