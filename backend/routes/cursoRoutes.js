const express = require('express');
const Curso = require('../models/Curso');
const router = express.Router();

// Criar curso
router.post('/', async (req, res) => {
  try {
    const curso = new Curso(req.body);
    await curso.save();
    res.status(201).send(curso);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Listar cursos
router.get('/', async (req, res) => {
  try {
    const cursos = await Curso.find();
    res.send(cursos);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Atualizar curso
router.put('/:id', async (req, res) => {
  try {
    const curso = await Curso.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(curso);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Excluir curso
router.delete('/:id', async (req, res) => {
  try {
    await Curso.findByIdAndDelete(req.params.id);
    res.send({ message: 'Curso excluído com sucesso' });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;