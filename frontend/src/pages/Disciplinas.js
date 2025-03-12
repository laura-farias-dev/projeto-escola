import React, { useEffect, useState } from 'react';
import api from '../services/api';

const Disciplinas = () => {
  const [disciplinas, setDisciplinas] = useState([]);

  useEffect(() => {
    const fetchDisciplinas = async () => {
      try {
        const response = await api.get('/disciplinas');
        setDisciplinas(response.data);
      } catch (error) {
        console.error('Erro ao listar disciplinas:', error);
      }
    };

    fetchDisciplinas();
  }, []);

  return (
    <div>
      <h1>Disciplinas</h1>
      <ul>
        {disciplinas.map((disciplina) => (
          <li key={disciplina._id}>
            {disciplina.nome} - {disciplina.cargaHoraria}h - {disciplina.curso}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Disciplinas;