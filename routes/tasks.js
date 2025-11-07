const express = require('express');
const router = express.Router();
const pool = require('../db')

router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tasks');
    return res.json(result.rows)
  } catch (err) {
    return res.status(500).json({ error: 'Erro ao buscar tarefas' })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const result = await pool.query('SELECT * FROM tasks WHERE id = $1', [id])
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Tarefa não encontrada' })
    }
    return res.status(200).json(result.rows)
  } catch (err) {
    return res.status(500).json({ error: "Erro ao buscar tarefa" })
  }
})

router.post("/", async (req, res) => {
  try {
    const { title, completed } = req.body;
    pool.query('INSERT INTO tasks (title , completed) VALUES ($1 ,$2)', [title, completed ?? false])
    res.status(200).json({ success: "Tarefa criada com sucesso"})
  } catch (err) {
    res.status(500).json({ error: "Erro ao criar tarefa" })
  }
})

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;
    const result = await pool.query('UPDATE tasks SET title = $1, completed = $2 WHERE id = $3', [title, completed, id]);
    if (result.rows.length === 0)
      return res.status(404).json({ error: 'Tarefa não encontrada' });
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao atualizar tarefa' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM tasks WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Tarefa não encontrada' });
    }
    res.json({ message: `Tarefa ${id} deletada com sucesso!` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao deletar tarefa' });
  }
});

module.exports = router