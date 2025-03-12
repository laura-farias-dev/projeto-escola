import React, { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdicionarDisciplina = () => {
  const [disciplina, setDisciplina] = useState({
    nome: '',
    cargaHoraria: '',
    curso: '',
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
    } catch (error) {
      console.error('Erro ao adicionar disciplina:', error);
    }
  };

  return (
    <Container className="mt-5">
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title className="mb-4">Adicionar Disciplina</Card.Title>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nome da Disciplina</Form.Label>
              <Form.Control
                type="text"
                placeholder="Informe o nome da disciplina"
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
                placeholder="Informe a carga horária"
                name="cargaHoraria"
                value={disciplina.cargaHoraria}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Curso</Form.Label>
              <Form.Select
                name="curso"
                value={disciplina.curso}
                onChange={handleChange}
                required
              >
                <option value="">Selecione um curso</option>
                <option value="Ciência da Computação">Ciência da Computação</option>
                <option value="Análise e Desenvolvimento de Sistemas">Análise e Desenvolvimento de Sistemas</option>
                <option value="Engenharia de Software">Engenharia de Software</option>
                <option value="Engenharia de Dados">Engenharia de Dados</option>
              </Form.Select>
            </Form.Group>

            <Button variant="success" type="submit">
              Adicionar
            </Button>{' '}
            <Button variant="secondary" onClick={() => navigate('/disciplinas')}>
              Cancelar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AdicionarDisciplina;
