import { Route, Routes } from "react-router-dom"
import { MainAppRouter } from './MainAppRouter';
import { DashboardRouter } from './DashboardRoutes';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/login" element={<DashboardRouter />} />
            <Route path="/*" element={<MainAppRouter />} />
        </Routes>
    )
}
