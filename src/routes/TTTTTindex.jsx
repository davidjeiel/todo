import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { authGoogleContext } from "../contexts/authGoogleContext";

export const PrivateRoutes = () => {
  const { signed } = useContext(authGoogleContext);
  return signed ? <Outlet /> : <Navigate to="/tarefas" />;
};