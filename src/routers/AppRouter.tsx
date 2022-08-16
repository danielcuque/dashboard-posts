import { Route, Routes } from "react-router-dom"
import { MainAppRouter } from './MainAppRouter';
import { AuthRouter } from './AuthRouter';
import { ActionsDashboardRoutes } from "../dashboardApp/routes/ActionsDashboardRoutes";
import { useCheckAuth } from "../hooks";
import { Loader } from "../mainApp/components/Loader";

export const AppRouter = () => {

    const { status } = useCheckAuth();

    if (status == 'checking') {
        return <Loader />
    }

    return (
        <Routes>
            <Route path="/login" element={<AuthRouter />} />
            <Route path="/dashboard" element={<ActionsDashboardRoutes />} />
            <Route path="/*" element={<MainAppRouter />} />
        </Routes>
    )
}
