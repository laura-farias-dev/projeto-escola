import React, { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdicionarAluno = () => {
  const [aluno, setAluno] = useState({
    nome: '',
    endereco: '',
    dataNascimento: '',
    matricula: '',
    telefone: '',
    email: '',
    curso: '',
  });

  const [cursos, setCursos] = useState([]); // Estado para armazenar a lista de cursos
  const navigate = useNavigate();

  // Buscar a lista de cursos ao carregar o componente
  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/cursos');
        setCursos(response.data);
      } catch (error) {
        console.error('Erro ao buscar cursos:', error);
      }
    };
    fetchCursos();
  }, []);

  const handleChange = (e) => {
    setAluno({ ...aluno, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/alunos', aluno);
      navigate('/alunos');
    } catch (error) {
      console.error('Erro ao adicionar aluno:', error);
    }
  };

  return (
    <Container>
      <h1>Adicionar Aluno</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" name="nome" value={aluno.nome} onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Endereço</Form.Label>
          <Form.Control type="text" name="endereco" value={aluno.endereco} onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Data de Nascimento</Form.Label>
          <Form.Control type="date" name="dataNascimento" value={aluno.dataNascimento} onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Matrícula</Form.Label>
          <Form.Control type="text" name="matricula" value={aluno.matricula} onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Telefone</Form.Label>
          <Form.Control type="text" name="telefone" value={aluno.telefone} onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={aluno.email} onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Curso</Form.Label>
          <Form.Select name="curso" value={aluno.curso} onChange={handleChange} required>
            <option value="">Selecione um curso</option>
            {cursos.map((curso) => (
              <option key={curso._id} value={curso.nome}>
                {curso.nome}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Button type="submit" variant="primary">Adicionar</Button>
      </Form>
    </Container>
  );
};

export default AdicionarAluno;