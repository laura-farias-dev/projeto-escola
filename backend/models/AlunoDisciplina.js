const mongoose = require('mongoose');

const AlunoDisciplinaSchema = new mongoose.Schema({
  aluno: { type: mongoose.Schema.Types.ObjectId, ref: 'Aluno', required: true },
  disciplina: { type: mongoose.Schema.Types.ObjectId, ref: 'Disciplina', required: true },
});

module.exports = mongoose.model('AlunoDisciplina', AlunoDisciplinaSchema);