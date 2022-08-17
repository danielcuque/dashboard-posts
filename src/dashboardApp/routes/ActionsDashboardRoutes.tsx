import { Navigate, Route, Routes } from "react-router-dom";
import { MenuPost } from "../components";
import { CreatePost, EditPost } from "../pages";
import { useAuth } from '../../hooks/useAuth';
import { ComponentCreatorProvider } from "../context";

export const ActionsDashboardRoutes = () => {

  const { status } = useAuth();

  if (status == 'not-authenticated') {
    return <Navigate to="/login" />
  }

  return (
    <ComponentCreatorProvider>
      <Routes>

        {/* Create post */}
        <Route path="create" element={<CreatePost />} />

        {/* Edit post */}
        <Route path="edit/:id" element={<EditPost />} />

        {/* Main dash */}
        <Route path="/*" element={<MenuPost />} />
      </Routes>
    </ComponentCreatorProvider>
  );
};
