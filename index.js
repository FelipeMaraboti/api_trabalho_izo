const express = require('express');
const pool = require('./db')
const app = express();

const dotenv = require('dotenv');
dotenv.config({ path: ".env"})
const PORT = process.env.PORT;

app.use(express.json());

pool.query("SELECT NOW()", (err , res) => {
  try {
    console.log("Banco conectado:", result.rows);
  } catch (error) {
    console.error("Erro ao conectar ao banco:", err);
  }
})

const taskRoutes = require('./routes/tasks')

app.use('/tasks', taskRoutes)

app.get("/" ,(req, res) => {
  res.json({ "message": `API rodando na porta: ${PORT}` });
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`);
})