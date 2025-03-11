const mongoose = require('mongoose');

const AlunoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  endereco: { type: String, required: true },
  dataNascimento: { type: Date, required: true },
  matricula: { type: String, required: true, unique: true },
  telefone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  curso: { type: String, required: true },
});

module.exports = mongoose.model('Aluno', AlunoSchema);