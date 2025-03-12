import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  // Se o usuário não estiver autenticado, redirecione para a tela de login
  if (!user) {
    return <Navigate to="/login" />;
  }

  // Se o usuário estiver autenticado, renderize o componente da rota
  return children;
};

export default PrivateRoute;