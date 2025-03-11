import React, { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditarDisciplina = () => {
  const [disciplina, setDisciplina] = useState({
    nome: '',
    cargaHoraria: '',
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDisciplina = async () => {
      const response = await axios.get(`http://localhost:5000/api/disciplinas/${id}`);
      setDisciplina(response.data);
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
      console.error(err);
    }
  };

  return (
    <Container>
      <h1>Editar Disciplina</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" name="nome" value={disciplina.nome} onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Carga Horária</Form.Label>
          <Form.Control type="number" name="cargaHoraria" value={disciplina.cargaHoraria} onChange={handleChange} required />
        </Form.Group>
        <Button type="submit" variant="primary">Salvar</Button>
      </Form>
    </Container>
  );
};

export default EditarDisciplina;