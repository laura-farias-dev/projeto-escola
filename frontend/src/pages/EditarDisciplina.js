import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';

const EditarDisciplina = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [nome, setNome] = useState('');
  const [cargaHoraria, setCargaHoraria] = useState('');
  const [curso, setCurso] = useState('');

  useEffect(() => {
    const fetchDisciplina = async () => {
      try {
        const response = await api.get(`/disciplinas/${id}`);
        setNome(response.data.nome);
        setCargaHoraria(response.data.cargaHoraria);
        setCurso(response.data.curso);
      } catch (error) {
        console.error('Erro ao carregar disciplina:', error);
      }
    };

    fetchDisciplina();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/disciplinas/${id}`, { nome, cargaHoraria, curso });
      alert('Disciplina atualizada com sucesso!');
      navigate('/disciplinas'); // Redireciona para a lista de disciplinas
    } catch (error) {
      console.error('Erro ao atualizar disciplina:', error);
    }
  };

  return (
    <div>
      <h1>Editar Disciplina</h1>
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
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default EditarDisciplina;