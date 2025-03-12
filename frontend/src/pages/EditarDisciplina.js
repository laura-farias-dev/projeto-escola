import React, { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditarDisciplina = () => {
  const [disciplina, setDisciplina] = useState({
    nome: '',
    cargaHoraria: '',
  });
  const [error, setError] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDisciplina = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/disciplinas/${id}`);
        if (!response.data) {
          throw new Error('Disciplina não encontrada.');
        }
        setDisciplina(response.data);
      } catch (err) {
        console.error('Erro ao carregar os dados da disciplina:', err);
        setError('Não foi possível carregar os dados da disciplina.');
      }
    };

    fetchDisciplina();
  }, [id]);

  const handleChange = (e) => {
    setDisciplina({ ...disciplina, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/disciplinas/${id}`, disciplina);
      navigate('/disciplinas');
    } catch (err) {
      console.error('Erro ao salvar as alterações:', err);
      alert('Não foi possível salvar as alterações.');
    }
  };

  if (error) {
    return (
      <Container className="mt-5">
        <h2>Erro</h2>
        <p>{error}</p>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <h2>Editar Disciplina</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            name="nome"
            value={disciplina.nome}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Carga Horária</Form.Label>
          <Form.Control
            type="number"
            name="cargaHoraria"
            value={disciplina.cargaHoraria}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Salvar
        </Button>{' '}
        <Button variant="secondary" onClick={() => navigate('/disciplinas')}>
          Cancelar
        </Button>
      </Form>
    </Container>
  );
};

export default EditarDisciplina;
