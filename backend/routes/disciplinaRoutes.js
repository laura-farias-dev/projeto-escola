const express = require('express');
const Disciplina = require('../models/Disciplina');
const router = express.Router();

// Criar disciplina
router.post('/', async (req, res) => {
  try {
    const disciplina = new Disciplina(req.body);
    await disciplina.save();
    res.status(201).send(disciplina);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Listar disciplinas
router.get('/', async (req, res) => {
  try {
    const disciplinas = await Disciplina.find();
    res.send(disciplinas);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Atualizar disciplina
router.put('/:id', async (req, res) => {
  try {
    const disciplina = await Disciplina.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(disciplina);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Excluir disciplina
router.delete('/:id', async (req, res) => {
  try {
    await Disciplina.findByIdAndDelete(req.params.id);
    res.send({ message: 'Disciplina excluída com sucesso' });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;