import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

export const ProtectedRoute = ({ allowedRoles }) => {
  const { auth } = useAuth();

  if (!auth.isAuth) {
    return <Navigate to="/user-login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(auth.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};
