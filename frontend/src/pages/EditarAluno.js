import React, { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

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

  const [cursos, setCursos] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const alunoResponse = await axios.get(`http://localhost:5000/api/alunos/${id}`);
        const alunoData = alunoResponse.data;

        // Formatar a data de nascimento para YYYY-MM-DD
        alunoData.dataNascimento = new Date(alunoData.dataNascimento).toISOString().split('T')[0];
        setAluno(alunoData);

        const cursosResponse = await axios.get('http://localhost:5000/api/cursos');
        setCursos(cursosResponse.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
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
    <Container className="mt-5">
      <h2>Editar Aluno</h2>
      {/* Formulário */}
      {/* Mesma estrutura do AdicionarAluno */}
    </Container>
  );
};

export default EditarAluno;
