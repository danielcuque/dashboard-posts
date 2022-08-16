import { Navigate, Route, Routes } from "react-router-dom";
import { MenuPost } from "../components/MenuPost";
import { CreatePost, EditPost } from "../pages";

export const ActionsDashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MenuPost />} />

      {/* Create post */}
      <Route path="/create" element={<CreatePost />} />

      {/* Edit post */}
      <Route path="/edit/:id" element={<EditPost />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
