const mongoose = require("mongoose");

const DisciplinaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  cargaHoraria: { type: Number, required: true },
  curso: { type: String, required: true, enum: ["Ciência da Computação", "Análise e Desenvolvimento de Sistemas", "Engenharia de Software", "Engenharia de Dados"] },
});

module.exports = mongoose.model("Disciplina", DisciplinaSchema);