const express = require('express');
const Aluno = require('../models/Aluno');
const router = express.Router();

// Criar aluno
router.post('/', async (req, res) => {
  try {
    const aluno = new Aluno(req.body);
    await aluno.save();
    res.status(201).send(aluno);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Listar alunos
router.get('/', async (req, res) => {
  try {
    const alunos = await Aluno.find();
    res.send(alunos);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Buscar aluno por ID
router.get('/:id', async (req, res) => {
  try {
    const aluno = await Aluno.findById(req.params.id);
    if (!aluno) {
      return res.status(404).send({ message: 'Aluno não encontrado' });
    }
    res.send(aluno);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Atualizar aluno
router.put('/:id', async (req, res) => {
  try {
    const aluno = await Aluno.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(aluno);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Excluir aluno
router.delete('/:id', async (req, res) => {
  try {
    await Aluno.findByIdAndDelete(req.params.id);
    res.send({ message: 'Aluno excluído com sucesso' });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;