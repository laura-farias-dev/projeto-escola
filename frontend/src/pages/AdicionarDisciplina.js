import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

const AdicionarDisciplina = () => {
  const [nome, setNome] = useState('');
  const [cargaHoraria, setCargaHoraria] = useState('');
  const [curso, setCurso] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/disciplinas', { nome, cargaHoraria, curso });
      alert('Disciplina adicionada com sucesso!');
      navigate('/disciplinas'); // Redireciona para a lista de disciplinas
    } catch (error) {
      console.error('Erro ao adicionar disciplina:', error);
    }
  };

  return (
    <div>
      <h1>Adicionar Disciplina</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Carga Horária"
          value={cargaHoraria}
          onChange={(e) => setCargaHoraria(e.target.value)}
          required
        />
        <select
          value={curso}
          onChange={(e) => setCurso(e.target.value)}
          required
        >
          <option value="">Selecione um curso</option>
          <option value="Ciência da Computação">Ciência da Computação</option>
          <option value="Análise e Desenvolvimento de Sistemas">Análise e Desenvolvimento de Sistemas</option>
          <option value="Engenharia de Software">Engenharia de Software</option>
          <option value="Engenharia de Dados">Engenharia de Dados</option>
        </select>
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default AdicionarDisciplina;