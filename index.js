const express = require('express');
const pool = require('./db')
const app = express();

const PORT = process.env.PORT;

app.use(express.json());

pool.query("SELECT NOW()", (error , res) => {
  if (error) {
 console.error("Erro ao conectar ao banco:", err);
 } else {
 console.log("Banco conectado:", result.rows);
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