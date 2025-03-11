const express = require('express');
const AlunoDisciplina = require('../models/AlunoDisciplina');
const router = express.Router();

// Matricular aluno em disciplina
router.post('/', async (req, res) => {
  try {
    const matricula = new AlunoDisciplina(req.body);
    await matricula.save();
    res.status(201).send(matricula);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Listar disciplinas de um aluno
router.get('/aluno/:id', async (req, res) => {
  try {
    const matriculas = await AlunoDisciplina.find({ aluno: req.params.id }).populate('disciplina');
    res.send(matriculas);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;