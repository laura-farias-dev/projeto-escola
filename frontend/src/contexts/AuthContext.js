import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signIn = async (credentials) => {
    // Simulação de autenticação
    if (credentials.email === "teste@escola.com" && credentials.password === "123") {
      setUser({ email: credentials.email }); // Atualiza o estado do usuário
      return true; // Retorna true para indicar sucesso
    } else {
      throw new Error("Credenciais inválidas"); // Lança um erro em caso de falha
    }
  };

  const signOut = () => {
    setUser(null); // Limpa o estado do usuário
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};