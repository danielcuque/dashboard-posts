import { Route, Routes } from "react-router-dom"
import { IndexPage } from "../mainApp/pages"
import { StudentPage } from '../mainApp/pages/StudentPage';

export const MainAppRouter = () => {
    return (
        <Routes>
            {/* Indice de estudiantes */}
            <Route path="/" element={<IndexPage />} />

            {/* Captura de la informacion de estudiante */}
            <Route path="/estudiante/:nombre" element={<StudentPage />} />

            {/* Ruta de proteccion */}
            <Route path="/*" element={<IndexPage />} />

        </Routes>
    )
}
