const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Habilita o CORS para todas as rotas
app.use(express.json()); // Habilita o parsing de JSON no corpo das requisições

// Conexão com o MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

// Rotas
const alunoRoutes = require('./routes/alunoRoutes');
const disciplinaRoutes = require('./routes/disciplinaRoutes');
const matriculaRoutes = require('./routes/matriculaRoutes');
const cursoRoutes = require('./routes/cursoRoutes');


app.use('/api/alunos', alunoRoutes);
app.use('/api/disciplinas', disciplinaRoutes);
app.use('/api/matriculas', matriculaRoutes);
app.use('/api/cursos', cursoRoutes);


// Rota de teste
app.get('/', (req, res) => {
  res.send('API do Projeto Escola');
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});