import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signIn = async (credentials) => {
    if (credentials.email === "teste@escola.com" && credentials.password === "123") {
      setUser({ email: credentials.email }); 
      return true; 
    } else {
      throw new Error("Credenciais inválidas"); 
    }
  };

  const signOut = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};