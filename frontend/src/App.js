import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import Home from "./pages/Home";
import Alunos from "./pages/Alunos";
import AdicionarAluno from "./pages/AdicionarAluno";
import EditarAluno from "./pages/EditarAluno";
import DetalharAluno from "./pages/DetalharAluno";
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
        {/* Página inicial (rota privada) */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        {/* Página de login (rota pública) */}
        <Route path="/login" element={<Login />} />

        {/* Rotas para Alunos */}
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
          path="/detalhar-aluno/:id"
          element={
            <PrivateRoute>
              <DetalharAluno />
            </PrivateRoute>
          }
        />

        {/* Rotas para Disciplinas */}
        <Route
          path="/disciplinas"
          element={
            <PrivateRoute>
              <Disciplinas />
            </PrivateRoute>
          }
        />
        <Route
          path="/adicionar-disciplina"
          element={
            <PrivateRoute>
              <AdicionarDisciplina />
            </PrivateRoute>
          }
        />
        <Route
          path="/editar-disciplina/:id"
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
