import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdicionarDisciplina = () => {
  const [disciplina, setDisciplina] = useState({
    nome: '',
    cargaHoraria: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setDisciplina({ ...disciplina, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/disciplinas', disciplina);
      navigate('/disciplinas');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <h1>Adicionar Disciplina</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" name="nome" value={disciplina.nome} onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Carga Horária</Form.Label>
          <Form.Control type="number" name="cargaHoraria" value={disciplina.cargaHoraria} onChange={handleChange} required />
        </Form.Group>
        <Button type="submit" variant="primary">Adicionar</Button>
      </Form>
    </Container>
  );
};

export default AdicionarDisciplina;