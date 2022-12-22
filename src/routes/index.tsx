import { Route, Routes } from "react-router-dom";
import { ProtectedRoutes } from "../components/protectedRoutes";
import { TechProvider } from "../contexts/TechContext";
import { DashBoard } from "../pages/dashboard";
import { Login } from "../pages/login";
import { NotFoundPage } from "../pages/notfoundpage";
import { RegisterPage } from "../pages/register";

export const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route element={<ProtectedRoutes />}>
      <Route
        path="/dashboard"
        element={
          <TechProvider>
            <DashBoard />
          </TechProvider>
        }
      />
    </Route>
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);
