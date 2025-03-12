import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import Home from "./pages/Home";
import Alunos from "./pages/Alunos";
import AdicionarAluno from "./pages/AdicionarAluno";
import EditarAluno from "./pages/EditarAluno";
import Disciplinas from "./pages/Disciplinas";
import AdicionarDisciplina from "./pages/AdicionarDisciplina";
import EditarDisciplina from "./pages/EditarDisciplina";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/alunos"
          element={
            <PrivateRoute>
              <Alunos />
            </PrivateRoute>
          }
        />
        <Route
          path="/alunos/novo"
          element={
            <PrivateRoute>
              <AdicionarAluno />
            </PrivateRoute>
          }
        />
        <Route
          path="/alunos/editar/:id"
          element={
            <PrivateRoute>
              <EditarAluno />
            </PrivateRoute>
          }
        />
        <Route
          path="/disciplinas"
          element={
            <PrivateRoute>
              <Disciplinas />
            </PrivateRoute>
          }
        />
        <Route
          path="/disciplinas/nova"
          element={
            <PrivateRoute>
              <AdicionarDisciplina />
            </PrivateRoute>
          }
        />
        <Route
          path="/disciplinas/editar/:id"
          element={
            <PrivateRoute>
              <EditarDisciplina />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;