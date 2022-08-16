import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../dashboardApp/pages";
import { useAuth } from '../hooks/useAuth';

export const AuthRouter = () => {

  const { status } = useAuth();

  if (status === 'authenticated') {
    return <Navigate to="/dashboard" />
  }

  return (
    <Routes>
      {/* Login */}
      <Route path="/*" element={<LoginPage />} />
    </Routes>
  );
};
