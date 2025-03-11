import React, { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { format } from 'date-fns';

const EditarAluno = () => {
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
  const { id } = useParams();
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

    const fetchAluno = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/alunos/${id}`);
        const alunoData = response.data;

        // Formate a data de nascimento para YYYY-MM-DD
        const dataFormatada = format(new Date(alunoData.dataNascimento), 'yyyy-MM-dd');

        // Atualize o estado com os dados do aluno, incluindo a data formatada
        setAluno({
          ...alunoData,
          dataNascimento: dataFormatada,
        });
      } catch (error) {
        console.error('Erro ao buscar aluno:', error);
      }
    };

    fetchCursos();
    fetchAluno();
  }, [id]);

  const handleChange = (e) => {
    setAluno({ ...aluno, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/alunos/${id}`, aluno);
      navigate('/alunos');
    } catch (error) {
      console.error('Erro ao atualizar aluno:', error);
    }
  };

  return (
    <Container>
      <h1>Editar Aluno</h1>
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
        <Button type="submit" variant="primary">Salvar</Button>
      </Form>
    </Container>
  );
};

export default EditarAluno;