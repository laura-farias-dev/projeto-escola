import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import Alunos from './pages/Alunos';
import AdicionarAluno from './pages/AdicionarAluno';
import EditarAluno from './pages/EditarAluno';
import Disciplinas from './pages/Disciplinas';
import AdicionarDisciplina from './pages/AdicionarDisciplina';
import EditarDisciplina from './pages/EditarDisciplina';

const App = () => {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        {/* Rotas para Alunos */}
        <Route path="/alunos" element={<Alunos />} />
        <Route path="/alunos/novo" element={<AdicionarAluno />} />
        <Route path="/alunos/editar/:id" element={<EditarAluno />} />

        {/* Rotas para Disciplinas */}
        <Route path="/disciplinas" element={<Disciplinas />} />
        <Route path="/disciplinas/nova" element={<AdicionarDisciplina />} />
        <Route path="/disciplinas/editar/:id" element={<EditarDisciplina />} />
      </Routes>
    </Router>
  );
};

export default App;