import React, { useState, useEffect } from 'react';
import { Container, Card } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DetalharAluno = () => {
  const [aluno, setAluno] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchAluno = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/alunos/${id}`);
        setAluno(response.data);
      } catch (error) {
        console.error('Erro ao buscar aluno:', error);
      }
    };

    fetchAluno();
  }, [id]);

  if (!aluno) {
    return (
      <Container className="mt-5">
        <h2>Carregando...</h2>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title>Detalhes do Aluno</Card.Title>

          <p><strong>Nome:</strong> {aluno.nome}</p>
          <p><strong>Endereço:</strong> {aluno.endereco}</p>
          <p><strong>Data de Nascimento:</strong> {new Date(aluno.dataNascimento).toLocaleDateString()}</p>
          <p><strong>Matrícula:</strong> {aluno.matricula}</p>
          <p><strong>Telefone:</strong> {aluno.telefone}</p>
          <p><strong>Email:</strong> {aluno.email}</p>
          <p><strong>Curso:</strong> {aluno.curso}</p>

        </Card.Body>
      </Card>
    </Container>
  );
};

export default DetalharAluno;
