import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthMailPassContext, signed } from "../contexts/authMailPassContext"; 

export const PrivateRoutes = () => {
  const { signed } = useContext(AuthMailPassContext);
  return signed ? <Outlet /> : <Navigate to="/tarefas" />;
};