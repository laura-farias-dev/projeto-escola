import React, { useEffect, useState } from 'react';
import { Table, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Alunos = () => {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    const fetchAlunos = async () => {
      const response = await axios.get('http://localhost:5000/api/alunos');
      setAlunos(response.data);
    };

    fetchAlunos();
  }, []);

  const handleExcluir = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/alunos/${id}`);
      setAlunos(alunos.filter((aluno) => aluno._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Alunos</h2>
      <Link to="/adicionar-aluno">
        <Button variant="success" className="mb-3">Adicionar Aluno</Button>
      </Link>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Matrícula</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map((aluno) => (
            <tr key={aluno._id}>
              <td>{aluno.nome}</td>
              <td>{aluno.matricula}</td>
              <td>{aluno.email}</td>
              <td>
                <Link to={`/editar-aluno/${aluno._id}`}>
                  <Button variant="primary" size="sm">Editar</Button>
                </Link>{' '}
                <Link to={`/detalhar-aluno/${aluno._id}`}>
                  <Button variant="info" size="sm">Detalhar</Button>
                </Link>{' '}
                <Button variant="danger" size="sm" onClick={() => handleExcluir(aluno._id)}>
                  Excluir
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Alunos;
