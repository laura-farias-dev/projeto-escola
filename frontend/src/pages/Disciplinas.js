import React, { useState, useEffect } from 'react';
import { Table, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Disciplinas = () => {
  const [disciplinas, setDisciplinas] = useState([]);

  useEffect(() => {
    const fetchDisciplinas = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/disciplinas');
        setDisciplinas(response.data);
      } catch (error) {
        console.error('Erro ao buscar disciplinas:', error);
      }
    };

    fetchDisciplinas();
  }, []);

  const handleExcluir = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/disciplinas/${id}`);
      setDisciplinas(disciplinas.filter(disciplina => disciplina._id !== id));
    } catch (error) {
      console.error('Erro ao excluir disciplina:', error);
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Disciplinas</h2>
      <Link to="/adicionar-disciplina">
        <Button variant="success" className="mb-3">Adicionar Disciplina</Button>
      </Link>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Carga Horária</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {disciplinas.map((disciplina) => (
            <tr key={disciplina._id}>
              <td>{disciplina.nome}</td>
              <th>{disciplina.cargaHoraria}</th>
              <td>
                <Link to={`/editar-disciplina/${disciplina._id}`}>
                  <Button variant="primary" size="sm">Editar</Button>
                </Link>{' '}
                <Button variant="danger" size="sm" onClick={() => handleExcluir(disciplina._id)}>
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

export default Disciplinas;
