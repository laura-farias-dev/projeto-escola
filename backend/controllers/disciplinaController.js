const Disciplina = require("../models/Disciplina");

// Listar todas as disciplinas
const listarDisciplinas = async (req, res) => {
  try {
    const disciplinas = await Disciplina.find();
    res.status(200).json(disciplinas);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar disciplinas" });
  }
};

// Adicionar uma nova disciplina
const adicionarDisciplina = async (req, res) => {
  const { nome, cargaHoraria, curso } = req.body;
  try {
    const novaDisciplina = new Disciplina({ nome, cargaHoraria, curso });
    await novaDisciplina.save();
    res.status(201).json(novaDisciplina);
  } catch (error) {
    res.status(500).json({ error: "Erro ao adicionar disciplina" });
  }
};

// Editar uma disciplina existente
const editarDisciplina = async (req, res) => {
  const { id } = req.params;
  const { nome, cargaHoraria, curso } = req.body;
  try {
    const disciplinaAtualizada = await Disciplina.findByIdAndUpdate(
      id,
      { nome, cargaHoraria, curso },
      { new: true }
    );
    res.status(200).json(disciplinaAtualizada);
  } catch (error) {
    res.status(500).json({ error: "Erro ao editar disciplina" });
  }
};

// Excluir uma disciplina
const excluirDisciplina = async (req, res) => {
  const { id } = req.params;
  try {
    await Disciplina.findByIdAndDelete(id);
    res.status(200).json({ message: "Disciplina excluída com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir disciplina" });
  }
};

module.exports = { listarDisciplinas, adicionarDisciplina, editarDisciplina, excluirDisciplina };